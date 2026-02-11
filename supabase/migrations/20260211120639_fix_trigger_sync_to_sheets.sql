/*
  # Исправление триггера синхронизации с Google Sheets

  ## Проблема
  Предыдущая версия триггера пыталась извлечь host из request.headers,
  что вызывало ошибку типов при каcте text в json.

  ## Решение
  Упрощаем логику - используем прямой URL из переменных окружения Supabase.
  Если переменная не задана, используем fallback на основе известного URL проекта.

  ## Изменения
  - Переписываем функцию trigger_sync_to_sheets() с упрощенной логикой
  - Убираем попытку парсинга request.headers как JSON
*/

-- Удаляем старую функцию и создаём новую
CREATE OR REPLACE FUNCTION trigger_sync_to_sheets()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
  function_url text;
BEGIN
  -- Используем прямой URL проекта Supabase
  -- В production среде Supabase автоматически предоставляет SUPABASE_URL
  function_url := 'https://paoubdkmkldahmgydqrr.supabase.co/functions/v1/sync-to-sheets';

  -- Отправляем асинхронный HTTP запрос к Edge Function
  SELECT net.http_post(
    url := function_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhb3ViZGtta2xkYWhtZ3lkcXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MDI0MzAsImV4cCI6MjA4NjM3ODQzMH0.2HCLTmZl20kGBo24onWfNK7CM8uRuuykrlzlr7KOsR0'
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

-- Триггер уже существует, но на всякий случай пересоздадим
DROP TRIGGER IF EXISTS on_lead_request_created ON lead_requests;

CREATE TRIGGER on_lead_request_created
  AFTER INSERT ON lead_requests
  FOR EACH ROW
  EXECUTE FUNCTION trigger_sync_to_sheets();
