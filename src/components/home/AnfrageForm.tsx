"use client";

import { useState, type FormEvent } from "react";
import s from "./home.module.css";

type T = {
  what: string; whatHint: string; name: string; phone: string; consent: string; submit: string;
  required: string; invalidPhone: string; consentError: string; pending: string;
};

type Errors = Partial<Record<"what" | "name" | "phone" | "consent", string>>;

// Request form: description, name and phone. Sending is NOT connected yet (no
// mail/CRM endpoint exists in the project); on a valid submit it says so
// plainly instead of pretending to send.
export function AnfrageForm({ t }: { t: T }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

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
    setErrors(next);
    setDone(Object.keys(next).length === 0);
  }

  const err = (k: keyof Errors) => errors[k] ? <span className={s.fieldError} id={`anf-${k}-err`}>{errors[k]}</span> : null;
  const aria = (k: keyof Errors) => errors[k] ? { "aria-invalid": true, "aria-describedby": `anf-${k}-err` } : {};

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate>
      <label className={s.fieldWrap} htmlFor="anf-what">
        <span>{t.what}</span>
        <textarea id="anf-what" name="what" rows={5} placeholder={t.whatHint} {...aria("what")} />
        {err("what")}
      </label>
      <div className={s.formRow}>
        <label className={s.fieldWrap} htmlFor="anf-name">
          <span>{t.name}</span>
          <input id="anf-name" name="name" autoComplete="name" {...aria("name")} />
          {err("name")}
        </label>
        <label className={s.fieldWrap} htmlFor="anf-phone">
          <span>{t.phone}</span>
          <input id="anf-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" {...aria("phone")} />
          {err("phone")}
        </label>
      </div>
      <label className={s.consent} htmlFor="anf-consent">
        <input id="anf-consent" name="consent" type="checkbox" {...aria("consent")} />
        <span>{t.consent}</span>
      </label>
      {err("consent")}
      <button type="submit" className={`${s.pill} ${s.pillDark} ${s.submit}`}>{t.submit}<span className={s.arr} aria-hidden>↗</span></button>
      {done && <p className={s.formNote} role="status">{t.pending}</p>}
    </form>
  );
}
