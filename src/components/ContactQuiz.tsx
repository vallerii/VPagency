"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverButton } from "./ui/hover-button";
import { SERVICES } from "@/data/services";

// A click-through pain quiz instead of a wall of text fields — every
// answer option is pulled straight from real site copy (SERVICES.symptoms
// / SERVICES.beforeAfter[].after in @/data/services, plus the homepage's
// "Klingt nach Ihrem Projekt?" wall for the "not sure yet" branch) so the
// quiz never invents claims the rest of the site doesn't already make.
// Typing only happens on the final step — name + one contact value.

type ServiceSlug = (typeof SERVICES)[number]["slug"] | "unsure";

const STEP0_OPTIONS: { slug: ServiceSlug; label: string }[] = [
  { slug: "websites", label: "Die Website bringt zu wenig Anfragen" },
  { slug: "ecommerce", label: "Der Online-Shop verliert Käufer im Checkout" },
  {
    slug: "custom-software",
    label: "Wichtige Prozesse laufen nur in Excel oder in Köpfen einzelner Mitarbeiter",
  },
  {
    slug: "automation",
    label: "Mitarbeiter erledigen jeden Tag dieselbe Routinearbeit von Hand",
  },
  {
    slug: "support",
    label: "Ein bestehendes System braucht Pflege, der bisherige Dienstleister ist weg",
  },
  {
    slug: "unsure",
    label: "Ich bin mir nicht sicher — will das gemeinsam herausfinden",
  },
];

// Same 7 lines as the homepage's SelfRecognitionWall ("Klingt nach Ihrem
// Projekt?") — used here as the symptom step when nobody picked a
// specific service yet.
const UNSURE_SYMPTOMS = [
  "Sie wissen genau, was Sie brauchen — eine neue Website, einen Shop, eine eigene Lösung",
  "Nur nicht, wer es sauber und zuverlässig umsetzt",
  "Der letzte Dienstleister hat die Technik nie wirklich verstanden",
  "Sie brauchen kein langes Beratungsgespräch, sondern ein Team, das liefert",
  "Die Anforderungen sind klar — die Umsetzung soll es auch sein",
  "Sie suchen einen Partner mit echter technischer Tiefe, nicht nur mit Design",
  "Ein Angebot, das nicht nur gut klingt, sondern auch hält",
];

// No single service is picked in this branch, so there's no beforeAfter
// list to draw from — these four summarise the rationaleLines shared
// across all five services in @/data/services.
const UNSURE_GOALS = [
  "Mehr Anfragen bekommen",
  "Weniger manuelle Arbeit im Team",
  "Ein System, das mit uns mitwächst",
  "Einen verlässlichen Partner für die Umsetzung",
];

function getSymptoms(slug: ServiceSlug): string[] {
  if (slug === "unsure") return UNSURE_SYMPTOMS;
  return SERVICES.find((s) => s.slug === slug)?.symptoms ?? [];
}

function getGoals(slug: ServiceSlug): string[] {
  if (slug === "unsure") return UNSURE_GOALS;
  const service = SERVICES.find((s) => s.slug === slug);
  return service ? service.beforeAfter.map((b) => b.after) : [];
}

