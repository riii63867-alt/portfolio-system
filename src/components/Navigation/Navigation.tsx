"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

export type NavigationItem = {
  /** Текст пункту меню. */
  label: string;
  /** Адреса сторінки або якір, наприклад `#cases`. */
  href: string;
};

export type NavigationProps = {
  /** Пункти меню в порядку показу. */
  items: NavigationItem[];
  /** `href` активного пункту. Він отримує `aria-current="page"`. */
  currentHref?: string;
  /** Назва навігації для скрінрідера. */
  label?: string;
};

// Shared by every item: control radius, scale spacing, visible ring on focus.
// The border is transparent by default so hover can show the ring without shifting layout.
const itemBase =
  "block rounded-control border border-transparent px-4 py-2 font-sans text-label " +
  "transition-colors hover:border-accent-alt " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-alt";

const itemDefault = "text-ink hover:text-accent-alt focus-visible:text-accent-alt";
const itemActive = "text-accent focus-visible:text-accent-alt";

/**
 * Навігація сайту: горизонтальний рядок на широкому екрані, меню з кнопкою-бургером на вузькому.
 * Повну інструкцію дивись на вкладці Docs.
 */
export function Navigation({
  items,
  currentHref,
  label = "Головна навігація",
}: NavigationProps) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && open) {
      event.stopPropagation();
      close();
    }
  }

  return (
    <nav
      aria-label={label}
      onKeyDown={handleKeyDown}
      className="flex flex-col items-start gap-2 md:flex-row md:items-center"
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex cursor-pointer items-center gap-2 rounded-control border border-ink-muted px-4 py-2 font-sans text-button text-ink transition-colors hover:border-accent-alt hover:text-accent-alt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-alt md:hidden"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        >
          {open ? (
            <path d="M5 5L19 19M19 5L5 19" />
          ) : (
            <path d="M3 6H21M3 12H21M3 18H21" />
          )}
        </svg>
        {open ? "Закрити" : "Меню"}
      </button>
      <ul
        id={listId}
        className={`${open ? "flex" : "hidden"} w-full flex-col gap-2 md:flex md:w-auto md:flex-row md:gap-4`}
      >
        {items.map((item) => {
          const isActive = item.href === currentHref;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => {
                  if (open) close();
                }}
                className={`${itemBase} ${isActive ? itemActive : itemDefault}`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
