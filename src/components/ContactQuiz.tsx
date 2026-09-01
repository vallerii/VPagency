"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverButton } from "./ui/hover-button";

// A three-step click-through brief instead of a wall of text fields:
//   1. What do you want to build?  (four project types, two columns)
//   2. Which industry?             (single choice + free-text "Andere")
//   3. Contact form                (one extra field that depends on step 1:
//                                   a relaunch asks for the current site,
//                                   everything else asks for references)
// Typing only happens on the last step.

type NeedId = "new-website" | "relaunch" | "shop" | "portal";

const NEED_OPTIONS: { id: NeedId; title: string; description: string }[] = [
  {
    id: "new-website",
    title: "Neue Website",
    description:
      "Eine neue Website für Ihr Unternehmen, Ihre Leistungen oder Ihre Marke erstellen.",
  },
  {
    id: "relaunch",
    title: "Website-Relaunch",
    description: "Ihre bestehende Website in Design, Struktur und Technik erneuern.",
  },
  {
    id: "shop",
    title: "Online-Shop",
    description:
      "Einen neuen Shop aufbauen oder Ihren bestehenden Shop weiterentwickeln.",
  },
  {
    id: "portal",
    title: "Kundenportal",
    description:
      "Einen persönlichen Bereich schaffen, in dem Ihre Kunden Dokumente, Bestellungen und Services verwalten.",
  },
];

const OTHER_INDUSTRY = "Andere";

const INDUSTRY_OPTIONS = [
  "Handwerk & Bau",
  "Handel & E-Commerce",
  "Produktion & Industrie",
  "Dienstleistung & Beratung",
  "Gesundheit & Medizin",
  "Immobilien",
  "Gastronomie & Hotellerie",
  "IT & Software",
  "Bildung & Weiterbildung",
  "Finanzen & Versicherung",
  OTHER_INDUSTRY,
];

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePhone(value: string) {
  return value.replace(/[^0-9]/g, "").length >= 6;
}

const TOTAL_STEPS = 3;

const OPTION_BASE =
  "rounded-2xl border px-5 py-3.5 text-left text-[15px] leading-[1.4] transition-colors duration-200";
const OPTION_IDLE = "border-border bg-bg text-ink hover:border-accent-line hover:bg-accent-tint";
const OPTION_ACTIVE = "border-accent-hover bg-accent-tint text-ink";
const FIELD_BASE =
  "w-full rounded-2xl border bg-bg px-4 text-[15px] text-ink placeholder:text-ink-faint focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover/60";

interface ContactQuizProps {
  onSuccess?: () => void;
}

