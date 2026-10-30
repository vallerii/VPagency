// One colour per technology, used wherever a technology appears:
// hero tiles, the stack block, header menu, service tags and inner pages.
// The class sets --tc (icon colour) and --tb (8% tint for the card background).
import s from "./home.module.css";

const byTech: Record<string, string> = {
  wordpress: s.tWordpress,
  shopify: s.tShopify,
  laravel: s.tLaravel,
  schnittstellen: s.tAuto,
  ki: s.tKi,
};

// Tags and brand names that belong to a technology.
const byName: Record<string, string> = {
  WordPress: "wordpress", WooCommerce: "wordpress",
  Shopify: "shopify",
  Laravel: "laravel",
  JTL: "schnittstellen", SAP: "schnittstellen", DATEV: "schnittstellen",
  "KI-Agenten": "ki", Assistenten: "ki", "ИИ-агенты": "ki", "Ассистенты": "ki",
};

export const tone = (tech: string) => byTech[tech] ?? "";
export const toneOf = (name: string) => (byName[name] ? byTech[byName[name]] : "");