function toggle(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePhone(value: string) {
  return value.replace(/[^0-9]/g, "").length >= 6;
}

const TOTAL_STEPS = 4;

interface ContactQuizProps {
  onSuccess?: () => void;
}

export function ContactQuiz({ onSuccess }: ContactQuizProps) {
  const [step, setStep] = useState(0);
  const [slug, setSlug] = useState<ServiceSlug | null>(null);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [contact, setContact] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const nameError = touched && !name.trim() ? "Bitte geben Sie Ihren Namen an" : undefined;
  const contactError =
    touched && method === "email" && !validateEmail(contact)
      ? "Bitte überprüfen Sie das E-Mail-Format"
      : touched && method === "phone" && !validatePhone(contact)
        ? "Bitte geben Sie eine gültige Telefonnummer an"
        : undefined;

  function selectStep0(value: ServiceSlug) {
    setSlug(value);
    setSymptoms([]);
    setGoals([]);
    setStep(1);
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!name.trim() || (method === "email" ? !validateEmail(contact) : !validatePhone(contact))) {
      return;
    }
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    onSuccess?.();
  }

  if (status === "success") {
    const firstName = name.split(" ")[0];
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
          {method === "phone"
            ? "Wir rufen Sie in Kürze zurück."
            : "Wir melden uns per E-Mail bei Ihnen."}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Progress */}
      <div className="flex items-center gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            ← Zurück
          </button>
        ) : (
          <span className="text-[13px] font-medium text-ink-faint">Schritt {step + 1} von {TOTAL_STEPS}</span>
        )}
        {step > 0 && (
          <span className="text-[13px] font-medium text-ink-faint">
            Schritt {step + 1} von {TOTAL_STEPS}
          </span>
        )}
        <div className="ml-auto flex gap-1.5">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 w-6 rounded-full transition-colors duration-300",
                i <= step ? "bg-accent-hover" : "bg-border"
              )}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <h3 className="text-[19px] font-semibold leading-[1.3] text-ink sm:text-[22px]">
              Was bremst Ihr Geschäft gerade am meisten?
            </h3>
            <div className="flex flex-col gap-2.5">
              {STEP0_OPTIONS.map((opt) => (
                <button
                  key={opt.slug}
                  type="button"
                  onClick={() => selectStep0(opt.slug)}
                  className="rounded-2xl border border-border bg-bg px-5 py-3.5 text-left text-[15px] leading-[1.4] text-ink transition-colors duration-200 hover:border-accent-line hover:bg-accent-tint"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 1 && slug && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <div>
              <h3 className="text-[19px] font-semibold leading-[1.3] text-ink sm:text-[22px]">
                Welche Punkte treffen zu?
              </h3>
              <p className="mt-1 text-[13px] text-ink-faint">Mehrfachauswahl möglich</p>
            </div>
            <div className="flex flex-col gap-2.5">
              {getSymptoms(slug).map((text) => {
                const active = symptoms.includes(text);
                return (
                  <button
                    key={text}
                    type="button"
                    onClick={() => setSymptoms((s) => toggle(s, text))}
                    className={cn(
                      "flex items-start gap-3 rounded-2xl border px-5 py-3.5 text-left text-[15px] leading-[1.4] transition-colors duration-200",
                      active
                        ? "border-accent-hover bg-accent-tint text-ink"
                        : "border-border bg-bg text-ink hover:border-accent-line"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] border transition-colors duration-200",
                        active ? "border-accent-hover bg-accent-hover" : "border-border"
                      )}
                    >
                      {active && <Check size={13} strokeWidth={3} className="text-bg" />}
                    </span>
                    {text}
                  </button>
                );
              })}
            </div>
            <HoverButton
              type="button"
              variant="outline"
              disabled={symptoms.length === 0}
              onClick={() => setStep(2)}
              className="mt-1 self-start px-6 py-3.5 text-[15px] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Weiter
            </HoverButton>
          </motion.div>
        )}

        {step === 2 && slug && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <div>
              <h3 className="text-[19px] font-semibold leading-[1.3] text-ink sm:text-[22px]">
                Was soll sich am Ende ändern?
              </h3>
              <p className="mt-1 text-[13px] text-ink-faint">Mehrfachauswahl möglich</p>
            </div>
            <div className="flex flex-col gap-2.5">
              {getGoals(slug).map((text) => {
                const active = goals.includes(text);
                return (
                  <button
                    key={text}
                    type="button"
                    onClick={() => setGoals((g) => toggle(g, text))}
                    className={cn(
                      "flex items-start gap-3 rounded-2xl border px-5 py-3.5 text-left text-[15px] leading-[1.4] transition-colors duration-200",
                      active
                        ? "border-accent-hover bg-accent-tint text-ink"
                        : "border-border bg-bg text-ink hover:border-accent-line"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] border transition-colors duration-200",
                        active ? "border-accent-hover bg-accent-hover" : "border-border"
                      )}
                    >
                      {active && <Check size={13} strokeWidth={3} className="text-bg" />}
                    </span>
                    {text}
                  </button>
                );
              })}
            </div>
            <HoverButton
              type="button"
              variant="outline"
              disabled={goals.length === 0}
              onClick={() => setStep(3)}
              className="mt-1 self-start px-6 py-3.5 text-[15px] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Weiter
            </HoverButton>
          </motion.div>
        )}

        {step === 3 && (
          <motion.form
            key="step3"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <h3 className="text-[19px] font-semibold leading-[1.3] text-ink sm:text-[22px]">
              Wie dürfen wir uns bei Ihnen melden?
            </h3>

            <div>
              <label htmlFor="quiz-name" className="mb-1.5 block text-sm font-medium text-ink">
                Name <span className="text-ink-soft">*</span>
              </label>
              <input
                id="quiz-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={!!nameError}
                aria-describedby={nameError ? "quiz-name-error" : undefined}
                className={cn(
                  "h-12 w-full rounded-2xl border bg-bg px-4 text-[15px] text-ink placeholder:text-ink-faint",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover/60",
                  nameError ? "border-red-300" : "border-border"
                )}
              />
              {nameError && (
                <p id="quiz-name-error" role="alert" className="mt-1.5 text-sm text-red-600">
                  {nameError}
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
                    onClick={() => {
                      setMethod(m);
                      setContact("");
                      setTouched(false);
                    }}
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
              <label htmlFor="quiz-contact" className="mb-1.5 block text-sm font-medium text-ink">
                {method === "phone" ? "Telefonnummer" : "E-Mail-Adresse"}{" "}
                <span className="text-ink-soft">*</span>
              </label>
              <input
                id="quiz-contact"
                name="contact"
                type={method === "phone" ? "tel" : "email"}
                autoComplete={method === "phone" ? "tel" : "email"}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={method === "phone" ? "+49 ..." : "name@firma.de"}
                aria-invalid={!!contactError}
                aria-describedby={contactError ? "quiz-contact-error" : undefined}
                className={cn(
                  "h-12 w-full rounded-2xl border bg-bg px-4 text-[15px] text-ink placeholder:text-ink-faint",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover/60",
                  contactError ? "border-red-300" : "border-border"
                )}
              />
              {contactError && (
                <p id="quiz-contact-error" role="alert" className="mt-1.5 text-sm text-red-600">
                  {contactError}
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
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