export function ContactQuiz({ onSuccess }: ContactQuizProps) {
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState<NeedId | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);
  const [otherIndustry, setOtherIndustry] = useState("");
  const [name, setName] = useState("");
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [contact, setContact] = useState("");
  const [currentSite, setCurrentSite] = useState("");
  const [references, setReferences] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // A relaunch is about an existing site, so that is what we ask for;
  // every other project type has nothing to look at yet, so we ask for
  // references instead.
  const isRelaunch = need === "relaunch";

  const industryDone =
    industry !== null && (industry !== OTHER_INDUSTRY || otherIndustry.trim().length > 0);

  const nameError = touched && !name.trim() ? "Bitte geben Sie Ihren Namen an" : undefined;
  const contactError =
    touched && method === "email" && !validateEmail(contact)
      ? "Bitte überprüfen Sie das E-Mail-Format"
      : touched && method === "phone" && !validatePhone(contact)
        ? "Bitte geben Sie eine gültige Telefonnummer an"
        : undefined;
  const siteError =
    touched && isRelaunch && !currentSite.trim()
      ? "Bitte geben Sie die Adresse Ihrer aktuellen Website an"
      : undefined;

  function selectNeed(value: NeedId) {
    setNeed(value);
    setStep(1);
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    const contactValid = method === "email" ? validateEmail(contact) : validatePhone(contact);
    if (!name.trim() || !contactValid || (isRelaunch && !currentSite.trim())) {
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
        {step > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            ← Zurück
          </button>
        )}
        <span className="text-[13px] font-medium text-ink-faint">
          Schritt {step + 1} von {TOTAL_STEPS}
        </span>
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
              Was brauchen Sie?
            </h3>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {NEED_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => selectNeed(opt.id)}
                  className={cn(
                    OPTION_BASE,
                    need === opt.id ? OPTION_ACTIVE : OPTION_IDLE,
                    "flex h-full flex-col gap-1.5"
                  )}
                >
                  <span className="text-[16px] font-semibold text-ink">{opt.title}</span>
                  <span className="text-[13.5px] leading-[1.45] text-ink-soft">
                    {opt.description}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 1 && (
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
                In welcher Branche sind Sie tätig?
              </h3>
              <p className="mt-1 text-[13px] text-ink-faint">Eine Auswahl</p>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {INDUSTRY_OPTIONS.map((text) => (
                <button
                  key={text}
                  type="button"
                  onClick={() => setIndustry(text)}
                  className={cn(
                    OPTION_BASE,
                    industry === text ? OPTION_ACTIVE : OPTION_IDLE,
                    "flex items-center gap-3"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                      industry === text ? "border-accent-hover bg-accent-hover" : "border-border"
                    )}
                  >
                    {industry === text && <Check size={13} strokeWidth={3} className="text-bg" />}
                  </span>
                  {text}
                </button>
              ))}
            </div>

            {industry === OTHER_INDUSTRY && (
              <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}>
                <label
                  htmlFor="quiz-industry-other"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Welche Branche? <span className="text-ink-soft">*</span>
                </label>
                <input
                  id="quiz-industry-other"
                  name="industry-other"
                  type="text"
                  value={otherIndustry}
                  onChange={(e) => setOtherIndustry(e.target.value)}
                  placeholder="z. B. Logistik"
                  className={cn(FIELD_BASE, "h-12 border-border")}
                />
              </motion.div>
            )}

            <HoverButton
              type="button"
              variant="outline"
              disabled={!industryDone}
              onClick={() => setStep(2)}
              className="mt-1 self-start px-6 py-3.5 text-[15px] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Weiter
            </HoverButton>
          </motion.div>
        )}

        {step === 2 && (
          <motion.form
            key="step2"
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
                className={cn("h-12", FIELD_BASE, nameError ? "border-red-300" : "border-border")}
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
                  "h-12",
                  FIELD_BASE,
                  contactError ? "border-red-300" : "border-border"
                )}
              />
              {contactError && (
                <p id="quiz-contact-error" role="alert" className="mt-1.5 text-sm text-red-600">
                  {contactError}
                </p>
              )}
            </div>

            {isRelaunch ? (
              <div>
                <label
                  htmlFor="quiz-current-site"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Ihre aktuelle Website <span className="text-ink-soft">*</span>
                </label>
                <input
                  id="quiz-current-site"
                  name="current-site"
                  type="url"
                  inputMode="url"
                  autoComplete="url"
                  value={currentSite}
                  onChange={(e) => setCurrentSite(e.target.value)}
                  placeholder="https://ihre-website.de"
                  aria-invalid={!!siteError}
                  aria-describedby={siteError ? "quiz-current-site-error" : undefined}
                  className={cn("h-12", FIELD_BASE, siteError ? "border-red-300" : "border-border")}
                />
                {siteError && (
                  <p
                    id="quiz-current-site-error"
                    role="alert"
                    className="mt-1.5 text-sm text-red-600"
                  >
                    {siteError}
                  </p>
                )}
              </div>
            ) : (
              <div>
                <label
                  htmlFor="quiz-references"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Referenzen <span className="text-ink-soft">(optional)</span>
                </label>
                <textarea
                  id="quiz-references"
                  name="references"
                  rows={3}
                  value={references}
                  onChange={(e) => setReferences(e.target.value)}
                  placeholder="Websites, die Ihnen gefallen — ein Link pro Zeile"
                  className={cn(FIELD_BASE, "resize-y py-3 leading-[1.5] border-border")}
                />
                <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">
                  Beispiele helfen uns, Ihren Geschmack schneller zu treffen.
                </p>
              </div>
            )}

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
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Kontaktaufnahme zu.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
