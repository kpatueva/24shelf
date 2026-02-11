# 24SHELF Landing Page

Лендинг для сервиса мониторинга товаров на маркетплейсах Wildberries и Ozon.

## Быстрый старт

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки
```bash
npm run dev
```

### Сборка для продакшена
```bash
npm run build
```

## Деплой на хостинг

Для развертывания сайта на сторонний хостинг (Netlify, Vercel и др.) с рабочей формой заявок, следуйте **[подробной инструкции в DEPLOY.md](./DEPLOY.md)**.

### Быстрый чеклист для деплоя:

1. Соберите проект: `npm run build`
2. Загрузите папку `dist` на хостинг
3. **Важно!** Добавьте переменные окружения в настройках хостинга:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Пересоберите проект на хостинге

**Подробная пошаговая инструкция: [DEPLOY.md](./DEPLOY.md)**

## Технологии

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase (база данных)
- Lucide React (иконки)

## Структура проекта

```
src/
├── components/
│   └── ContactForm.tsx   # Форма заявок
├── lib/
│   └── supabase.ts       # Клиент Supabase
├── App.tsx               # Основной компонент
└── main.tsx              # Точка входа
```

## Форма заявок

Форма сохраняет данные в таблицу `lead_requests` в базе данных Supabase.

Для просмотра отправленных заявок:
1. Откройте [Supabase Dashboard](https://supabase.com/dashboard)
2. Перейдите в Table Editor
3. Откройте таблицу `lead_requests`
