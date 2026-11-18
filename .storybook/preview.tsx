import type { Preview } from "@storybook/nextjs-vite";
import { fontDisplay, fontSans } from "../src/app/fonts";
import "../src/app/globals.css";

// Як на сайті: змінні шрифтів лежать на <html>, бо --font-display
// у @theme оголошено на :root і має бачити --font-unbounded та --font-inter.
document.documentElement.classList.add(
  fontDisplay.variable,
  fontSans.variable,
);

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="bg-canvas font-sans text-ink">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "padded",
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: { toc: true },
  },
};

export default preview;
