@AGENTS.md

# portfolio-system

Сайт-портфоліо UI/UX дизайнера Roman Andrushchenko з власною дизайн-системою. Сайт українською. Структура й зміст сторінок описані в [plan.md](plan.md).

## Стек і команди

- Next.js (App Router), React, TypeScript, Tailwind CSS v4, Storybook.
- Код у `src/`, псевдонім імпорту `@/*`. Node.js 20 або новіший.
- Сторінки: `src/app`. Компоненти: `src/components`. Картинки компонентів: `src/assets` (імпортуються в код).
- Налаштування Storybook: `.storybook`. Сторінка токенів: `src/stories/Tokens.mdx`.

| Що | Команда | Адреса |
| --- | --- | --- |
| Сайт у розробці | `npm run dev` | http://localhost:3000 |
| Збірка сайту | `npm run build` | |
| Storybook | `npm run storybook` | http://localhost:6006 |
| Лінт | `npm run lint` | |
| Перевірка типів | `npx tsc --noEmit` | |

Після змін у `@theme` перезапусти dev-сервер і Storybook: інакше нові токени можуть не підхопитись.

## Токени

Оголошені в блоці `@theme` у `src/app/globals.css`, шрифти підключені в `src/app/fonts.ts`. Це єдине джерело значень. Назви за роллю, не за кольором. Стандартні кольори, розміри тексту, радіуси й контейнери Tailwind скинуто, тож інших класів цих груп немає (невідомий клас Tailwind мовчки нічого не робить).

- Кольори (`bg-*`, `text-*`, `border-*`, `outline-*`): `canvas`, `surface`, `line`, `accent`, `accent-alt`, `ink`, `ink-muted`, `danger`. Текст на жовтій кнопці: `text-canvas`.
- Шрифти: `font-display` (Unbounded, ваги 600 і 700), `font-sans` (Inter, ваги 400 і 500).
- Розміри тексту (з висотою рядка, трекінгом і жирністю): `text-caption`, `text-body`, `text-label`, `text-button`, `text-lead`, `text-heading`. `lead` і `heading` ставимо разом із `font-display`. Логотип: `font-display text-lead font-bold`.
- Радіуси: `rounded-control`, `rounded-card`. Обидва `0px`.
- Пропорції: `aspect-cover` (13 / 7). Стандартні пропорції Tailwind лишаються.
- Ширина тексту: `max-w-text`, для абзаців, щоб рядок не був задовгим. `max-w-prose` не використовуємо: він не з токенів.
- Розкладка, лише для сторінок, не для компонентів: `max-w-page` (1280px) і `--spacing-section` (120px, класи на кшталт `mt-section`).
- Відступи окремо не оголошені: беремо тільки числа Tailwind 2, 3, 4, 6, 8 (8, 12, 16, 24, 32 px), наприклад `p-4`.

### Правило «лише токени»

- Заборонено: hex, rgb і hsl; значення в px і rem у класах і стилях; довільні значення в квадратних дужках (`p-[13px]`, `h-[150px]`); `style=` з розмірами чи кольорами.
- Заборонено: стандартні палітри й розміри Tailwind (`bg-blue-600`, `text-white`, `bg-black`, `text-sm`, `rounded-lg`, `max-w-3xl`) і відступи поза 2, 3, 4, 6, 8.
- Hex і px можуть бути тільки в `@theme` і всередині файлів-картинок.
- Потрібного елемента немає в системі: не вигадуй його, а перелічи, чого бракує, і запитай мене. Токени в `@theme` змінюй лише за моєю згодою.
- Змінив токен чи компонент: оновлюй історію Storybook, Docs і цей файл.

## Компоненти

Кожен компонент має одну історію `Components/<Назва>` з Controls і сторінку Docs (параметри, стани, токени, коли використовувати, приклад коду). Окремих історій по станах немає. Вузьку версію дивимось через Viewport у тулбарі Storybook.

- `Button` (`src/components/Button.tsx`): кнопка дії. `variant`: `primary` (заливка `accent`) або `secondary` (заливка `canvas`, рамка й текст `accent`). Стани: default, hover (`accent-alt`), focus (контур `accent-alt`), disabled (`disabled` з `disabledReason`, через `aria-disabled`). Це `<button>`, посилань усередину не вкладати.
- `WorkCard` (`src/components/WorkCard`): картка роботи: обкладинка `aspect-cover`, назва, опис. Уся картка є одним посиланням. Стани: default, hover (рамка й назва `accent-alt`), focus, disabled (робота без кейсу, потрібен `disabledReason`).
- `Navigation` (`src/components/Navigation`): навігація сайту. Пропси `items` (`{ label, href }`) і `currentHref`. Стани пункту: default, hover і focus (`accent-alt`), active (`accent` і `aria-current="page"`). На вузькому екрані пункти ховаються в меню з кнопкою-бургером (`aria-expanded`, `aria-controls`); Escape й вибір пункту закривають меню, фокус повертається на кнопку.

Головна сторінка (`src/app/page.tsx`) збирається лише з цих компонентів і токенів. Кнопки героя в `src/app/HeroActions.tsx` (клієнтський файл для переходу по якорях). Де сторінки ще немає, посилання ведуть на якорі `#cases`, `#about`, `#contacts`.

## Доступність

- Контраст: звичайний текст не менший за 4.5:1; межа поля й кнопки без заливки та кільце фокуса не менші за 3:1 (межа: `ink-muted`, не `line`). Звіряти у WebAIM Contrast Checker.
- Фокус завжди видно: кільце `accent-alt`, `focus-visible:outline-2`, контраст ≥3:1. Не прибирай `outline`.
- Вимкнені елементи: `aria-disabled="true"` замість `disabled`, щоб вони лишалися у фокусі з клавіатури; причина видима й зв'язана через `aria-describedby`. Дія вимкненого елемента не спрацьовує.
- Навігація: `<nav aria-label>`, список `<ul>`, активний пункт `aria-current="page"`.
- Одна `<h1>` на сторінку, заголовки по порядку. Картинкам пиши змістовний `alt`.
- Перевіряй клавіатуру (Tab, Escape, Enter) і вузький екран без горизонтального скролу. Панель Accessibility у Storybook не має показувати нових Violations.

## Робота з Git

- Уся робота йде в гілці `main`. Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт у продакшн (Vercel). Перед пушем питай мене й чекай моє «так». Коміти без пушу роби вільно, коли я прошу.
- Перед комітом: `npx tsc --noEmit`, `npm run lint`, при змінах стилів чи компонентів ще `npm run build`.

## Що не чіпати

- Папку старого проєкту `../portfolio` (статичний HTML, репозиторій `roman-portfolio`): вона поза цим проєктом, нічого в ній не змінюй і не копіюй звідти код без мого прохання.
- Файли `.env*` і будь-які секрети: не читай, не змінюй, не коміть і не показуй їхні значення.
- `.next`, `public/storybook` і `node_modules`: результат збірки, вручну не редагувати.
- Блок `<!-- BEGIN:nextjs-agent-rules -->` в `AGENTS.md`: його перезаписує `next dev`.

## Посилання

- План сайту: [plan.md](plan.md)
- Репозиторій: https://github.com/riii63867-alt/portfolio-system
- Живий сайт: https://portfolio-system-phi.vercel.app
- Storybook локально: http://localhost:6006
