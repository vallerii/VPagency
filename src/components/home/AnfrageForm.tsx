"use client";

import { useState, type FormEvent } from "react";
import s from "./home.module.css";

type T = {
  what: string; whatHint: string; name: string; phone: string; consent: string; submit: string;
  required: string; invalidPhone: string; consentError: string; pending: string;
  files: string; filesHint: string; filesRemove: string; filesTooBig: string;
};

const MAX_BYTES = 20 * 1024 * 1024;
const ACCEPT = ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.png,.jpg,.jpeg,.webp,.zip";
const size = (b: number) => (b < 1024 * 1024 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`);

type Errors = Partial<Record<"what" | "name" | "phone" | "consent" | "files", string>>;

// Request form: description, name and phone. Sending is NOT connected yet (no
// mail/CRM endpoint exists in the project); on a valid submit it says so
// plainly instead of pretending to send.
export function AnfrageForm({ t, id = "anf" }: { t: T; id?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  // Files are kept in state (not only in the input) so one can be removed
  // and more can be added in a second pick.
  function addFiles(list: FileList | null) {
    if (!list?.length) return;
    setFiles((prev) => {
      const seen = new Set(prev.map((f) => f.name + f.size));
      return [...prev, ...Array.from(list).filter((f) => !seen.has(f.name + f.size))];
    });
    setErrors((e) => ({ ...e, files: undefined }));
  }
  const total = files.reduce((n, f) => n + f.size, 0);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(f.get("what") || "").trim()) next.what = t.required;
    if (!String(f.get("name") || "").trim()) next.name = t.required;
    const phone = String(f.get("phone") || "").replace(/[^\d+]/g, "");
    if (!phone) next.phone = t.required;
    else if (phone.replace(/\D/g, "").length < 6) next.phone = t.invalidPhone;
    if (!f.get("consent")) next.consent = t.consentError;
    if (total > MAX_BYTES) next.files = t.filesTooBig;
    setErrors(next);
    setDone(Object.keys(next).length === 0);
  }

  const err = (k: keyof Errors) => errors[k] ? <span className={s.fieldError} id={`${id}-${k}-err`}>{errors[k]}</span> : null;
  const aria = (k: keyof Errors) => errors[k] ? { "aria-invalid": true, "aria-describedby": `${id}-${k}-err` } : {};

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate>
      <label className={s.fieldWrap} htmlFor={`${id}-what`}>
        <span>{t.what}</span>
        <textarea id={`${id}-what`} name="what" rows={5} placeholder={t.whatHint} {...aria("what")} />
        {err("what")}
      </label>
      <div className={s.formRow}>
        <label className={s.fieldWrap} htmlFor={`${id}-name`}>
          <span>{t.name}</span>
          <input id={`${id}-name`} name="name" autoComplete="name" {...aria("name")} />
          {err("name")}
        </label>
        <label className={s.fieldWrap} htmlFor={`${id}-phone`}>
          <span>{t.phone}</span>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" {...aria("phone")} />
          {err("phone")}
        </label>
      </div>
      <div className={s.fileWrap}>
        <label className={s.fileDrop} htmlFor={`${id}-files`}>
          <span className={s.fileIcon} aria-hidden>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m21 11.5-8.6 8.6a5.5 5.5 0 0 1-7.8-7.8l8.6-8.6a3.7 3.7 0 0 1 5.2 5.2l-8.6 8.6a1.8 1.8 0 0 1-2.6-2.6l7.9-7.9" /></svg>
          </span>
          <span className={s.fileText}><b>{t.files}</b><small id={`${id}-files-hint`}>{t.filesHint}</small></span>
          <input
            id={`${id}-files`} name="files" type="file" multiple accept={ACCEPT} className={s.fileInput}
            aria-describedby={errors.files ? `${id}-files-hint ${id}-files-err` : `${id}-files-hint`}
            onChange={(e) => { addFiles(e.currentTarget.files); e.currentTarget.value = ""; }}
          />
        </label>
        {files.length > 0 && (
          <ul className={s.fileList}>
            {files.map((f) => (
              <li key={f.name + f.size}>
                <span className={s.fileName}>{f.name}</span>
                <small>{size(f.size)}</small>
                <button type="button" onClick={() => setFiles((prev) => prev.filter((x) => x !== f))} aria-label={`${t.filesRemove}: ${f.name}`}>×</button>
              </li>
            ))}
          </ul>
        )}
        {err("files")}
      </div>
      <label className={s.consent} htmlFor={`${id}-consent`}>
        <input id={`${id}-consent`} name="consent" type="checkbox" {...aria("consent")} />
        <span>{t.consent}</span>
      </label>
      {err("consent")}
      <button type="submit" className={`${s.pill} ${s.pillDark} ${s.submit}`}>{t.submit}</button>
      {done && <p className={s.formNote} role="status">{t.pending}</p>}
    </form>
  );
}
