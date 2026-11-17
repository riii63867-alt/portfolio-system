import { Inter, Unbounded } from "next/font/google";

// Unbounded: display (logo, headings). Weights 600 and 700.
export const fontDisplay = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  variable: "--font-unbounded",
  display: "swap",
});

// Inter: sans (menu, buttons, body text). Weights 400 and 500.
export const fontSans = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});
