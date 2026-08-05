"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverButton } from "./ui/hover-button";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  onSuccess?: () => void;
}

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = "Укажите, как к вам обращаться";
  if (!values.email.trim()) errors.email = "Укажите email";
  else if (!validateEmail(values.email)) errors.email = "Проверьте формат email";
  if (!values.message.trim()) errors.message = "Расскажите пару слов о задаче";

  const hasErrors = Object.keys(errors).length > 0;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    onSuccess?.();
  }

  if (status === "success") {
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
        <p className="text-xl font-bold text-ink">Заявка отправлена</p>
        <p className="max-w-xs text-[15px] leading-relaxed text-ink-soft">
          Спасибо, {values.name.split(" ")[0] || "мы на связи"}. Мы свяжемся с вами
          в течение одного рабочего дня.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Имя"
          required
          value={values.name}
          onChange={(v) => update("name", v)}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          error={touched.name ? errors.name : undefined}
          autoComplete="name"
        />
        <Field
          id="company"
          label="Компания"
          value={values.company}
          onChange={(v) => update("company", v)}
          autoComplete="organization"
        />
        <Field
          id="email"
          label="Email"
          required
          type="email"
          value={values.email}
          onChange={(v) => update("email", v)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          error={touched.email ? errors.email : undefined}
          autoComplete="email"
        />
        <Field
          id="phone"
          label="Телефон"
          type="tel"
          value={values.phone}
          onChange={(v) => update("phone", v)}
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          О вашей задаче <span className="text-ink-soft">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          placeholder="Что сейчас тормозит бизнес и что хотелось бы изменить"
          aria-invalid={touched.message && !!errors.message}
          aria-describedby={touched.message && errors.message ? "message-error" : undefined}
          className={cn(
            "w-full resize-none rounded-2xl border bg-bg px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover/60",
            touched.message && errors.message ? "border-red-300" : "border-border"
          )}
        />
        {touched.message && errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <HoverButton
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className={cn(
          "mt-1 px-6 py-3.5 text-[15px]",
          "disabled:cursor-not-allowed disabled:opacity-70"
        )}
      >
        {status === "submitting" && <Loader2 className="animate-spin" size={18} />}
        {status === "submitting" ? "Отправляем…" : "Отправить заявку"}
      </HoverButton>

      <p className="text-xs leading-relaxed text-ink-faint">
        Отправляя форму, вы соглашаетесь на обработку данных для связи с вами.
      </p>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  required,
  type = "text",
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-ink-soft">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "h-12 w-full rounded-2xl border bg-bg px-4 text-[15px] text-ink placeholder:text-ink-faint",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover/60",
          error ? "border-red-300" : "border-border"
        )}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
