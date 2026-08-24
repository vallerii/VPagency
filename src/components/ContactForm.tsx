"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverButton } from "./ui/hover-button";

// Same field pattern as the quiz's final step (ContactQuiz.tsx step 3) —
// name + a phone/e-mail toggle instead of two separate always-visible
// fields — kept identical here so the standalone form on service/product
// pages looks and behaves like the quiz's contact step. The one addition
// is the "Ihr Anliegen" textarea: this form isn't preceded by the quiz's
// click-through pain/goal steps, so it still needs a way to capture what
// the request is actually about.

type Method = "phone" | "email";

interface FormState {
  name: string;
  contact: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  contact: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  onSuccess?: () => void;
}

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePhone(value: string) {
  return value.replace(/[^0-9]/g, "").length >= 6;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [method, setMethod] = useState<Method>("phone");
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = "Bitte geben Sie Ihren Namen an";
  if (!values.contact.trim()) {
    errors.contact =
      method === "phone" ? "Bitte geben Sie eine Telefonnummer an" : "Bitte geben Sie Ihre E-Mail-Adresse an";
  } else if (method === "phone" ? !validatePhone(values.contact) : !validateEmail(values.contact)) {
    errors.contact =
      method === "phone" ? "Bitte geben Sie eine gültige Telefonnummer an" : "Bitte überprüfen Sie das E-Mail-Format";
  }
  if (!values.message.trim()) errors.message = "Beschreiben Sie kurz Ihr Anliegen";

  const hasErrors = Object.keys(errors).length > 0;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function switchMethod(m: Method) {
    setMethod(m);
    setValues((prev) => ({ ...prev, contact: "" }));
    setTouched((t) => ({ ...t, contact: false }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched({ name: true, contact: true, message: true });
    if (hasErrors) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    onSuccess?.();
  }

  if (status === "success") {
    const firstName = values.name.split(" ")[0];
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 py-10 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-tint">
          <Check size={20} strokeWidth={2} className="text-ink" />
        </span>
        <p className="text-xl font-bold text-ink">Anfrage gesendet</p>
        <p className="max-w-xs text-[15px] leading-relaxed text-ink-soft">
          {firstName ? `Danke, ${firstName}.` : "Danke für Ihre Anfrage."}{" "}
          {method === "phone" ? "Wir rufen Sie in Kürze zurück." : "Wir melden uns per E-Mail bei Ihnen."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="form-name" className="mb-1.5 block text-sm font-medium text-ink">
          Name <span className="text-ink-soft">*</span>
        </label>
        <input
          id="form-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          aria-invalid={touched.name && !!errors.name}
          aria-describedby={touched.name && errors.name ? "form-name-error" : undefined}
          className={cn(
            "h-12 w-full rounded-2xl border bg-bg px-4 text-[15px] text-ink placeholder:text-ink-faint",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover/60",
            touched.name && errors.name ? "border-red-300" : "border-border"
          )}
        />
        {touched.name && errors.name && (
          <p id="form-name-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <span className="mb-1.5 block text-sm font-medium text-ink">Wie melden wir uns?</span>
        <div className="flex gap-2">
          {(["phone", "email"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => switchMethod(m)}
              className={cn(
                "flex-1 rounded-2xl border px-4 py-2.5 text-[14px] font-medium transition-colors duration-200",
                method === m
                  ? "border-accent-hover bg-accent-tint text-ink"
                  : "border-border bg-bg text-ink-soft hover:border-accent-line"
              )}
            >
              {m === "phone" ? "Anrufen" : "E-Mail"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="form-contact" className="mb-1.5 block text-sm font-medium text-ink">
          {method === "phone" ? "Telefonnummer" : "E-Mail-Adresse"} <span className="text-ink-soft">*</span>
        </label>
        <input
          id="form-contact"
          name="contact"
          type={method === "phone" ? "tel" : "email"}
          autoComplete={method === "phone" ? "tel" : "email"}
          value={values.contact}
          onChange={(e) => update("contact", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, contact: true }))}
          placeholder={method === "phone" ? "+49 ..." : "name@firma.de"}
          aria-invalid={touched.contact && !!errors.contact}
          aria-describedby={touched.contact && errors.contact ? "form-contact-error" : undefined}
          className={cn(
            "h-12 w-full rounded-2xl border bg-bg px-4 text-[15px] text-ink placeholder:text-ink-faint",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover/60",
            touched.contact && errors.contact ? "border-red-300" : "border-border"
          )}
        />
        {touched.contact && errors.contact && (
          <p id="form-contact-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.contact}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="form-message" className="mb-1.5 block text-sm font-medium text-ink">
          Ihr Anliegen <span className="text-ink-soft">*</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          placeholder="Was bremst Ihr Geschäft aktuell, und was möchten Sie ändern?"
          aria-invalid={touched.message && !!errors.message}
          aria-describedby={touched.message && errors.message ? "form-message-error" : undefined}
          className={cn(
            "w-full resize-none rounded-2xl border bg-bg px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover/60",
            touched.message && errors.message ? "border-red-300" : "border-border"
          )}
        />
        {touched.message && errors.message && (
          <p id="form-message-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <HoverButton
        type="submit"
        variant="outline"
        disabled={status === "submitting"}
        className="mt-1 px-6 py-3.5 text-[15px] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="animate-spin" size={18} />}
        {status === "submitting" ? "Wird gesendet…" : "Anfrage senden"}
      </HoverButton>

      <p className="text-xs leading-relaxed text-ink-faint">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur
        Kontaktaufnahme zu.
      </p>
    </form>
  );
}
