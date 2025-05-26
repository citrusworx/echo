# 🧠 kiwi_admin · The citrusOS Shell

**Kiwi Admin** is the official administration shell for the Kiwi Engine ecosystem.  
It is not just a dashboard — it's a full **OS-style app shell** for modular, extensible web applications.

Kiwi Admin serves as the first implementation of the **citrusOS** user experience, blending visual simplicity, developer power, and plugin-driven scalability into one unified workspace.

---

## 🍋 citrusOS Philosophy

> "What if your CMS didn't feel like a form? What if it felt like an OS?"

`kiwi_admin` introduces a **desktop-like UI** inside the browser (or Electron), where users launch apps like “Posts,” “Pages,” or “Products” as windows — similar to an operating system environment.

It is designed for:

- 🧍 Solo creators and site owners (drag-and-drop simplicity)
- 🧑‍💻 Developers and engineers (full Monaco code editing)
- 🧩 Plugin builders (drop-in app registration)
- 💼 Enterprises and teams (multi-tenant, role-based)

---

## 🧩 Core Features

| Feature                  | Description                                                              |
|--------------------------|--------------------------------------------------------------------------|
| 🖥 OS-style UI            | Desktop launcher with draggable/resizable app windows                    |
| 🧩 App Module Loader     | Each module (Posts, Pages, etc.) registers dynamically into the shell     |
| 🌙 Theme + Layout Config | Customize the look via Juice + JSON/TOML theme files                     |
| 💾 Workspace Persistence | User layout and window state saved locally (and optionally in cloud)     |
| 🧠 User Sessions         | Profile-aware, permission-based access                                   |
| 🧑‍💻 Monaco Editor        | Built-in Monaco editor for developers (themes, layouts, code overrides)   |
| 🔌 Plugin Zones          | Extension and app injection support via manifest files                   |

---

## 📦 App Manifest Format

Each app that runs inside the citrusOS shell must export a manifest:

```ts
export const kiwiAppManifest = {
  id: "posts",
  name: "Posts",
  icon: "/icons/posts.svg",
  component: PostsApp,
  permissions: ["read:posts", "write:posts"],
};
```

---

## 📁 File Structure (WIP)

```bash

kiwi_admin/
├── core/              # Shell & workspace logic
├── apps/              # Bundled apps (Posts, Pages, Media, etc.)
├── windows/           # Window manager and panel logic
├── monaco/            # Dev tools + code editor
├── plugins/           # Drop-in app/module system
├── assets/
└── index.tsx
```

## 🔮 Roadmap

### MVP

- [x] Desktop icon launcher
- [x] App manifest loader
- [ ] Window manager (open, drag, resize, close)
- [ ] Dock/taskbar with running apps
- [ ] Monaco-powered editor app
- [ ] User settings panel
- [ ] Workspace persistence (layout, theme, open apps)

### Future

- [ ] Theme editor UI
- [ ] Drag-and-drop file manager (like Figma or VS Code)
- [ ] Notification/event center
- [ ] App store with installable modules
- [ ] Multi-tenant admin switching

---

## 🛠️ Development

```bash
git clone https://github.com/citrusworx/kiwi_admin
cd kiwi_admin
pnpm install
pnpm dev
```

---

## 🧠 Part of the Kiwi Engine Ecosystem

- [`kiwi_engine`](https://github.com/citrusworx/kiwi_engine) — Core modular engine
- [`kiwi_cms`](https://github.com/citrusworx/kiwi_cms) — Headless CMS app
- [`kiwi_press`](https://github.com/citrusworx/kiwi_press) — Modern WordPress-compatible front-end
- [`sugar`](https://github.com/citrusworx/sugar) — Visual page & app builder
- [`grapevine`](https://github.com/citrusworx/grapevine) — Infrastructure-as-Code library
- [`nectarine`](https://github.com/citrusworx/nectarine) — YAML-based DB/API layer

---

## 🙏 Contributing

Contributions, ideas, and modules welcome!
This project is open-source and fueled by the community.

> Support the vision of a truly modular, open web by contributing or donating to [Citrusworx](https://github.com/sponsors/citrusworx)

---

## 🧃 citrusOS — The Modular Web Operating System

This is just the beginning. 🍋

Let me know if you'd like:

- A matching `CONTRIBUTING.md`
- A project board to track citrusOS features
- An actual implementation scaffold of the **App Loader** or **Window Manager**

This is where things get real.
