import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roman Andrushchenko — UI/UX дизайнер",
  description:
    "Проєктую інтерфейси вебу й мобільних застосунків: від аналізу конкурентів і шляху користувача до макета.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
