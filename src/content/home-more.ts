// Homepage blocks after the first screen, and the footer. Same rules as
// home.ts: German is the site language, Russian is for the owner's review
// only; no full stop at the end of headings, sentences or descriptions; no
// long dash; no "kostenlos/бесплатно" on buttons.
import type { Lang } from "./home";

type Point = { title: string; text: string };

type More = {
  services: {
    title: string;
    items: { title: string; text: string; tags: string[]; href: string }[];
  };
  stack: {
    title: string;
    lead: string;
    servicesLabel: string;
    cards: { id: string; brands: string[]; title: string; text: string; services: string[]; note?: string }[];
    germany: string;
  };
  ki: {
    title: string;
    lead: string;
    points: Point[];
    cta: string;
  };
  projects: {
    title: string;
    lead: string;
    all: string;
    open: string;
    tags: string[];
    items: { slug: string; name: string; tag: string; text: string; image: string; badge?: string }[];
  };
  final: {
    title: string;
    text: string;
    closing: string;
    closingSub: string;
    contactLabel: string;
    city: string;
    phone: string;
    email: string;
    form: {
      what: string;
      whatHint: string;
      name: string;
      phone: string;
      consent: string;
      submit: string;
      required: string;
      invalidPhone: string;
      consentError: string;
      pending: string;
      files: string;
      filesHint: string;
      filesRemove: string;
      filesTooBig: string;
    };
  };
  footer: { links: { label: string; href: string }[]; rights: string };
};

const legal = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

// Placeholder contacts: confirm the real number and mailbox before launch.
const PHONE = "+49 (0) 271 313 93 517";
const EMAIL = "hello@vpagency.de";

