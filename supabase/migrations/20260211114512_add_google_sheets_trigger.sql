/*
  # Добавление триггера для синхронизации с Google Sheets

  ## Описание
  Создаёт триггер базы данных, который автоматически отправляет новые заявки в Google Sheets
  через Edge Function при каждой новой вставке в таблицу lead_requests.

  ## Изменения
  1. Включение расширения `pg_net` для HTTP запросов из БД
  2. Создание функции триггера для вызова Edge Function
  3. Создание триггера на таблице `lead_requests`

  ## Примечания
  - Триггер выполняется асинхронно, не блокирует вставку данных
  - Использует Supabase Edge Function URL
  - Требует настройки переменной окружения GOOGLE_SHEETS_WEBHOOK_URL в Edge Function
*/

-- Включаем расширение pg_net для HTTP запросов
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Создаём функцию триггера для отправки данных в Edge Function
CREATE OR REPLACE FUNCTION trigger_sync_to_sheets()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
  function_url text;
  service_role_key text;
BEGIN
  -- Получаем URL Supabase из настроек
  function_url := current_setting('app.settings.supabase_url', true) || '/functions/v1/sync-to-sheets';
  service_role_key := current_setting('app.settings.supabase_service_role_key', true);

  -- Если настройки не заданы, используем значения по умолчанию
  IF function_url IS NULL OR function_url = '/functions/v1/sync-to-sheets' THEN
    function_url := 'https://' || current_setting('request.headers', true)::json->>'host' || '/functions/v1/sync-to-sheets';
  END IF;

  -- Отправляем асинхронный HTTP запрос к Edge Function
  SELECT net.http_post(
    url := function_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || coalesce(service_role_key, '')
    ),
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', 'lead_requests',
      'record', row_to_json(NEW)
    )
  ) INTO request_id;

  -- Логируем ID запроса
  RAISE LOG 'Triggered sync-to-sheets function with request_id: %', request_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Создаём триггер на таблице lead_requests
DROP TRIGGER IF EXISTS on_lead_request_created ON lead_requests;

CREATE TRIGGER on_lead_request_created
  AFTER INSERT ON lead_requests
  FOR EACH ROW
  EXECUTE FUNCTION trigger_sync_to_sheets();

-- Комментарии для документации
COMMENT ON FUNCTION trigger_sync_to_sheets IS 'Автоматически синхронизирует новые заявки с Google Sheets через Edge Function';
COMMENT ON TRIGGER on_lead_request_created ON lead_requests IS 'Триггер для автоматической отправки новых заявок в Google Sheets';
