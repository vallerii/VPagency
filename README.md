# VP Digital — сайт

Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion + Satoshi (Fontshare).

## Структура страницы

1. **Hero** (`src/components/Hero.tsx`) — эмоциональный первый экран: крупный
   заголовок слева, живая 3D-композиция из блоков справа (`components/ui/box-loader.tsx`,
   перекрашена в акцентный голубой).
2. **«Как мы работаем?»** — заголовок блока в `src/app/page.tsx`, дальше сразу
   идёт `StoryCanvas` — единая закреплённая сцена, где ~13 абстрактных модулей
   (не иконки) собираются из хаоса в понятную систему по мере скролла.
3. **Финальный CTA** (`FinalCTA.tsx` + `ContactForm.tsx`) — статично собранная
   конструкция + форма; при успешной отправке центральный модуль-цель
   «влетает» на своё место.

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Сборка

```bash
npm run build
npm start
```

## Типографика

Satoshi подключён через Fontshare CDN (`<link>` в `src/app/layout.tsx`) —
бесплатный шрифт, близкий по духу к Neue Montreal. Это внешняя зависимость
(сайт обращается к api.fontshare.com у пользователя в браузере); если нужно
полностью самостоятельный хостинг без внешних запросов — скачайте .woff2 с
fontshare.com и подключите через `next/font/local`.

Шкала размеров:
- Hero-заголовок: до 140px
- Заголовки блоков: 96–110px
- Описания: 26px
- Подписи/эйбро: 18px

## Структура компонентов

- `src/components/story/story-data.ts` — вся логика сцены StoryCanvas: 13
  модулей, 3 кластера, хаотичные позиции (beat 0) и формула конвергенции
  (кластер + затухающий радиус) для остальных 5 состояний, плюс тексты
- `src/components/story/Module.tsx` — абстрактные «кусочки конструкции»
  (lines / bars / dotgrid / wireframe / pill / flow / cornerdot / tick / node)
- `src/components/story/StoryCanvas.tsx` — закреплённый экран 560vh; для
  `prefers-reduced-motion` — статичный fallback без скролл-джекинга
- `src/components/ui/box-loader.tsx` — декоративная 3D-анимация для Hero
- `src/app/globals.css` — токены: тёплый белый `#FAFAF8`, графит `#171717`,
  акцент `#84D8FF` / hover `#6CCFFF`

## Что нужно доделать перед продакшеном

- Подключить реальную отправку формы (сейчас имитация) — `ContactForm.tsx`,
  функция `handleSubmit`.
- Заменить email в футере (`hello@vpdigital.agency`).
- При желании — самостоятельный хостинг шрифта Satoshi (см. раздел
  «Типографика» выше) вместо Fontshare CDN.