export const more: Record<Lang, More> = {
  de: {
    services: {
      title: "Alles Digitale für Ihr Unternehmen, aus einer Hand",
      items: [
        { title: "Websites", text: "Erklären Ihr Angebot und bringen neue Anfragen", tags: ["WordPress", "Laravel"], href: "/leistungen/websites" },
        { title: "Online-Shops", text: "Für Endkunden und Großhandel, auf Wunsch mit Umzug von der alten Plattform", tags: ["Shopify", "WooCommerce"], href: "/leistungen/online-shops" },
        { title: "Systeme und Portale", text: "Für Ihre Kunden und Ihr Team, statt Excel und E-Mail", tags: ["Laravel"], href: "/leistungen/systeme-und-portale" },
        { title: "Automatisierung", text: "Weniger Handarbeit, weil Ihre Programme zusammenarbeiten", tags: ["JTL", "SAP", "DATEV"], href: "/leistungen/automatisierung" },
        { title: "KI-Lösungen", text: "Dort, wo KI Zeit und Geld spart", tags: ["KI-Agenten", "Assistenten"], href: "/leistungen/ki" },
        { title: "Neue Produkte", text: "Plattform, Online-Service oder App von Grund auf, mit Prototyp vor der großen Investition", tags: ["Laravel"], href: "/leistungen/neue-produkte" },
        { title: "Betreuung", text: "Nach dem Start bleiben wir an Bord und entwickeln weiter", tags: [], href: "/leistungen/betreuung" },
      ],
    },
    stack: {
      title: "Technik, auf die wir setzen",
      lead: "Die Plattform wählen wir passend zu Ihrer Aufgabe. So bleibt die Lösung wartbar und wächst mit Ihrem Unternehmen",
      servicesLabel: "Was wir damit machen",
      cards: [
        {
          id: "wp", brands: ["WordPress", "WooCommerce"], title: "WordPress",
          text: "Websites, die Ihr Team selbst pflegt: Unternehmensseiten, Produktkataloge, Blogs und mehrsprachige Auftritte",
          services: ["Neue Website", "Relaunch", "WooCommerce-Shop", "Pflege und Updates"],
        },
        {
          id: "shopify", brands: ["Shopify"], title: "Shopify",
          text: "Online-Shops für Endkunden und Großhandel, mit Anbindung an Warenwirtschaft und Buchhaltung",
          services: ["Neuer Shop", "B2B-Shop", "Umzug auf Shopify", "Mehr Verkäufe"],
          note: "Umzug von Shopware, Magento, WooCommerce und OXID",
        },
        {
          id: "laravel", brands: ["Laravel"], title: "Laravel",
          text: "Eigene Systeme, Kundenportale und Webanwendungen, wenn Standardlösungen nicht passen",
          services: ["Kundenportal", "Internes System", "Plattform", "Weiterentwicklung"],
        },
        {
          id: "auto", brands: ["SAP", "DATEV", "auto"], title: "Automatisierung und Anbindungen",
          text: "Wir verbinden Ihre Programme, damit Bestellungen, Bestände und Rechnungen ohne Handarbeit laufen",
          services: ["Schnittstellen", "ERP-Anbindung", "Automatische Abläufe"],
          note: "SAP, Business Central, JTL-Wawi, Xentral, weclapp, DATEV",
        },
        {
          id: "ki", brands: ["Claude", "ChatGPT", "Cursor", "Copilot"], title: "KI",
          text: "Wir arbeiten selbst täglich mit KI und bauen sie dort ein, wo sie Ihrem Team Zeit spart",
          services: ["KI-Agenten", "Assistenten", "Dokumente automatisch verarbeiten", "Beratung zu KI"],
          note: "Claude, ChatGPT, Cursor, GitHub Copilot",
        },
      ],
      germany: "Gebaut für Deutschland: DSGVO-konform und barrierefrei nach BFSG",
    },
    ki: {
      title: "Wo KI hilft",
      lead: "Wir nutzen KI dort, wo sie Ihre Arbeit schneller und günstiger macht",
      points: [
        { title: "Schneller und günstiger", text: "Kürzere Laufzeiten und ein fairer Preis" },
        { title: "Datenschutz nach DSGVO", text: "Ihre Daten bleiben geschützt und werden nicht weitergegeben" },
        { title: "Ein Mensch prüft", text: "Jedes Ergebnis prüft ein Mensch, bevor es bei Ihnen ankommt" },
      ],
      cta: "Wo lohnt sich KI bei Ihnen? Sprechen wir darüber",
    },
    projects: {
      title: "Was wir bereits umgesetzt haben",
      lead: "Relaunches für Industrie- und B2B-Unternehmen aus Produktion, Messtechnik, Verpackung und Bau. Jedes Projekt zeigt die Ausgangslage, was wir umgesetzt haben und was sich für den Kunden verändert hat",
      tags: ["WordPress", "Relaunch"],
      all: "Alle Projekte",
      open: "Projekt ansehen",
      items: [
        { slug: "proctec", name: "proCtec", tag: "Produktionsautomatisierung", image: "/projects/proctec.webp", text: "Neue Struktur nach Lösungen und Branchen, mit Referenzen und Blog, die das Team selbst pflegt" },
        { slug: "erfi", name: "erfi", tag: "Labormöbel und Messsysteme", image: "/projects/erfi.webp", text: "Ein Katalog nach Einsatzbereichen: Labore, Ausbildung und Montage finden schneller ihre Produktlinie" },
        { slug: "gbs", name: "GBS metrology", tag: "Optische Messtechnik", image: "/projects/gbs.webp", text: "Vom Anwendungsfall zum passenden Sensor, in der Sprache von Ingenieuren" },
        { slug: "wetropa", name: "Wetropa", tag: "Verpackungen aus Schaumstoff und Wabenplatten", image: "/projects/wetropa.webp", text: "Klare Produktlinien und Branchen, ein Bereich für Nachhaltigkeit, Blog und mehrere Sprachen" },
        { slug: "lemming", name: "LEMMING", tag: "Spezialtiefbau", image: "/projects/lemming.webp", text: "Komplexe Bauleistungen einfach erklärt, mit schneller Anfrage zum konkreten Bauvorhaben" },
        { slug: "wecubexx", name: "WECUBEX", tag: "Metallverarbeitung", image: "/projects/wecubexx.webp", badge: "Launch in Kürze", text: "Eine neue Website für sechs Werke in vier Ländern, die das Marketing selbst pflegt" },
      ],
    },
    final: {
      title: "Von der ersten Idee bis zur laufenden Betreuung",
      text: "Ein Team begleitet Ihr Projekt vom ersten Gespräch bis über den Start hinaus",
      closing: "Erzählen Sie uns, worum es geht",
      closingSub: "Wir melden uns innerhalb eines Werktags",
      contactLabel: "Oder direkt",
      city: "Siegen, Deutschland",
      phone: PHONE,
      email: EMAIL,
      form: {
        what: "Beschreiben Sie Ihre Aufgabe oder Idee",
        whatHint: "Ein paar Sätze genügen: was gerade nicht rundläuft oder was Sie vorhaben",
        name: "Ihr Name",
        phone: "Telefon",
        consent: "Ich bin einverstanden, dass VP agency meine Angaben zur Bearbeitung der Anfrage verwendet",
        submit: "Projekt besprechen",
        required: "Bitte ausfüllen",
        invalidPhone: "Bitte eine Telefonnummer angeben",
        consentError: "Bitte bestätigen Sie die Einwilligung",
        files: "Dateien anhängen",
        filesHint: "Pflichtenheft, Skizzen oder Screenshots: PDF, Word, Excel, Bilder oder ZIP, bis 20 MB",
        filesRemove: "Entfernen",
        filesTooBig: "Die Dateien sind zusammen größer als 20 MB",
        pending: `Das Formular wird gerade eingerichtet und versendet noch nicht. Bis dahin erreichen Sie uns unter ${PHONE}`,
      },
    },
    footer: { links: legal, rights: "© 2026 VP agency" },
  },
  ru: {
    services: {
      title: "Вся цифровая часть вашего бизнеса, одной командой",
      items: [
        { title: "Сайты", text: "Которые объясняют ваше предложение и приводят заявки", tags: ["WordPress", "Laravel"], href: "/leistungen/websites" },
        { title: "Интернет-магазины", text: "Для розницы и опта, в том числе переезд со старой платформы", tags: ["Shopify", "WooCommerce"], href: "/leistungen/online-shops" },
        { title: "Системы и порталы", text: "Для ваших клиентов и сотрудников, вместо Excel и почты", tags: ["Laravel"], href: "/leistungen/systeme-und-portale" },
        { title: "Автоматизация", text: "Меньше ручной работы, ваши программы работают вместе", tags: ["JTL", "SAP", "DATEV"], href: "/leistungen/automatisierung" },
        { title: "ИИ-решения", text: "Там, где ИИ экономит время и деньги", tags: ["ИИ-агенты", "Ассистенты"], href: "/leistungen/ki" },
        { title: "Новое с нуля", text: "Платформа, онлайн-сервис или приложение с нуля, с прототипом до больших вложений", tags: ["Laravel"], href: "/leistungen/neue-produkte" },
        { title: "Поддержка", text: "После запуска остаёмся и развиваем дальше", tags: [], href: "/leistungen/betreuung" },
      ],
    },
    stack: {
      title: "Технологии, на которых мы строим",
      lead: "Платформу выбираем под вашу задачу. Так решение легко поддерживать, оно растёт вместе с вашим бизнесом",
      servicesLabel: "Что мы на этом делаем",
      cards: [
        {
          id: "wp", brands: ["WordPress", "WooCommerce"], title: "WordPress",
          text: "Сайты, которые ваша команда ведёт сама: сайты компаний, каталоги продукции, блоги и многоязычные версии",
          services: ["Новый сайт", "Редизайн", "Магазин на WooCommerce", "Поддержка и обновления"],
        },
        {
          id: "shopify", brands: ["Shopify"], title: "Shopify",
          text: "Интернет-магазины для розницы и опта, со связкой с учётом и складом",
          services: ["Новый магазин", "Оптовый магазин", "Переезд на Shopify", "Рост продаж"],
          note: "Переезд с Shopware, Magento, WooCommerce и OXID",
        },
        {
          id: "laravel", brands: ["Laravel"], title: "Laravel",
          text: "Свои системы, порталы для клиентов и веб-приложения, когда готовые решения не подходят",
          services: ["Портал для клиентов", "Внутренняя система", "Платформа", "Доработка"],
        },
        {
          id: "auto", brands: ["SAP", "DATEV", "auto"], title: "Автоматизация и связки",
          text: "Связываем ваши программы, чтобы заказы, остатки и счета шли без ручной работы",
          services: ["Интеграции", "Связка с ERP", "Автоматические процессы"],
          note: "SAP, Business Central, JTL-Wawi, Xentral, weclapp, DATEV",
        },
        {
          id: "ki", brands: ["Claude", "ChatGPT", "Cursor", "Copilot"], title: "ИИ",
          text: "Мы сами каждый день работаем с ИИ и встраиваем его там, где он экономит время вашей команде",
          services: ["ИИ-агенты", "Ассистенты", "Автоматическая обработка документов", "Консультация по ИИ"],
          note: "Claude, ChatGPT, Cursor, GitHub Copilot",
        },
      ],
      germany: "Сделано для Германии: DSGVO и доступность по BFSG",
    },
    ki: {
      title: "Где помогает ИИ",
      lead: "Мы используем ИИ там, где он делает работу быстрее и дешевле",
      points: [
        { title: "Быстрее и дешевле", text: "Короче сроки и разумная цена" },
        { title: "Данные защищены по DSGVO", text: "Ваши данные под защитой" },
        { title: "Проверяет человек", text: "Каждый результат проверяет человек, прежде чем он попадёт к вам" },
      ],
      cta: "Где ИИ окупится у вас? Давайте обсудим",
    },
    projects: {
      title: "Что уже сделано",
      lead: "Релаунчи сайтов для производственных и B2B-компаний: производство, измерительная техника, упаковка и строительство. В каждом проекте видно, с чем клиент пришёл, что мы сделали и что для него изменилось",
      tags: ["WordPress", "Релаунч"],
      all: "Все проекты",
      open: "Смотреть проект",
      items: [
        { slug: "proctec", name: "proCtec", tag: "Автоматизация производства", image: "/projects/proctec.webp", text: "Новая структура по решениям и отраслям, с кейсами и блогом, которые команда ведёт сама" },
        { slug: "erfi", name: "erfi", tag: "Лабораторная мебель и измерительные системы", image: "/projects/erfi.webp", text: "Каталог по областям применения: лаборатории, обучение и сборка быстрее находят свою линейку" },
        { slug: "gbs", name: "GBS metrology", tag: "Оптическая измерительная техника", image: "/projects/gbs.webp", text: "От задачи к нужному датчику, на языке инженеров" },
        { slug: "wetropa", name: "Wetropa", tag: "Упаковка из пенопласта и сотовых плит", image: "/projects/wetropa.webp", text: "Понятные линейки и отрасли, раздел об экологичности, блог и несколько языков" },
        { slug: "lemming", name: "LEMMING", tag: "Специальные фундаментные работы", image: "/projects/lemming.webp", text: "Сложные строительные услуги объяснены просто, с быстрым запросом по конкретному объекту" },
        { slug: "wecubexx", name: "WECUBEX", tag: "Металлообработка", image: "/projects/wecubexx.webp", badge: "Скоро запуск", text: "Новый сайт для шести заводов в четырёх странах, который маркетинг ведёт сам" },
      ],
    },
    final: {
      title: "От идеи до поддержки",
      text: "Одна команда ведёт ваш проект от первого разговора до работы после запуска",
      closing: "Расскажите, что происходит",
      closingSub: "Мы свяжемся с вами в течение рабочего дня",
      contactLabel: "Или напрямую",
      city: "Зиген, Германия",
      phone: PHONE,
      email: EMAIL,
      form: {
        what: "Опишите вашу задачу или идею",
        whatHint: "Пары предложений достаточно: что происходит или что вы задумали",
        name: "Ваше имя",
        phone: "Телефон",
        consent: "Я согласен, что VP agency использует мои данные для обработки заявки",
        submit: "Обсудить задачу",
        required: "Заполните поле",
        invalidPhone: "Укажите номер телефона",
        consentError: "Подтвердите согласие",
        files: "Прикрепить файлы",
        filesHint: "ТЗ, наброски или скриншоты: PDF, Word, Excel, картинки или ZIP, до 20 МБ",
        filesRemove: "Убрать",
        filesTooBig: "Файлы вместе больше 20 МБ",
        pending: `Форма ещё подключается и пока не отправляет. До этого позвоните нам: ${PHONE}`,
      },
    },
    footer: { links: legal, rights: "© 2026 VP agency" },
  },
};
