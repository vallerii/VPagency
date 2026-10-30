// Service catalog → inner pages. Built from the team's internal catalog
// (all items treated as confirmed for now). Every item is written once and
// referenced by id from service pages (business language) and technology
// pages (technical language).
// Copy rules: German is the site language, Russian is for review only;
// no full stop at the end of texts; no long dash.
import type { Lang } from "./home";

export type L = { de: string; ru: string };
export type TechId = "wordpress" | "shopify" | "laravel" | "schnittstellen" | "ki";
export type ServiceId =
  | "websites" | "online-shops" | "systeme-und-portale" | "neue-produkte"
  | "automatisierung" | "ki" | "betreuung" | "analyse-und-beratung";

// Prototype base: the new pages live under /neu until they replace the old ones.
export const BASE = "/neu";
export const href = (lang: Lang, path: string) => {
  const p = path.startsWith("#") ? `${BASE}${path}` : `${BASE}${path}`;
  if (lang !== "ru") return p;
  const [a, h] = p.split("#");
  return `${a}?lang=ru${h ? `#${h}` : ""}`;
};
export const t = (v: L, lang: Lang) => v[lang];

type Item = { de: string; ru: string; dde: string; dru: string };

// [German name, Russian name, German description, Russian description]
const I = (de: string, ru: string, dde: string, dru: string): Item => ({ de, ru, dde, dru });

