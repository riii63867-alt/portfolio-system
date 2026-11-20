import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import cover from "@/assets/work-cover-placeholder.svg";
import { WorkCard } from "./WorkCard";

// Static imports are a string in Storybook and an object in Next.js; Controls need a string.
const coverSrc = typeof cover === "string" ? cover : cover.src;

const meta = {
  title: "Components/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        // Storybook prints `disabled` for true; show the explicit value.
        transform: (code: string) =>
          code.replace(/\bdisabled(?=\s|>|\/)/g, "disabled={true}"),
      },
      description: {
        component: `
Картка роботи в списку портфоліо: обкладинка, назва й короткий опис. Уся картка є одним посиланням (\`<a>\`), назва виводиться заголовком \`<h3>\`.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`title\` | назва роботи | немає |
| \`description\` | короткий опис | немає |
| \`imageSrc\` | обкладинка: шлях, адреса або імпорт з \`src/assets\` | немає |
| \`imageAlt\` | альтернативний текст обкладинки | немає |
| \`href\` | адреса кейсу | немає |
| \`disabled\` | \`true\` або \`false\` | \`false\` |
| \`disabledReason\` | пояснення, чому картка вимкнена | немає |

Обкладинка завжди має пропорцію \`aspect-cover\`, картинка обрізається по краях.

### Стани

- **default**: рамка \`line\`, заливка \`surface\`, назва \`ink\`, опис \`ink-muted\`.
- **hover**: рамка й назва стають \`accent-alt\`.
- **focus** (клавіша Tab): кільце \`accent-alt\`, його не прибирають.
- **disabled**: робота ще без кейсу. Картка має \`aria-disabled="true"\` і лишається у фокусі з клавіатури, але посилання не веде нікуди (адреса \`href\` не виводиться). Причина з \`disabledReason\` показана під карткою й зв'язана з нею через \`aria-describedby\`. Рамка й назва \`ink-muted\`, обкладинка сіра, hover не змінює вигляд.

### Токени

Кольори: \`line\`, \`surface\`, \`ink\`, \`ink-muted\`, \`accent-alt\`.
Текст: \`text-lead\` разом із \`font-display\` для назви, \`text-body\` і \`text-caption\` разом із \`font-sans\`.
Радіус: \`rounded-card\`. Пропорція: \`aspect-cover\`. Відступи: \`p-4\`, \`gap-4\`, \`gap-2\`.

### Коли використовувати

- У списку робіт на головній і на сторінці портфоліо.
- Для кожної роботи окрема картка; назва має бути унікальною й зрозумілою без обкладинки.
- Для роботи без готового кейсу став \`disabled\` і завжди пиши \`disabledReason\`.
- Для інших посилань (меню, кнопки дій) картка не підходить.

### Як брати в код

\`\`\`tsx
import { WorkCard } from "@/components/WorkCard";
import cover from "@/assets/cover.jpg";

<WorkCard
  title="Назва роботи"
  description="Короткий опис."
  imageSrc={cover}
  imageAlt="Екран застосунку"
  href="/works/case"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    href: { control: "text" },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    title: "Мобільний банк для студентів",
    description:
      "Редизайн застосунку: від аналізу конкурентів і шляху користувача до макета.",
    imageSrc: coverSrc,
    imageAlt: "Екрани мобільного застосунку",
    href: "/works/student-bank",
    disabled: false,
    disabledReason: "Кейс ще в роботі й з'явиться пізніше",
  },
  decorators: [
    (Story) => (
      <div className="w-1/2">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
