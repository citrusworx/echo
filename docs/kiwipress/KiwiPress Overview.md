# KiwiPress Overview

KiwiPress is a headless, containerized, production-ready content engine built on top of the Kiwi Engine. It reimagines the flexibility of WordPress with modern tooling and architecture, giving developers complete control while providing powerful defaults.

---

## 🧠 Superset Philosophy: KiwiPress is to WordPress as TypeScript is to JavaScript

Just like **TypeScript is a superset of JavaScript**, KiwiPress is a superset of WordPress concepts:

- It extends familiar patterns (like posts, pages, themes, and plugins)
- Adds structure through modular configuration (via Nectarine)
- Offers strict separation of concerns with a headless architecture
- Enables scalable, modern development workflows out of the box

With KiwiPress, you're not leaving WordPress behind—you’re upgrading it.

---

## 🏗 Headless by Design

KiwiPress cleanly separates backend from frontend, exposing structured content via APIs:

- Use it with Nunjucks, React, Vue, or static site generators
- Serve mobile apps, single-page apps, and marketing sites from one backend
- REST or GraphQL (future) support via Nectarine

---

## 📦 Containerized Architecture

KiwiPress is engineered to run in isolated Docker containers:

- API (powered by Nectarine)
- Admin UI (web-based control panel)
- Theme rendering (Nunjucks or any frontend)
- PostgreSQL database
- Optional: Redis, Mail, etc.

This makes local and cloud deployments fast, scalable, and consistent.

---

## 🚀 Production-Ready

Out of the box, KiwiPress includes:

- Secure authentication and roles
- RESTful content endpoints
- Extension and plugin support
- Configurable CLI (`kiwi`) for dev and deploy
- Theming engine with hot reload
- Integration with Juice (UI) and Nectarine (API/DB)

---

## 🧩 Plugin vs Extension Model

KiwiPress offers two ways to extend functionality:

### 🔌 Plugins (Legacy/Hybrid)

- Traditional WordPress plugins supported via WP container
- Useful for migration and hybrid setups

### 🧱 Extensions (Native)

- Written in Node or TypeScript
- Load as modular services or functions
- Add routes, webhooks, APIs, or content processors
- Configurable through TOML or YAML

---

## ✨ Theming with Nunjucks

KiwiPress supports themes written in Nunjucks for server-side rendering:

- Simple template structure: `index.njk`, `post.njk`, `page.njk`
- Customizable with filters and shortcodes
- Easily hot-swappable and versioned

You can also create themes for other modules using:

```bash
kiwi theme create mytheme --kiwipress
kiwi theme create mobileui --react-native
```

## 🛠 CLI Examples

```bash
kiwi start --service kiwipress
kiwi theme create freshpress --kiwipress
kiwi deploy --service kiwipress

```

KiwiPress is the structured, scalable upgrade to WordPress you've been waiting for—headless, developer-first, and built for the future of content on the web.
