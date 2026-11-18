import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Кнопка дії зі скошеною (вправо) формою. Текст усередині прямий.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`variant\` | \`primary\`, \`secondary\` | \`primary\` |
| \`children\` | текст кнопки | немає |
| \`disabled\` | \`true\` або \`false\` | \`false\` |
| \`disabledReason\` | пояснення, чому кнопка вимкнена | немає |
| \`type\` | \`button\`, \`submit\`, \`reset\` | \`button\` |

Решта атрибутів \`<button>\` (\`onClick\`, \`aria-label\` тощо) передаються як є.

### Варіанти

- **primary**: заливка \`accent\`, текст \`canvas\`. Головна дія на екрані.
- **secondary**: заливка \`canvas\`, межа й текст \`accent\`. Другорядна дія.

### Стани

- **default**: як описано вище.
- **hover**: primary заливається \`accent-alt\`, текст лишається \`canvas\`; у secondary межа й текст стають \`accent-alt\`, заливка не змінюється.
- **focus** (клавіша Tab): контур \`accent-alt\`, його не прибирають.
- **disabled**: заливка \`surface\`, межа й текст \`ink-muted\`. Кнопка має \`aria-disabled="true"\`, тому лишається у фокусі з клавіатури, але клік не спрацьовує. Причину передай у \`disabledReason\`: вона зв'язується з кнопкою через \`aria-describedby\` і читається скрінрідером.

### Токени

Кольори: \`accent\`, \`accent-alt\`, \`canvas\`, \`ink-muted\`, \`surface\`.
Текст: \`text-button\`, шрифт \`font-sans\`. Радіус: \`rounded-control\`.
Відступи: \`px-6\`, \`py-3\`.

### Коли використовувати

- Одна primary на екран або блок: головна дія (написати, надіслати).
- Secondary для додаткових дій поруч із primary.
- Для переходу на іншу сторінку краще посилання, а не кнопка.
- Вимикай кнопку лише з поясненням у \`disabledReason\`.

### Як брати в код

\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="primary" onClick={send}>Написати мені</Button>
<Button variant="secondary">Мої роботи</Button>
<Button disabled disabledReason="Спочатку заповни форму">Надіслати</Button>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary"] },
    children: { control: "text", name: "label" },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    children: "Написати мені",
    variant: "primary",
    disabled: true,
    disabledReason: "Кнопка недоступна, поки форму не заповнено",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