export const items: Record<string, Item> = {
  // Websites (WordPress)
  w1: I("Neue Unternehmenswebsite", "Новый корпоративный сайт", "Erklärt, was Sie tun, und hilft Kunden, sich für Sie zu entscheiden", "Объясняет, что вы делаете, и помогает выбрать именно вас"),
  w2: I("Website-Relaunch", "Перезапуск сайта", "Was funktioniert, bleibt. Struktur, Design und Texte machen wir neu", "Сохраняем то, что работает, переделываем структуру, дизайн и тексты"),
  w11: I("Migration zu WordPress", "Миграция сайта на WordPress", "Seiten und Inhalte ziehen von einer anderen Plattform um, ohne dass Adressen verloren gehen", "Перенос страниц и данных с другой платформы без потери адресов страниц"),
  w3: I("Produktkatalog mit technischen Unterlagen", "Каталог продукции с техдокументацией", "Produkte nach Branchen und Aufgaben, technische Daten und PDFs zum Herunterladen", "Продукты по отраслям и задачам, технические данные и скачивание PDF"),
  w8: I("Mehrsprachige Website für mehrere Länder", "Сайт для нескольких стран и языков", "Eine Website für verschiedene Märkte, Standorte und Sprachen", "Один сайт для разных рынков, площадок и языков"),
  w4: I("Landingpages für Kampagnen", "Посадочные страницы под рекламу", "Eine eigene Seite für jede Kampagne oder jedes Angebot", "Отдельная страница под каждую кампанию или предложение"),
  wn4: I("Karriereseite", "Карьерная страница", "Stellen, Vorteile Ihres Unternehmens und eine einfache Bewerbung", "Вакансии, преимущества работы у вас и простой отклик для кандидатов"),
  w17: I("WooCommerce-Shop", "Магазин на WooCommerce", "Ein Online-Shop auf WordPress für alle, die schon mit WordPress arbeiten", "Интернет-магазин на WordPress для тех, кто уже работает с этим сайтом"),
  w12: I("Content-Einpflege", "Наполнение сайта", "Seiten, Texte, Bilder und Bereiche komplett eingepflegt", "Страницы, тексты, фото и разделы под ключ"),
  w6: I("Website-Pflege ohne Entwickler", "Редактирование без программиста", "Ein einfacher Editor, mit dem Ihr Team Texte und Bilder selbst ändert", "Удобный редактор, чтобы команда сама меняла тексты и фото"),
  w13: I("Fehlerbehebung für bestehende Websites", "Исправление ошибок и вёрстки", "Fehler, kaputte Darstellung und mobile Ansicht auf Ihrer bestehenden Website", "Ошибки, поломанная вёрстка и мобильная версия на существующем сайте"),
  w9: I("Website-Performance", "Ускорение сайта", "Seiten laden schnell auf Handy und Computer", "Страницы открываются быстро на телефоне и компьютере"),
  wn3: I("Gehackte WordPress-Website wiederherstellen", "Восстановление взломанного сайта", "Schadcode entfernen, Website wiederherstellen und Lücken schließen", "Убираем вредоносный код, восстанавливаем работу и закрываем уязвимости"),
  wn5: I("Hosting-Umzug ohne Ausfallzeit", "Переезд на новый хостинг", "Die Website zieht auf einen neuen Server um, ohne offline zu gehen", "Перенос сайта на другой сервер без остановки работы"),
  w14: I("WordPress-Plugin-Entwicklung", "Создание плагинов WordPress", "Eine Funktion für Ihre Aufgabe, die es in fertigen Plugins nicht gibt", "Функция под задачу, которой нет в готовых плагинах"),
  w15: I("Plugin-Einrichtung und -Reparatur", "Подключение и починка плагинов", "Plugins installieren, einrichten und reparieren, die nicht mehr funktionieren", "Установка, настройка и исправление плагинов, которые перестали работать"),
  w16: I("Plugin- und Theme-Konflikte lösen", "Исправление конфликтов", "Wenn sich Plugins oder Theme gegenseitig stören und die Website ausfällt", "Когда плагины или тема мешают друг другу и ломают сайт"),
  w5: I("Formulare mit CRM verbinden", "Заявки с сайта в CRM", "Anfragen aus Formularen landen sofort im CRM beim richtigen Ansprechpartner", "Обращения из форм сразу попадают в CRM к нужному человеку"),
  w19: I("ERP-Anbindung für WordPress", "Связка сайта с ERP", "Anfragen und Daten der Website gehen automatisch ins ERP", "Заявки и данные сайта автоматически передаются в ERP-систему"),
  wn1: I("Barrierefreie Website nach BFSG", "Доступность сайта по BFSG", "Prüfung und Anpassung für Websites und Shops, die an Privatkunden verkaufen", "Проверка и доработка для сайтов и магазинов, которые продают частным лицам"),
  wn2: I("Cookie-Consent und DSGVO", "Cookie-баннер и защита данных", "Einwilligung für Cookies und Verarbeitung von Besucherdaten nach den Regeln", "Согласие на cookies и обработка данных посетителей по правилам"),
  wai1: I("KI-Suche für Website und Dokumentation", "ИИ-поиск по сайту и документации", "Besucher fragen in eigenen Worten und finden das passende Produkt oder Dokument", "Посетитель задаёт вопрос своими словами и находит нужный продукт или документ"),
  wai2: I("KI-gestützte Übersetzung der Website", "ИИ-перевод сайта", "Schnell in neue Sprachen übersetzt, geprüft von einem Menschen", "Быстрый перевод на новые языки с проверкой человеком"),
  // Shopify
  shA: I("Shopify-Shop erstellen", "Запуск магазина на Shopify", "Ein Shop von Grund auf: Struktur, Katalog, Zahlung, Versand", "Магазин с нуля: структура, каталог, оплата, доставка"),
  shB: I("Shopify-Theme-Entwicklung", "Разработка темы магазина", "Eigenes Design und eigene Vorlagen statt Standard-Theme", "Собственный дизайн и шаблоны вместо стандартной темы"),
  ns42: I("Migration zu Shopify", "Миграция на Shopify", "Produkte, Kunden und Bestellungen ziehen von jeder Plattform um, ohne Datenverlust", "Перенос товаров, клиентов и заказов с любой платформы без потери данных"),
  ns18: I("Migration von Shopware zu Shopify", "Миграция с Shopware", "Umzug des Shops, alle Daten bleiben erhalten", "Перенос магазина с сохранением данных"),
  ns19: I("Migration von Magento zu Shopify", "Миграция с Magento", "Katalog und Bestellhistorie ziehen um, ohne Umsatzverlust", "Перенос каталога и истории заказов без потери продаж"),
  ns20: I("Migration von WooCommerce zu Shopify", "Миграция с WooCommerce", "Produkte, Bestellungen und Kunden wechseln ohne Datenverlust", "Товары, заказы и клиенты переходят без потери данных"),
  ns21: I("Migration von OXID zu Shopify", "Миграция с OXID", "Umzug des Shops mit allen Daten und Seitenadressen", "Перенос магазина с сохранением данных и адресов страниц"),
  ns22: I("Migrations-Audit", "Аудит перед миграцией", "Was umzieht, was nicht nötig ist und wo Daten verloren gehen können", "Что переносить, что не нужно и где могут потеряться данные"),
  ns6: I("Shopify-Beratung", "Консультация по Shopify", "Was zuerst kommt und wie sich der Shop weiterentwickelt", "Что делать первым и как развивать магазин дальше"),
  ns7: I("Shopify Plus Entwicklung", "Разработка на Shopify Plus", "Große Shops: komplexe Logik, mehrere Regionen, großer Katalog", "Крупный магазин: сложная логика, несколько регионов, большой каталог"),
  ns41: I("Shopify-App-Entwicklung", "Создание приложений для Shopify", "Eine App für Ihre Aufgabe, die es fertig nicht gibt", "Приложение под задачу, которой нет в готовых решениях"),
  ns9: I("App-Einrichtung, Reparatur und Konfliktlösung", "Подключение, починка и конфликты приложений", "Wir wählen Apps aus, richten sie ein, reparieren sie und lösen Konflikte", "Подбираем и настраиваем приложения, чиним сломанные и убираем конфликты"),
  shC: I("KI-gestützte Produktdatenpflege", "Наполнение каталога с помощью ИИ", "Beschreibungen, Eigenschaften und Übersetzungen, geprüft von einem Menschen", "Описания, характеристики и переводы товаров, проверенные человеком"),
  shD: I("Automatisierung mit Shopify Flow", "Автоматизация магазина (Shopify Flow)", "Bestellungen, Bestände und Benachrichtigungen laufen ohne Handarbeit", "Заказы, остатки и уведомления обрабатываются без ручной работы"),
  ns10: I("Shopify UX/UI-Design", "Дизайн магазина", "Klare Navigation und Seiten, die zum Kauf führen", "Понятная навигация и страницы, которые ведут к покупке"),
  ns11: I("Conversion-Optimierung", "Оптимизация конверсии", "Wir messen, wo Käufer abspringen, verbessern und prüfen das Ergebnis", "Замеряем, где теряются покупатели, правим и проверяем результат"),
  ns14: I("Checkout und Zahlungsarten", "Оформление заказа и оплата", "Schritte im Checkout, Zahlungs- und Versandarten eingerichtet", "Настройка шагов оформления, способов оплаты и доставки"),
  ns12: I("Shopify Performance", "Ускорение магазина", "Seiten laden schnell auf Handy und Computer", "Быстрая загрузка страниц на телефоне и компьютере"),
  ns13: I("Tracking und Analytics", "Аналитика и отслеживание продаж", "Sie sehen, woher Käufer kommen und was Bestellungen bringt", "Видно, откуда приходят покупатели и что приносит заказы"),
  ns4: I("KI-Suche und Personalisierung", "Поиск и персональные предложения", "Käufer finden Produkte schneller und sehen passende Angebote", "Покупатель быстрее находит товар и видит подходящие предложения"),
  shE: I("KI-Shopping-Assistent", "ИИ-консультант для покупателей", "Beantwortet Fragen zu Produkten, Verfügbarkeit und Versand", "Отвечает на вопросы о товарах, наличии и доставке"),
  ns1: I("Shopify B2B", "Оптовый магазин (B2B)", "Großhandelspreise, Kauf auf Rechnung und Konditionen für Partner", "Оптовые цены, заказы по счёту и условия для партнёров"),
  ns2: I("Internationalisierung mit Shopify Markets", "Продажи в другие страны", "Sprachen, Währungen, lokale Preise und Versand", "Языки, валюты, локальные цены и доставка"),
  ns3: I("Shopify POS", "Касса и магазин в одной системе", "Ladengeschäft und Online-Shop mit gemeinsamen Beständen", "Розничная точка и онлайн-магазин с общими остатками"),
  ns5: I("Abo-Commerce", "Подписки и регулярные заказы", "Wiederkehrende Zahlungen und Lieferung nach Plan", "Регулярные платежи и доставка по расписанию"),
  e4: I("Produktkonfigurator", "Конфигуратор товара", "Käufer stellen das Produkt selbst zusammen und sehen sofort den Preis", "Покупатель собирает продукт под себя и сразу видит цену"),
  e6: I("Marktplatz-Anbindung", "Выгрузка товаров на маркетплейсы", "Ein Katalog für Amazon, Otto, Kaufland und weitere Plattformen", "Один каталог для Amazon, Otto, Kaufland и других площадок"),
  ns23: I("ERP- und Warenwirtschaftsanbindung", "Связка с ERP и складом", "Bestellungen, Bestände und Preise werden automatisch übertragen", "Заказы, остатки и цены передаются автоматически"),
  ns35: I("Buchhaltungsanbindung", "Связка с бухгалтерией", "Bestellungen und Zahlungen gehen ohne Abtippen in die Buchhaltung", "Заказы и оплаты уходят в бухгалтерию без ручного ввода"),
  ns29: I("PIM-Anbindung", "Связка с системой управления товарами", "Beschreibungen und Eigenschaften kommen aus einer Quelle", "Описания и характеристики товаров берутся из одного источника"),
  ns30: I("Headless-CMS-Anbindung", "Связка с системой управления контентом", "Texte und Seiten des Shops werden in einem eigenen System gepflegt", "Тексты и страницы магазина ведутся в отдельной системе"),
  ns15: I("Cookie-Consent und Datenschutz", "Cookie-баннер и защита данных", "Einwilligung für Cookies und Schutz der Kundendaten", "Согласие на cookies и защита данных покупателей"),
  ns16: I("Barrierefreiheit nach BFSG", "Доступность магазина по BFSG", "Ein Shop, den auch Menschen mit Einschränkungen nutzen können", "Магазин, которым могут пользоваться люди с ограничениями"),
  ns17: I("Shopify Support und Wartung", "Поддержка магазина", "Updates, Fehlerbehebung und Erweiterungen nach dem Start", "Обновления, исправления и доработки после запуска"),
  // Systems and portals (Laravel)
  c1: I("Interne Tools für Teams", "Внутренний инструмент вместо таблиц", "Anfragen, Aufgaben und Daten an einem Ort", "Заявки, задачи и данные в одном месте"),
  c2: I("Individuelles CRM", "Учёт клиентов и заявок под ваши процессы", "Sie sehen, wer wo steht und was als Nächstes kommt", "Видно, кто на каком этапе и что делать дальше"),
  c3: I("Auftrags-, Produktions- und Lagerverwaltung", "Учёт заказов, производства или склада", "Funktioniert so, wie Ihr Unternehmen arbeitet", "Работает так, как устроен ваш бизнес"),
  c6: I("Freigabe-Workflows", "Согласования", "Anfragen und Dokumente laufen einen klaren Weg mit Fristen", "Заявки и документы идут по понятному маршруту, со сроками"),
  c7: I("Mitarbeiterportal", "Кабинет сотрудника", "Aufgaben, Dienstplan und Berichte in einem Fenster", "Задачи, график и отчёты в одном окне"),
  c8: I("Management-Dashboard", "Панель показателей для руководителя", "Umsatz, Auslastung und Anfragen auf einem Bildschirm", "Выручка, загрузка и заявки на одном экране"),
  c4: I("Kundenportal", "Клиентский портал", "Kunden sehen Bestellungen, Dokumente und Status selbst", "Заказы, документы и статусы клиент видит сам"),
  c5: I("Partner- und Händlerportal", "Портал для партнёров и дилеров", "Partner arbeiten mit Ihnen ohne Anrufe und E-Mail-Ketten", "Партнёры работают с вами без звонков и переписки"),
  c12: I("Online-Terminbuchung", "Онлайн-запись и расписание", "Kunden buchen selbst, Ihr Team sieht die Auslastung", "Клиенты записываются сами, команда видит загрузку"),
  c13: I("Preis- und Angebotsrechner", "Калькулятор стоимости", "Kunden erhalten selbst einen Preisrahmen oder ein Angebot", "Клиент сам получает ориентир цены или предложение"),
  c11: I("Mitarbeiter-App", "Мобильное приложение для сотрудников", "Arbeiten vom Handy aus: auf der Baustelle, unterwegs, beim Kunden", "Работа с телефона на объекте, в поездке, у клиента"),
  lapp: I("Kunden-App", "Мобильное приложение для клиентов", "Bestellungen, Status und Kontakt zu Ihnen auf dem Handy Ihrer Kunden", "Заказы, статусы и связь с вами в телефоне клиента"),
  n1: I("SaaS-Entwicklung", "Онлайн-сервис по подписке", "Plattform, Kundenkonto und Bezahlung für Ihre Kunden", "Платформа, личный кабинет и оплата для ваших клиентов"),
  n2: I("Marktplatz- und Plattformentwicklung", "Маркетплейс или платформа", "Eine Plattform, auf der sich Anbieter und Käufer treffen", "Площадка, где встречаются продавцы и покупатели"),
  c9: I("Systemintegration", "Связка программ в одну систему", "Daten aus verschiedenen Programmen ergeben ein Gesamtbild", "Данные из разных программ собираются в одной картине"),
  lapi: I("API für Partner und Kunden", "Доступ партнёров к вашей системе", "Partner und Kunden erhalten Daten direkt, ohne manuelle Exporte", "Партнёры и клиенты получают данные напрямую, без выгрузок вручную"),
  l4: I("Reparatur von Schnittstellen", "Починка интеграций", "Ein externer Dienst wurde aktualisiert, und Daten kommen nicht mehr an", "Внешний сервис обновился, и данные перестали передаваться"),
  c10: I("Datenmigration", "Перенос данных из старой системы или таблиц", "Ohne Verlust der Historie und ohne Abtippen", "Без потери истории и без ручного ввода"),
  c14: I("Digitale Signatur und Dokumentenmanagement", "Электронная подпись и документооборот", "Dokumente digital unterschreiben und ohne Papier ablegen", "Подпись документов и их хранение без бумаги"),
  l2: I("Weiterentwicklung bestehender Laravel-Anwendungen", "Доработка существующей системы", "Neue Funktionen in einem System, das schon läuft", "Новые функции в системе, которая уже работает"),
  l6: I("Laravel- und PHP-Upgrade", "Обновление старой версии Laravel и PHP", "Das System wechselt auf eine unterstützte Version, ohne Stillstand", "Система переходит на поддерживаемую версию без остановки работы"),
  l1: I("Ablösung von Altsystemen", "Замена устаревшей системы", "Funktionen und Daten des alten Programms ziehen in ein neues System auf Laravel", "Функции и данные старой программы переходят в новую систему на Laravel"),
  lc: I("Code-Audit", "Аудит кода", "Sicherheit und Qualität des Codes geprüft, zum Beispiel vor einem Dienstleisterwechsel", "Проверка безопасности и качества кода, например перед сменой подрядчика"),
  lai: I("KI-Funktionen in bestehende Software integrieren", "Встраивание ИИ в вашу систему", "KI-Funktionen in dem Programm, das Ihr Team schon nutzt", "ИИ-функции внутри программы, которой команда уже пользуется"),
  // AI
  aiA: I("KI-Potenzialanalyse", "ИИ-аудит процессов", "Wir finden die Aufgaben, bei denen KI die meisten Stunden spart", "Находим задачи, где ИИ экономит больше всего часов"),
  aiB: I("KI-Schulungen für Mitarbeitende", "Обучение сотрудников работе с ИИ", "Ihr Team nutzt KI sicher und sinnvoll im Arbeitsalltag", "Команда безопасно и с пользой применяет ИИ в работе"),
  aiD: I("KI-Richtlinien und Datenschutz", "Правила работы с ИИ в компании", "Was in die KI darf und was nicht, und wie der Datenschutz eingehalten wird", "Что можно передавать в ИИ, а что нет, и как соблюдать защиту данных"),
  a12: I("KI-Agenten für Geschäftsprozesse", "ИИ-агенты для процессов", "Der Agent erledigt Aufgaben selbst: Anfragen anlegen, Daten aktualisieren, Antworten vorbereiten", "Агент сам выполняет задачи: оформляет заявки, обновляет данные, готовит ответы"),
  a5: I("KI-Assistent für Kundenanfragen", "ИИ-ассистент для клиентов", "Beantwortet typische Fragen auf der Website und im Messenger, schwierige gehen an Ihr Team", "Отвечает на типовые вопросы на сайте и в мессенджерах, сложные передаёт команде"),
  aiC: I("KI-Telefonassistent", "Голосовой ИИ-ассистент для телефона", "Nimmt Anrufe an, beantwortet Fragen und notiert Anliegen", "Принимает звонки, отвечает на вопросы и записывает обращения"),
  a1: I("KI-Lead-Qualifizierung", "ИИ-сортировка входящих заявок", "Jede Anfrage wird sofort bewertet und landet beim richtigen Ansprechpartner", "Заявка оценивается сразу и попадает к нужному человеку"),
  a7: I("KI-Dokumentenverarbeitung", "ИИ-обработка документов", "Rechnungen, Lieferscheine und Briefe werden erkannt und landen selbst in der Buchhaltung", "Счета, накладные и письма распознаются и попадают в учёт сами"),
  a6: I("Interner KI-Wissensassistent", "ИИ-помощник для сотрудников", "Findet Antworten in Dokumenten und Anleitungen Ihres Unternehmens", "Находит ответы в документах и инструкциях компании"),
  // Automation
  auA: I("Workflow-Automatisierung mit Make und n8n", "Автоматизация на готовых сервисах", "Wir verbinden Programme und Abläufe ohne eigene Entwicklung", "Связываем программы и сценарии без отдельной разработки"),
  a2: I("Datenaustausch zwischen Systemen", "Обмен данными между программами", "Daten wandern zwischen Systemen ohne Kopieren per Hand", "Данные переходят между системами без ручного копирования"),
  a9: I("Anfragen aus WhatsApp und E-Mail bündeln", "Заявки из мессенджеров и почты в одном месте", "Anfragen aus WhatsApp und E-Mail landen in einem System", "Обращения из WhatsApp и почты попадают в систему"),
  a3: I("Automatische Erinnerungen und Benachrichtigungen", "Напоминания и уведомления", "An Kunden und Team: Fristen, Zahlungen und Aufgaben", "Клиентам и команде о сроках, оплатах и задачах"),
  a10: I("Fristen- und Aufgabenüberwachung", "Контроль сроков", "Bleibt eine Aufgabe liegen, bekommen Verantwortliche und Leitung ein Signal", "Если задача зависла, ответственный и руководитель получают сигнал"),
  a4: I("Automatische Dokumentenerstellung", "Документы по шаблону", "Verträge, Rechnungen und Angebote in Minuten", "Договоры, счета и коммерческие предложения за минуты"),
  a8: I("Automatisches Reporting", "Автоматические отчёты руководителю", "Die wichtigsten Zahlen kommen pünktlich, ohne Nachfrage", "Ключевые цифры приходят в нужное время без запроса"),
  a11: I("E-Mail-Automatisierung", "Рассылки по сценарию", "E-Mails an neue Kunden und an Kunden, die lange nicht gekauft haben", "Письма новым и давно не покупавшим клиентам"),
  // Support
  p1: I("Support und Monitoring", "Техническая поддержка и мониторинг", "Ausfälle sind sofort sichtbar, die Reaktionszeit steht im Vertrag", "Сбои видны сразу, срок реакции прописан в договоре"),
  p2: I("Updates, Backups und Sicherheit", "Обновления, резервные копии и безопасность", "Regelmäßige Updates und Schutz vor Angriffen", "Регулярные обновления и защита от взлома"),
  p9: I("Projektübernahme von anderen Dienstleistern", "Принять проект от прежнего подрядчика", "Wir arbeiten uns in fremde Arbeit ein, stellen fertig und betreuen weiter", "Разбираемся в чужой работе, доделываем и поддерживаем дальше"),
  p6: I("Schulung des Teams", "Обучение команды", "Anleitungen und Einweisung, damit Ihr Team ohne ständige Rückfragen arbeitet", "Инструкции и разбор, чтобы команда работала без постоянных вопросов"),
  // First step
  s1: I("Digitalisierungs-Check und Roadmap", "Диагностика и план развития", "Wo Zeit und Kunden verloren gehen, was zuerst kommt und in welcher Reihenfolge", "Где теряются время и клиенты, что делать первым и в каком порядке"),
  s2: I("Audit von Website, Shop oder Software", "Аудит сайта, магазина или системы", "Was funktioniert, was stört und was sich zu ändern lohnt", "Что работает, что мешает и что стоит переделать"),
  s5: I("Klickbarer Prototyp", "Прототип", "Wir testen die Idee mit echten Nutzern vor großen Investitionen", "Проверяем идею на реальных пользователях до больших вложений"),
  n7: I("Pflichtenheft", "Техническое задание", "Eine klare Aufgabenbeschreibung, wenn Sie selbst oder mit einem anderen Team entwickeln", "Понятная постановка задач, если разработку ведёте сами или с другой командой"),
};

