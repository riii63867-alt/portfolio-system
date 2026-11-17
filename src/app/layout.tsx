import type { Metadata } from "next";
import { fontDisplay, fontSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roman Andrushchenko — UI/UX дизайнер",
  description:
    "Проєктую інтерфейси вебу й мобільних застосунків: від аналізу конкурентів і шляху користувача до макета.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      className={`${fontDisplay.variable} ${fontSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
