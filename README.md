# Gromova Portfolio

Персональная визитка fullstack-разработчика в стиле Telegram iOS.

## Стек

- React 18
- TypeScript
- Tailwind CSS
- Vite

## Требования

- Node.js 18+
- npm или yarn

## Установка

Клонируем репозиторий:

```bash
git clone https://github.com/Zenettany-dev/one-portfolio-gromova.git
cd one-portfolio-gromova
```

Устанавливаем зависимости:

```bash
npm install
```

## Запуск

Для локальной разработки:

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

## Сборка

Для продакшн-сборки:

```bash
npm run build
```

Готовые файлы появятся в папке `dist/`

Предпросмотр сборки:

```bash
npm run preview
```

## Структура проекта

```
src/
├── components/          # UI-компоненты
│   ├── Preloader.tsx   # Анимация загрузки
│   ├── ProfileHeader.tsx
│   ├── TechSection.tsx
│   ├── ProgramSection.tsx
│   ├── AboutSection.tsx
│   ├── OrderButton.tsx
│   ├── OrderModal.tsx
│   └── ScrollReveal.tsx
├── data/               # Данные
│   ├── info.ts        # Информация профиля
│   ├── technologies.ts # Список технологий
│   └── programs.ts    # Список инструментов
├── pages/
│   └── Index.tsx      # Главная страница
└── index.css          # Глобальные стили
```

## Кастомизация

### Данные профиля

Файл `src/data/info.ts`:

```typescript
export const userInfo = {
  name: "Gromova",
  role: "Fullstack Developer",
  status: "замужем за Zenettany♥",
  avatar: "ссылка на аватар",
  about: "Описание",
};
```

### Технологии

Файл `src/data/technologies.ts` — массив объектов с полями `name` и `icon`.

### Инструменты

Файл `src/data/programs.ts` — аналогичная структура.

### Стили

Основные переменные в `src/index.css`:

- `--primary` — основной акцентный цвет
- `--background` — фон страницы
- `--glass-bg` — фон стеклянных карточек

## Деплой

Проект можно развернуть на любом статическом хостинге:

- Vercel
- Netlify
- GitHub Pages

Пример для Vercel:

```bash
npm i -g vercel
vercel
```

## Лицензия

MIT