type Group = { title: L; ids: string[] };

export type Service = {
  id: ServiceId;
  nav: L;
  title: L;
  lead: L;
  who: L;
  result: L;
  situations: L[];
  groups: Group[];
  tech: TechId[];
};

const L2 = (de: string, ru: string): L => ({ de, ru });

export const services: Service[] = [
  {
    id: "websites", nav: L2("Websites", "Сайты"),
    title: L2("Websites, die Ihr Angebot erklären und Anfragen bringen", "Сайты, которые объясняют ваше предложение и приводят заявки"),
    lead: L2("Für Unternehmen, deren Website veraltet wirkt, keine Anfragen bringt oder ständig Probleme macht", "Для компаний, чей сайт выглядит устаревшим, не даёт заявок или ломается"),
    who: L2("Ihre Website wirkt veraltet, bringt keine Anfragen oder fällt immer wieder aus", "Сайт выглядит устаревшим, не даёт заявок или ломается"),
    result: L2("Ein klarer Weg vom Interesse zur Anfrage. Ihr Team ändert Texte und Bilder selbst", "Понятный путь от интереса до заявки. Команда сама меняет тексты и фото"),
    situations: [L2("Die Website sieht veraltet aus", "Сайт выглядит устаревшим"), L2("Es kommen kaum Anfragen über die Website", "С сайта почти не приходят заявки"), L2("Jede Änderung geht nur über den Entwickler", "Любая правка только через программиста")],
    groups: [
      { title: L2("Neue Website und Relaunch", "Новый сайт и перезапуск"), ids: ["w1", "w2", "w11", "w3", "w8", "w4", "wn4"] },
      { title: L2("Inhalte und Pflege", "Наполнение и управление"), ids: ["w12", "w6"] },
      { title: L2("Reparieren und beschleunigen", "Исправление и ускорение"), ids: ["w13", "w9", "wn3", "wn5"] },
      { title: L2("Funktionen und Anbindungen", "Функции и связки"), ids: ["w14", "w15", "w16", "w5", "w19"] },
      { title: L2("Recht und Barrierefreiheit", "Право и доступность"), ids: ["wn1", "wn2"] },
      { title: L2("KI auf der Website", "ИИ на сайте"), ids: ["wai1", "wai2"] },
    ],
    tech: ["wordpress", "schnittstellen"],
  },
  {
    id: "online-shops", nav: L2("Online-Shops", "Интернет-магазины"),
    title: L2("Online-Shops, die verkaufen und nicht ausfallen", "Магазины, которые продают и не ломаются"),
    lead: L2("Für Shop-Betreiber und Unternehmen, die einen neuen Shop brauchen oder auf Shopify umziehen", "Для владельцев магазинов и компаний, которым нужен новый магазин или переезд на Shopify"),
    who: L2("Ihr Shop verkauft zu wenig, die Plattform läuft aus oder Bestellungen werden per Hand übertragen", "Магазин продаёт мало, платформа устаревает или заказы переносят вручную"),
    result: L2("Ein stabiler Shop, ein kurzer Weg zum Kauf und eine Verbindung zu Warenwirtschaft und Lager", "Стабильный магазин, короткий путь к покупке, связка с учётом и складом"),
    situations: [L2("Besucher kommen, kaufen aber nicht", "Посетители приходят, но не покупают"), L2("Die alte Shop-Plattform läuft aus", "Старая платформа магазина больше не поддерживается"), L2("Bestellungen werden per Hand in die Warenwirtschaft übertragen", "Заказы переносят в учёт вручную")],
    groups: [
      { title: L2("Neuer Shop und Umzug", "Новый магазин и переезд"), ids: ["shA", "shB", "ns42", "ns22", "w17"] },
      { title: L2("Mehr Verkäufe", "Больше продаж"), ids: ["ns10", "ns11", "ns14", "ns12", "ns13", "ns4", "shE"] },
      { title: L2("Großhandel und neue Märkte", "Опт и новые рынки"), ids: ["ns1", "ns2", "ns3", "ns5", "e4", "e6"] },
      { title: L2("Anbindungen", "Связки"), ids: ["ns23", "ns35", "ns29", "ns30"] },
      { title: L2("Recht und Betreuung", "Право и поддержка"), ids: ["ns15", "ns16", "ns17"] },
    ],
    tech: ["shopify", "wordpress", "schnittstellen"],
  },
  {
    id: "systeme-und-portale", nav: L2("Systeme und Portale", "Системы и порталы"),
    title: L2("Ein klares System statt Excel und fünf Programmen", "Один понятный инструмент вместо Excel и пяти программ"),
    lead: L2("Für Unternehmen, die schneller gewachsen sind als ihre Abläufe, oder denen fertige Software nicht passt", "Для компаний, которые выросли быстрее процессов, или которым не подходит готовое ПО"),
    who: L2("Alles läuft über Excel und E-Mail, und vieles hängt an einzelnen Personen", "Всё держится на Excel, почте и отдельных людях"),
    result: L2("Alles an einem Ort, weniger Handarbeit und weniger Abhängigkeit von Einzelnen", "Всё в одном месте, меньше ручной работы и меньше зависимости от отдельных людей"),
    situations: [L2("Alles läuft über Excel und E-Mail", "Всё держится на Excel и почте"), L2("Wissen steckt in den Köpfen einzelner Mitarbeiter", "Знания в головах отдельных сотрудников"), L2("Fertige Software passt nicht zu Ihren Abläufen", "Готовые программы не подходят под ваши процессы")],
    groups: [
      { title: L2("Systeme für Ihr Team", "Системы для команды"), ids: ["c1", "c2", "c3", "c6", "c7", "c8"] },
      { title: L2("Portale und Apps für Kunden und Partner", "Порталы и приложения для клиентов и партнёров"), ids: ["c4", "c5", "c12", "c13", "c11", "lapp"] },
      { title: L2("Daten und Anbindungen", "Связки и данные"), ids: ["c9", "lapi", "l4", "c10", "c14"] },
      { title: L2("Bestehende Systeme", "Существующие системы"), ids: ["l2", "l6", "l1", "lc", "lai"] },
    ],
    tech: ["laravel", "schnittstellen"],
  },
  {
    id: "neue-produkte", nav: L2("Neue Produkte", "Новое с нуля"),
    title: L2("Eine neue Plattform oder ein Online-Service, von der Idee bis zum Start", "Новая платформа или онлайн-сервис, от идеи до запуска"),
    lead: L2("Für Unternehmer mit einer Idee für einen Service, eine Plattform oder eine App", "Для предпринимателей с идеей сервиса, платформы или приложения"),
    who: L2("Sie haben eine Idee, wissen aber nicht, was zuerst gebaut werden sollte und was es kostet", "Есть идея, но непонятно, что делать первым и сколько это стоит"),
    result: L2("Eine geprüfte Idee vor großen Investitionen und eine erste Version, die echte Nutzer testen", "Проверенная идея до больших вложений и первая версия, которую пробуют реальные пользователи"),
    situations: [L2("Sie haben eine Idee für eine Plattform oder einen Service", "Есть идея платформы или сервиса"), L2("Sie wissen nicht, was zuerst gebaut werden sollte", "Непонятно, что делать первым"), L2("Sie wollen die Idee prüfen, bevor Sie viel investieren", "Хотите проверить идею до больших вложений")],
    groups: [
      { title: L2("Idee prüfen", "Проверить идею"), ids: ["s5", "n7"] },
      { title: L2("Produkt bauen", "Сделать продукт"), ids: ["n1", "n2", "lapp", "c13"] },
      { title: L2("Nach dem Start", "После запуска"), ids: ["p1", "p2"] },
    ],
    tech: ["laravel", "ki"],
  },
  {
    id: "automatisierung", nav: L2("Automatisierung", "Автоматизация"),
    title: L2("Weniger Routine, mehr Zeit für Ihr Geschäft", "Меньше рутины, больше времени на бизнес"),
    lead: L2("Für Teams, die jeden Tag Stunden mit denselben Handgriffen verbringen", "Для команд, которые тратят часы на одинаковые действия"),
    who: L2("Ihr Team kopiert Daten, schreibt Erinnerungen und baut Berichte per Hand", "Команда вручную копирует данные, пишет напоминания и собирает отчёты"),
    result: L2("Routine läuft von selbst, und die Leitung sieht das Gesamtbild ohne Nachfrage", "Рутина работает сама, руководитель видит картину без запросов"),
    situations: [L2("Ihr Team macht täglich dieselben Handgriffe", "Команда каждый день делает одно и то же вручную"), L2("Programme arbeiten nicht zusammen", "Программы не связаны между собой"), L2("Fristen und Aufgaben gehen unter", "Сроки и задачи теряются")],
    groups: [
      { title: L2("Abläufe ohne Handarbeit", "Процессы без ручной работы"), ids: ["auA", "a2", "a9", "a3", "a10", "a4", "a8", "a11"] },
      { title: L2("Anbindungen", "Связки"), ids: ["c9", "ns23", "ns35"] },
    ],
    tech: ["schnittstellen", "ki"],
  },
  {
    id: "ki", nav: L2("KI-Lösungen", "ИИ-решения"),
    title: L2("KI, die eine konkrete Arbeit übernimmt", "ИИ, который берёт на себя конкретную работу"),
    lead: L2("Für Unternehmen, die KI nutzen wollen, aber nicht wissen, wo sie sich lohnt", "Для компаний, которые хотят использовать ИИ, но не знают, где он окупится"),
    who: L2("Alle reden über KI, aber unklar ist, wo sie bei Ihnen Zeit und Geld spart", "Все говорят про ИИ, но неясно, где он сэкономит время и деньги у вас"),
    result: L2("Klar ist, wo KI Zeit spart, und sie arbeitet in echten Abläufen. Ihre Daten bleiben geschützt", "Понятно, где ИИ экономит время, и он работает в реальных процессах. Данные защищены"),
    situations: [L2("Unklar, wo KI sich bei Ihnen lohnt", "Неясно, где ИИ окупится у вас"), L2("Ihr Team beantwortet ständig dieselben Fragen", "Команда постоянно отвечает на одни и те же вопросы"), L2("Sie haben Bedenken beim Datenschutz", "Есть опасения по защите данных")],
    groups: [
      { title: L2("Der Anfang", "С чего начать"), ids: ["aiA", "aiB", "aiD"] },
      { title: L2("KI im Einsatz", "ИИ в работе"), ids: ["a12", "a5", "aiC", "a1", "a7", "a6"] },
      { title: L2("KI in Website, Shop und System", "ИИ на сайте, в магазине и в системе"), ids: ["wai1", "shE", "lai"] },
    ],
    tech: ["ki", "schnittstellen"],
  },
  {
    id: "betreuung", nav: L2("Betreuung", "Поддержка"),
    title: L2("Ihr System läuft und entwickelt sich nach dem Start weiter", "Система работает и развивается после запуска"),
    lead: L2("Für Unternehmen, deren Projekt läuft, um das sich aber niemand kümmert", "Для компаний, у которых проект запущен, но за ним некому следить"),
    who: L2("Updates werden aufgeschoben, und der frühere Dienstleister ist nicht erreichbar", "Обновления откладываются, а прежний подрядчик не отвечает"),
    result: L2("Stabiler Betrieb und ein Partner, der Ihr Geschäft und Ihr System kennt", "Стабильная работа и партнёр, который знает и бизнес, и систему"),
    situations: [L2("Das Projekt läuft, aber niemand kümmert sich", "Проект запущен, но за ним никто не следит"), L2("Der Dienstleister ist nicht mehr erreichbar", "Подрядчик больше не отвечает"), L2("Updates werden immer wieder aufgeschoben", "Обновления постоянно откладываются")],
    groups: [
      { title: L2("Betrieb und Sicherheit", "Работа и безопасность"), ids: ["p1", "p2", "w13"] },
      { title: L2("Übernahme und Weiterentwicklung", "Приём и развитие"), ids: ["p9", "l2", "ns17", "p6"] },
    ],
    tech: ["wordpress", "shopify", "laravel"],
  },
  {
    id: "analyse-und-beratung", nav: L2("Analyse und Beratung", "Анализ и консультация"),
    title: L2("Verstehen, was Ihr Unternehmen bremst, und was zuerst kommt", "Понять, что тормозит бизнес, и что делать первым"),
    lead: L2("Für Inhaber, die spüren, dass etwas langsam läuft, aber nicht wissen warum, und für Gründer mit einer neuen Idee", "Для владельцев, которые чувствуют, что всё работает медленно, но не знают почему, и для предпринимателей с новой идеей"),
    who: L2("Sie spüren, dass etwas bremst, wissen aber nicht was und wo Sie anfangen sollen", "Чувствуете, что что-то тормозит, но не знаете что и с чего начать"),
    result: L2("Ein klarer Plan und eine geprüfte Idee vor großen Investitionen", "Понятный план и проверенная идея до больших вложений"),
    situations: [L2("Etwas bremst, aber unklar was", "Что-то тормозит, но непонятно что"), L2("Sie brauchen einen Plan, bevor Sie investieren", "Нужен план до вложений"), L2("Sie wollen eine zweite Meinung zu einem Angebot oder System", "Нужно второе мнение о предложении или системе")],
    groups: [
      { title: L2("Erster Schritt", "Первый шаг"), ids: ["s1", "s2", "s5", "n7"] },
      { title: L2("Vor einem Wechsel", "Перед сменой платформы или подрядчика"), ids: ["ns22", "lc"] },
    ],
    tech: [],
  },
];

