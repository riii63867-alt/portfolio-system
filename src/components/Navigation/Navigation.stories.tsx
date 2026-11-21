import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const items = [
  { label: "Головна", href: "/" },
  { label: "Роботи", href: "#cases" },
  { label: "Про мене", href: "#about" },
  { label: "Контакти", href: "#contacts" },
];

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Навігація сайту: список посилань на розділи. На широкому екрані пункти стоять в один рядок. На вузькому вони ховаються, а відкриває їх кнопка-бургер. Щоб побачити вузьку версію, увімкни Viewport у тулбарі Storybook і вибери мобільний розмір.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`items\` | масив \`{ label, href }\`: текст і адреса пункту | немає |
| \`currentHref\` | \`href\` активного пункту | немає (активного пункту нема) |
| \`label\` | назва навігації для скрінрідера (\`aria-label\`) | «Головна навігація» |

Пункти за планом сайту: Головна, Роботи, Про мене, Контакти. Де сторінки ще немає, \`href\` веде на якір (\`#cases\`, \`#about\`, \`#contacts\`).

### Стани пункту

- **default**: текст \`ink\`, рамка прозора.
- **hover**: текст і рамка-кільце \`accent-alt\`.
- **focus** (клавіша Tab): текст \`accent-alt\` і контур \`accent-alt\`, його не прибирають.
- **active**: текст \`accent\` і \`aria-current="page"\`. Позначає сторінку, на якій користувач зараз.

Контраст \`accent-alt\` на фоні \`canvas\` не менший за 3:1.

### Вузький екран

- Пункти сховані, видно кнопку «Меню» (бургер) з \`aria-expanded\` і \`aria-controls\`, що вказує на список.
- Клік по кнопці відкриває й закриває список.
- Клавіша Escape закриває меню, фокус повертається на кнопку.
- Вибір пункту теж закриває меню й повертає фокус на кнопку.

### Семантика

Елемент \`<nav>\` з \`aria-label\`, усередині список \`<ul>\` з пунктами \`<li>\` і посиланнями \`<a>\`.

### Токени

Кольори: \`ink\`, \`accent\`, \`accent-alt\`, \`ink-muted\` (межа кнопки-бургера).
Текст: \`text-label\` і \`text-button\` разом із \`font-sans\`.
Радіус: \`rounded-control\`. Відступи: \`px-4\`, \`py-2\`, \`gap-2\`, \`gap-4\`.

### Коли використовувати

- Одна головна навігація в шапці кожної сторінки; активним став пункт поточної сторінки.
- Для дій (відправити, відкрити форму) бери \`Button\`, а не пункт меню.
- Пунктів має бути небагато (до п'яти): інакше вузьке меню стане довгим.

### Як брати в код

\`\`\`tsx
import { Navigation } from "@/components/Navigation";

<Navigation
  items={[
    { label: "Головна", href: "/" },
    { label: "Роботи", href: "#cases" },
    { label: "Про мене", href: "#about" },
    { label: "Контакти", href: "#contacts" },
  ]}
  currentHref="/"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    items: { control: "object" },
    currentHref: {
      control: "select",
      options: items.map((item) => item.href),
    },
    label: { control: "text" },
  },
  args: {
    items,
    currentHref: "/",
    label: "Головна навігація",
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
