"use client";

import { Button } from "@/components/Button";

// Button renders a <button>, so anchor jumps are done here instead of nesting a link inside it.
function jumpTo(hash: string) {
  window.location.hash = hash;
}

/** Дві кнопки героя: перша веде до контактів, друга до робіт. */
export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => jumpTo("#contacts")}>Написати мені</Button>
      <Button variant="secondary" onClick={() => jumpTo("#cases")}>
        Мої роботи
      </Button>
    </div>
  );
}