export type Tech = {
  id: TechId;
  name: string;
  brands: string[];
  nav: L;
  title: L;
  lead: L;
  groups: Group[];
  migrations?: string[];
  systems?: { title: L; items: string[] }[];
  tools?: string[];
  services: ServiceId[];
};

export const techs: Tech[] = [
  {
    id: "wordpress", name: "WordPress", brands: ["WordPress", "WooCommerce"], nav: L2("WordPress", "WordPress"),
    title: L2("WordPress-Entwicklung", "Разработка на WordPress"),
    lead: L2("Websites, Kataloge und WooCommerce-Shops: eigene Themes und Plugins, Anbindungen an CRM und ERP, Wartung und Sicherheit", "Сайты, каталоги и магазины на WooCommerce: свои темы и плагины, связки с CRM и ERP, поддержка и безопасность"),
    groups: [
      { title: L2("Entwicklung", "Разработка"), ids: ["w1", "w2", "w3", "w8", "w4", "w17"] },
      { title: L2("Migration und Hosting", "Миграция и хостинг"), ids: ["w11", "wn5"] },
      { title: L2("Plugins", "Плагины"), ids: ["w14", "w15", "w16"] },
      { title: L2("Wartung und Sicherheit", "Поддержка и безопасность"), ids: ["w13", "w9", "wn3", "w6", "w12"] },
      { title: L2("Anbindungen", "Связки"), ids: ["w5", "w19"] },
      { title: L2("Recht und KI", "Право и ИИ"), ids: ["wn1", "wn2", "wai1", "wai2"] },
    ],
    services: ["websites", "online-shops", "betreuung"],
  },
  {
    id: "shopify", name: "Shopify", brands: ["Shopify"], nav: L2("Shopify", "Shopify"),
    title: L2("Shopify- und Shopify-Plus-Entwicklung", "Разработка на Shopify и Shopify Plus"),
    lead: L2("Shops, Themes und Apps, Umzüge von Shopware, Magento, WooCommerce und OXID, Anbindungen an ERP, PIM und Buchhaltung", "Магазины, темы и приложения, переезды с Shopware, Magento, WooCommerce и OXID, связки с ERP, PIM и бухгалтерией"),
    groups: [
      { title: L2("Shop und Theme", "Магазин и тема"), ids: ["shA", "shB", "ns10", "ns7", "ns6"] },
      { title: L2("Apps und Automatisierung", "Приложения и автоматизация"), ids: ["ns41", "ns9", "shD", "shC"] },
      { title: L2("Verkauf und Performance", "Продажи и скорость"), ids: ["ns11", "ns14", "ns12", "ns13", "ns4", "shE"] },
      { title: L2("Vertriebsmodelle", "Модели продаж"), ids: ["ns1", "ns2", "ns3", "ns5", "e4", "e6"] },
      { title: L2("Anbindungen", "Связки"), ids: ["ns23", "ns35", "ns29", "ns30"] },
      { title: L2("Recht und Support", "Право и поддержка"), ids: ["ns15", "ns16", "ns17"] },
    ],
    migrations: ["Shopware", "Magento", "WooCommerce", "OXID"],
    services: ["online-shops", "betreuung"],
  },
  {
    id: "laravel", name: "Laravel", brands: ["Laravel"], nav: L2("Laravel", "Laravel"),
    title: L2("Laravel-Entwicklung", "Разработка на Laravel"),
    lead: L2("Individuelle Webanwendungen, Portale, Apps und APIs, Weiterentwicklung und Upgrades bestehender Laravel- und PHP-Systeme", "Свои веб-приложения, порталы, приложения и API, доработка и обновление существующих систем на Laravel и PHP"),
    groups: [
      { title: L2("Neue Anwendungen", "Новые приложения"), ids: ["c1", "c2", "c3", "c6", "c8", "c4", "c5", "c12", "c13"] },
      { title: L2("Plattformen und Apps", "Платформы и приложения"), ids: ["n1", "n2", "c11", "lapp"] },
      { title: L2("Schnittstellen und Daten", "Интеграции и данные"), ids: ["c9", "lapi", "l4", "c10", "c14"] },
      { title: L2("Bestehende Anwendungen", "Существующие приложения"), ids: ["l2", "l6", "l1", "lc", "lai"] },
    ],
    services: ["systeme-und-portale", "neue-produkte", "betreuung"],
  },
  {
    id: "schnittstellen", name: "Schnittstellen", brands: ["SAP", "DATEV", "auto"], nav: L2("Schnittstellen", "Интеграции"),
    title: L2("Schnittstellen und Integrationen", "Интеграции и связки систем"),
    lead: L2("Wir verbinden Website, Shop und Systeme mit ERP, Warenwirtschaft, Buchhaltung, PIM und CMS", "Связываем сайт, магазин и системы с ERP, складом, бухгалтерией, PIM и CMS"),
    groups: [
      { title: L2("Was wir verbinden", "Что связываем"), ids: ["ns23", "ns35", "ns29", "ns30", "w19", "w5"] },
      { title: L2("Daten und Abläufe", "Данные и процессы"), ids: ["c9", "a2", "lapi", "l4", "c10", "auA"] },
    ],
    systems: [
      { title: L2("ERP und Warenwirtschaft", "ERP и склад"), items: ["SAP", "Dynamics 365 Business Central", "Dynamics NAV", "Dynamics AX", "Oracle NetSuite", "Xentral", "JTL-Wawi", "weclapp", "Sage"] },
      { title: L2("Buchhaltung", "Бухгалтерия"), items: ["DATEV"] },
      { title: L2("Produktdaten (PIM)", "Управление товарами (PIM)"), items: ["Akeneo", "Pimcore", "Salsify", "Plytix"] },
      { title: L2("Inhalte (CMS)", "Управление контентом (CMS)"), items: ["Contentful", "Storyblok", "Sanity"] },
    ],
    services: ["automatisierung", "online-shops", "systeme-und-portale"],
  },
  {
    id: "ki", name: "KI", brands: ["Claude", "ChatGPT", "Cursor", "Copilot"], nav: L2("KI-Tools", "ИИ-инструменты"),
    title: L2("KI-Tools, Agenten und Automatisierung", "ИИ-инструменты, агенты и автоматизация"),
    lead: L2("Wir arbeiten täglich mit Claude, ChatGPT, Cursor und GitHub Copilot und bauen Agenten, Assistenten und Automatisierungen mit Make und n8n", "Мы каждый день работаем с Claude, ChatGPT, Cursor и GitHub Copilot и строим агентов, ассистентов и автоматизацию на Make и n8n"),
    groups: [
      { title: L2("Agenten und Assistenten", "Агенты и ассистенты"), ids: ["a12", "a5", "aiC", "a6", "a1", "a7"] },
      { title: L2("Automatisierung", "Автоматизация"), ids: ["auA", "a2", "shD"] },
      { title: L2("KI in bestehenden Systemen", "ИИ в существующих системах"), ids: ["lai", "wai1", "wai2", "shC", "ns4"] },
      { title: L2("Einführung", "Внедрение"), ids: ["aiA", "aiB", "aiD"] },
    ],
    tools: ["Claude", "ChatGPT", "Cursor", "Copilot", "Make", "n8n"],
    services: ["ki", "automatisierung"],
  },
];

