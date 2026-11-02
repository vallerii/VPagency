// Homepage copy: header and first screen. German is the site language;
// Russian exists only so the owner can review the page (/neu?lang=ru) and is
// removed before launch.
// Copy rules (owner, 30.10.2026): no full stop at the end of headings,
// sentences or descriptions; no long dash anywhere in site texts; no
// "kostenlos/бесплатно" on buttons.

export type Lang = "de" | "ru";

export type DoorArt = "form" | "cart" | "sheet" | "chat" | "move" | "ai" | "idea";

export type Door = { id: string; art: DoorArt; title: string; href: string };

export type ToolCard = { id: string; tech: string; brands: string[]; title: string; text: string };

type HomeCopy = {
  nav: { label: string; href: string }[];
  navCta: string;
  menu: string;
  hero: {
    title: string;
    lead: string;
    cta: string;
    secondary: string;
    progress: { title: string; text: string }[];
    team: { value: string; label: string };
    wallLabel: string;
    toolsLabel: string;
  };
  wall: Door[];
  tools: ToolCard[];
  clientsLabel: string;
};

export const home: Record<Lang, HomeCopy> = {
  de: {
    nav: [
      { label: "Leistungen", href: "#leistungen" },
      { label: "Technik", href: "/leistungen/neue-produkte" },
      { label: "Projekte", href: "/projekte" },
      { label: "Kontakt", href: "#anfrage" },
    ],
    navCta: "Anfrage senden",
    menu: "Menü",
    hero: {
      title: "Digitale Lösungen für Ihr Unternehmen",
      lead: "Wir entwickeln Websites, Online-Shops, Systeme und Automatisierungen für Ihr Unternehmen. Ob etwas nicht mehr rundläuft, ein fertiges Pflichtenheft vorliegt oder etwas Neues entstehen soll: Wir sehen es uns an und setzen es um",
      cta: "Projekt besprechen",
      secondary: "Ihr Fall ist nicht dabei?",
      progress: [
        { title: "Anfrage", text: "Sie beschreiben die Aufgabe" },
        { title: "Beratung", text: "Wir klären sie gemeinsam" },
        { title: "Lösung", text: "Wir schlagen eine Lösung vor und setzen sie um" },
      ],
      team: { value: "1 Team", label: "von der Idee bis zur laufenden Betreuung" },
      wallLabel: "Situationen, mit denen Kunden zu uns kommen",
      toolsLabel: "Technik, mit der wir arbeiten",
    },
    wall: [
      { id: "excel", art: "sheet", title: "Alles läuft über Excel und über Sie", href: "/leistungen/automatisierung" },
      { id: "anfragen", art: "form", title: "Anfragen gehen verloren", href: "/leistungen/websites" },
      { id: "idee", art: "idea", title: "Neue Idee: Plattform oder Online-Service", href: "/leistungen/neue-produkte" },
      { id: "shop", art: "cart", title: "Der Shop verkauft weniger, als er könnte", href: "/leistungen/online-shops" },
      { id: "dienstleister", art: "chat", title: "Der Dienstleister meldet sich nicht mehr", href: "/leistungen/betreuung" },
      { id: "systeme", art: "move", title: "Shop umziehen oder Systeme verbinden", href: "/leistungen/systeme-und-portale" },
      { id: "ki", art: "ai", title: "Wir wollen KI einsetzen, wissen aber nicht wo", href: "/leistungen/ki" },
    ],
    tools: [
      { id: "wp", tech: "wordpress", brands: ["WordPress"], title: "WordPress", text: "Websites" },
      { id: "shopify", tech: "shopify", brands: ["Shopify"], title: "Shopify", text: "Online-Shops" },
      { id: "laravel", tech: "laravel", brands: ["Laravel"], title: "Laravel", text: "Systeme und Portale" },
      { id: "auto", tech: "schnittstellen", brands: ["auto"], title: "Automatisierung", text: "SAP, JTL, DATEV" },
      { id: "ki", tech: "ki", brands: ["Claude", "ChatGPT", "Cursor", "Copilot"], title: "KI", text: "Claude, ChatGPT, Cursor, Copilot" },
    ],
    clientsLabel: "Unternehmen, für die wir gearbeitet haben",
  },
  ru: {
    nav: [
      { label: "Что делаем", href: "#leistungen" },
      { label: "Технологии", href: "/leistungen/neue-produkte" },
      { label: "Проекты", href: "/projekte" },
      { label: "Контакты", href: "#anfrage" },
    ],
    navCta: "Отправить заявку",
    menu: "Меню",
    hero: {
      title: "Расскажите, что вам нужно. Мы найдём для вас лучшее решение",
      lead: "Мы делаем сайты, интернет-магазины, системы и автоматизацию для вашего бизнеса. Что-то не работает, есть готовое ТЗ или хотите запустить новое с нуля: мы разберёмся и сделаем",
      cta: "Обсудить задачу",
      secondary: "Вашего случая нет?",
      progress: [
        { title: "Заявка", text: "Вы описываете задачу" },
        { title: "Консультация", text: "Разбираем её вместе" },
        { title: "Решение", text: "Предлагаем и делаем" },
      ],
      team: { value: "1 команда", label: "от идеи до поддержки" },
      wallLabel: "Ситуации, с которыми к нам приходят",
      toolsLabel: "Технологии, с которыми мы работаем",
    },
    wall: [
      { id: "excel", art: "sheet", title: "Всё держится на Excel и на вас", href: "/leistungen/automatisierung" },
      { id: "anfragen", art: "form", title: "Заявки теряются", href: "/leistungen/websites" },
      { id: "idee", art: "idea", title: "Новая идея: платформа или онлайн-сервис", href: "/leistungen/neue-produkte" },
      { id: "shop", art: "cart", title: "Магазин продаёт меньше, чем мог бы", href: "/leistungen/online-shops" },
      { id: "dienstleister", art: "chat", title: "Подрядчик пропал", href: "/leistungen/betreuung" },
      { id: "systeme", art: "move", title: "Переехать или связать системы", href: "/leistungen/systeme-und-portale" },
      { id: "ki", art: "ai", title: "Хотим ИИ, но не знаем, где он окупится", href: "/leistungen/ki" },
    ],
    tools: [
      { id: "wp", tech: "wordpress", brands: ["WordPress"], title: "WordPress", text: "Сайты" },
      { id: "shopify", tech: "shopify", brands: ["Shopify"], title: "Shopify", text: "Интернет-магазины" },
      { id: "laravel", tech: "laravel", brands: ["Laravel"], title: "Laravel", text: "Системы и порталы" },
      { id: "auto", tech: "schnittstellen", brands: ["auto"], title: "Автоматизация", text: "SAP, JTL, DATEV" },
      { id: "ki", tech: "ki", brands: ["Claude", "ChatGPT", "Cursor", "Copilot"], title: "ИИ", text: "Claude, ChatGPT, Cursor, Copilot" },
    ],
    clientsLabel: "Компании, для которых мы работали",
  },
};
