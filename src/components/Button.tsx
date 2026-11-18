"use client";

import { useId } from "react";
import type { ButtonHTMLAttributes, MouseEvent } from "react";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> & {
  /** Вигляд кнопки: `primary` (заливка) або `secondary` (лише межа). */
  variant?: "primary" | "secondary";
  /** Вимикає кнопку через `aria-disabled`: вона лишається у фокусі з клавіатури, але не спрацьовує. */
  disabled?: boolean;
  /** Пояснення, чому кнопка вимкнена. Читається скрінрідером через `aria-describedby`. */
  disabledReason?: string;
};

// Shared: slanted shape, control radius, button text size, visible focus ring.
const base =
  "inline-block -skew-x-12 rounded-control border px-6 py-3 font-sans text-button " +
  "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible:outline-accent-alt";

const variants = {
  primary:
    "border-accent bg-accent text-canvas cursor-pointer hover:border-accent-alt hover:bg-accent-alt",
  secondary:
    "border-ink-muted bg-transparent text-ink cursor-pointer hover:border-accent hover:text-accent",
} as const;

// Disabled looks the same for both variants and keeps text contrast high.
const disabledStyle =
  "border-ink-muted bg-surface text-ink-muted cursor-not-allowed";

/**
 * Кнопка дії. Форма скошена вправо, текст усередині прямий.
 * Повну інструкцію дивись на вкладці Docs.
 */
export function Button({
  variant = "primary",
  disabled = false,
  disabledReason,
  type = "button",
  className,
  children,
  onClick,
  "aria-describedby": describedBy,
  ...rest
}: ButtonProps) {
  const reasonId = useId();
  const hasReason = disabled && Boolean(disabledReason);
  const ids = [describedBy, hasReason ? reasonId : undefined]
    .filter(Boolean)
    .join(" ");

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  }

  return (
    <>
      <button
        {...rest}
        type={type}
        aria-disabled={disabled ? "true" : undefined}
        aria-describedby={ids || undefined}
        onClick={handleClick}
        className={`${base} ${disabled ? disabledStyle : variants[variant]}${
          className ? ` ${className}` : ""
        }`}
      >
        {/* Counter-skew keeps the label upright. */}
        <span className="inline-block skew-x-12">{children}</span>
      </button>
      {hasReason ? (
        <span id={reasonId} className="sr-only">
          {disabledReason}
        </span>
      ) : null}
    </>
  );
}