export const formats = {
  title: L2("So können Sie mit uns arbeiten", "Как с нами можно работать"),
  items: [
    { title: L2("Audit", "Аудит"), text: L2("Eine einmalige Prüfung: Wir sehen uns an, was es gibt, und geben Ihnen eine Liste, was zu tun ist", "Разовая проверка: смотрим, что есть, и даём список того, что делать") },
    { title: L2("Projekt", "Проект"), text: L2("Eine konkrete Aufgabe mit Anfang und Ende und einer Person, die für das Ergebnis verantwortlich ist", "Конкретная задача с началом и концом, один ответственный за результат") },
    { title: L2("Retainer", "Абонемент"), text: L2("Feste Stunden im Monat für Betreuung und Weiterentwicklung, mit Prioritäten und regelmäßigem Bericht", "Фиксированные часы в месяц на поддержку и развитие, приоритеты и регулярный отчёт") },
  ],
};

export const pageCopy = {
  servicesHub: { title: L2("Leistungen", "Услуги"), lead: L2("Beschreiben Sie, was in Ihrem Unternehmen passiert. Wir finden heraus, was dafür passt, und setzen es um", "Опишите, что происходит в бизнесе. Мы разберёмся, что подходит, и сделаем") },
  techHub: { title: L2("Technik", "Технологии"), lead: L2("Sie wissen, was Sie brauchen und auf welcher Plattform? Hier sehen Sie, was wir auf jeder Plattform umsetzen", "Знаете, что нужно и на какой платформе? Здесь видно, что мы делаем на каждой из них") },
  recognize: L2("Kennen Sie das?", "Узнаёте ситуацию?"),
  whatWeDo: L2("Was wir machen", "Что мы делаем"),
  onTech: L2("Auf welcher Technik", "На каких технологиях"),
  servicesOnTech: L2("Leistungen auf dieser Plattform", "Услуги на этой платформе"),
  migrationsTitle: L2("Umzug auf Shopify", "Переезд на Shopify"),
  migrationsLead: L2("Produkte, Kunden, Bestellungen und Seitenadressen ziehen mit, vorher prüfen wir, was umzieht", "Товары, клиенты, заказы и адреса страниц переезжают вместе с магазином, а до переезда проверяем, что переносить"),
  systemsTitle: L2("Mit diesen Systemen verbinden wir", "С какими системами связываем"),
  toolsTitle: L2("Womit wir arbeiten", "С чем работаем"),
  specTitle: L2("Sie haben ein Pflichtenheft?", "У вас есть ТЗ?"),
  specSteps: [
    { title: L2("Kurze Prüfung", "Короткая проверка"), text: L2("Wir lesen die Aufgabe und stellen die Fragen, die wirklich wichtig sind", "Читаем задачу и задаём вопросы, которые действительно важны") },
    { title: L2("Einschätzung und Frist", "Оценка и срок"), text: L2("Sie erhalten eine Einschätzung, eine Frist und Hinweise, was sonst noch hilft", "Вы получаете оценку, срок и подсказки, что ещё стоит поправить") },
    { title: L2("Umsetzung", "Работа"), text: L2("Wir setzen es um und bleiben nach dem Start erreichbar", "Делаем и остаёмся на связи после запуска") },
  ],
  specCta: L2("Pflichtenheft senden", "Отправить ТЗ"),
  cta: L2("Aufgabe besprechen", "Обсудить задачу"),
  more: L2("Mehr erfahren", "Подробнее"),
  allServices: L2("Alle Leistungen", "Все услуги"),
  allTech: L2("Alle Technik", "Все технологии"),
  home: L2("Startseite", "Главная"),
  notListed: L2("Nicht dabei? Beschreiben Sie Ihre Aufgabe, und wir finden die Lösung", "Нет в списке? Опишите задачу, а решение подберём мы"),
};

export const getService = (id: string) => services.find((s) => s.id === id);
export const getTech = (id: string) => techs.find((x) => x.id === id);
export const itemName = (id: string, lang: Lang) => (lang === "ru" ? items[id].ru : items[id].de);
export const itemText = (id: string, lang: Lang) => (lang === "ru" ? items[id].dru : items[id].dde);
