import cover from "@/assets/work-cover-placeholder.svg";
import { Navigation } from "@/components/Navigation";
import { WorkCard } from "@/components/WorkCard";
import { HeroActions } from "./HeroActions";

const navItems = [
  { label: "Головна", href: "/" },
  { label: "Роботи", href: "#cases" },
  { label: "Про мене", href: "#about" },
  { label: "Контакти", href: "#contacts" },
];

export default function Home() {
  return (
    <>
      <header className="mx-auto w-full max-w-page px-4 py-6 md:px-8">
        <Navigation items={navItems} currentHref="/" />
      </header>
      <main className="mx-auto w-full max-w-page px-4 pb-section md:px-8">
        <section className="flex flex-col gap-6 pt-8">
          <h1 className="font-display text-heading text-ink">
            Roman Andrushchenko, UI/UX дизайнер
          </h1>
          <p className="max-w-3xl font-display text-lead text-ink-muted">
            Проєктую інтерфейси вебу й мобільних застосунків: від аналізу
            конкурентів і шляху користувача до макета.
          </p>
          <HeroActions />
        </section>
        <section id="cases" className="mt-section scroll-mt-8">
          <h2 className="sr-only">Вибрані роботи</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <WorkCard
              title="JobMatch"
              description="Концепт мобільного застосунку для швидкого пошуку підробітку й спеціалістів поруч."
              imageSrc={cover}
              imageAlt="Обкладинка роботи JobMatch"
              href="#cases"
            />
            <WorkCard
              title="HealthyTanya"
              description="Командний проєкт: інтернет-магазин вітамінів і косметики. Моя частина: головна, каталог, оформлення замовлення."
              imageSrc={cover}
              imageAlt="Обкладинка роботи HealthyTanya"
              href="#cases"
            />
          </div>
        </section>
      </main>
    </>
  );
}
