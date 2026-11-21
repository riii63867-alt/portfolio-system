@AGENTS.md

# portfolio-system

Сайт-портфоліо UI/UX дизайнера Roman Andrushchenko з власною дизайн-системою.

## Стек

- Next.js (App Router), TypeScript, Tailwind CSS.
- Код у `src/`, псевдонім імпорту `@/*`.
- Node.js 20 або новіший.

## Робота з Git

- Уся робота йде в гілці `main`.
- Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт, тому перед пушем питай мене.

## Токени

Оголошені в блоці `@theme` у `src/app/globals.css`, шрифти підключені в `src/app/fonts.ts`. Стандартні кольори, розміри тексту й радіуси Tailwind скинуто, тож інших класів цих груп немає. Назви за роллю, не за кольором.

- Кольори (`bg-*`, `text-*`, `border-*`): `canvas`, `surface`, `line`, `accent`, `accent-alt`, `ink`, `ink-muted`, `danger`. Текст на жовтій кнопці: `text-canvas`.
- Шрифти: `font-display` (Unbounded, ваги 600 і 700), `font-sans` (Inter, ваги 400 і 500).
- Розміри тексту (`text-*`, з висотою рядка, трекінгом і жирністю): `caption`, `body`, `label`, `button`, `lead`, `heading`. `lead` і `heading` ставимо разом із `font-display`. Логотип: `font-display text-lead font-bold`.
- Радіуси (`rounded-*`): `control`, `card`. Обидва `0px`.
- Пропорції (`aspect-*`): `cover` (13 / 7). Стандартні пропорції Tailwind лишаються.
- Ширина тексту (`max-w-*`): `text` (`max-w-text`), для абзаців, щоб рядок не був задовгим. Інших `max-w-*` для тексту немає.
- Розкладка, лише для сторінок, не для компонентів: `max-w-page` (1280px) і `--spacing-section` (120px, класи на кшталт `mt-section`).
- Відступи окремо не оголошені: беремо тільки числа Tailwind 2, 3, 4, 6, 8 (8, 12, 16, 24, 32 px), наприклад `p-4`.

## Компоненти

- `Button` (`src/components/Button.tsx`): кнопка дії, `variant` primary або secondary, `disabled` з `disabledReason`.
- `WorkCard` (`src/components/WorkCard`): картка роботи (обкладинка `aspect-cover`, назва, опис), уся картка є посиланням; `disabled` для роботи без кейсу.
- `Navigation` (`src/components/Navigation`): навігація сайту, пропси `items` і `currentHref`; на вузькому екрані меню з кнопкою-бургером.

## Правила

Заповнимо далі.

## Посилання

- План сайту: [plan.md](plan.md)
