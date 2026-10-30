"use client";

import { useEffect, useRef } from "react";
import { AnfrageForm } from "./AnfrageForm";
import s from "./home.module.css";

type FormCopy = Parameters<typeof AnfrageForm>[0]["t"];

// Every button that points to #anfrage opens the request form in a window
// over the page, so the visitor stays where they were reading. The form at the
// bottom of the page stays too; plain text links (like "Kontakt") still scroll
// there. Without JavaScript the buttons simply scroll to that form.
export function AnfrageModal({ t, title, sub, close }: { t: FormCopy; title: string; sub: string; close: string }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>(`a[href="#anfrage"].${s.pill}`);
      if (!a || !ref.current || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      ref.current.showModal();
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <dialog
      ref={ref}
      className={s.modal}
      aria-labelledby="anfrage-modal-title"
      onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}
    >
      <div className={s.modalCard}>
        <div className={s.modalHead}>
          <h2 id="anfrage-modal-title" className={s.modalTitle}>{title}</h2>
          <button type="button" className={s.modalClose} onClick={() => ref.current?.close()} aria-label={close}>×</button>
        </div>
        <p className={s.modalSub}>{sub}</p>
        <AnfrageForm t={t} id="anf-modal" />
      </div>
    </dialog>
  );
}
