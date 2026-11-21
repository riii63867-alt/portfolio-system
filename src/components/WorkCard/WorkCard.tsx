import Image from "next/image";
import type { ImageProps } from "next/image";
import { useId } from "react";

export type WorkCardProps = {
  /** Назва роботи. Виводиться заголовком і слугує назвою посилання. */
  title: string;
  /** Короткий опис роботи, один-два речення. */
  description: string;
  /** Обкладинка: шлях, адреса або імпортована картинка з `src/assets`. */
  imageSrc: ImageProps["src"];
  /** Альтернативний текст обкладинки. */
  imageAlt: string;
  /** Адреса кейсу, куди веде картка. */
  href: string;
  /** Робота без кейсу: картка лишається у фокусі, але не веде за посиланням. */
  disabled?: boolean;
  /** Пояснення, чому картка вимкнена. Видиме й читається скрінрідером через `aria-describedby`. */
  disabledReason?: string;
};

// Whole card is one link: square corners from the card radius token, spacing from the scale.
const base =
  "group flex flex-1 flex-col gap-4 rounded-card border bg-surface p-4 transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-alt";

const enabledStyle = "border-line hover:border-accent-alt";
const disabledStyle = "cursor-not-allowed border-ink-muted";

/**
 * Картка роботи: обкладинка, назва й короткий опис в одному посилальному елементі.
 * Повну інструкцію дивись на вкладці Docs.
 */
export function WorkCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  disabled = false,
  disabledReason,
}: WorkCardProps) {
  const reasonId = useId();
  const hasReason = disabled && Boolean(disabledReason);

  const linkProps = disabled
    ? {
        // No href: nothing to follow. tabIndex and role keep it a focusable link.
        role: "link",
        tabIndex: 0,
        "aria-disabled": "true" as const,
        "aria-describedby": hasReason ? reasonId : undefined,
      }
    : { href };

  return (
    <div className="flex h-full flex-col gap-2">
      <a
        {...linkProps}
        className={`${base} ${disabled ? disabledStyle : enabledStyle}`}
      >
        <span className="relative block aspect-cover w-full overflow-hidden rounded-card">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            className={`object-cover${disabled ? " grayscale" : ""}`}
          />
        </span>
        <h3
          className={`font-display text-lead transition-colors ${
            disabled ? "text-ink-muted" : "text-ink group-hover:text-accent-alt"
          }`}
        >
          {title}
        </h3>
        <p className="font-sans text-body text-ink-muted">{description}</p>
      </a>
      {hasReason ? (
        <p id={reasonId} className="font-sans text-caption text-ink-muted">
          {disabledReason}
        </p>
      ) : null}
    </div>
  );
}
