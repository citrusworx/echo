# 📘 Kiwi Engine Dev Environment

Welcome to the **Kiwi Engine** development stack — a modular, containerized platform built for modern, scalable app architecture. This setup includes services for front-end rendering, API logic, theme/plugin registries, admin tools, and more.

---

## 🧱 Architecture Overview

| Service        | Role                                         | URL (via Traefik)                                        |
| -------------- | -------------------------------------------- | -------------------------------------------------------- |
| `traefik`      | Reverse proxy + SSL routing                  | [http://localhost](http://localhost), HTTPS              |
| `verdaccio`    | Private npm/yarn package registry            | [http://registry.echo.local](http://registry.echo.local) |
| `echo_minio`   | Object storage for themes/plugins (S3-style) | [http://minio.echo.local](http://minio.echo.local)       |
| `echodb`       | PostgreSQL database                          | Internal only                                            |
| `echo_redis`   | Redis cache                                  | Internal only                                            |
| `echo_ui`      | SSR Frontend renderer (Nunjucks, Express)    | [http://www.echo.local](http://www.echo.local)           |
| `echo_api`     | API backend (Nectarine, GraphQL/REST)        | [http://api.echo.local](http://api.echo.local)           |
| `echo_admin`   | Admin panel GUI (WordPress-style)            | [http://admin.echo.local](http://admin.echo.local)       |
| `echo_billing` | Billing microservice                         | [http://billing.echo.local](http://billing.echo.local)   |
| `echo_docs`    | Developer documentation interface            | [http://docs.echo.local](http://docs.echo.local)         |

---

## 🚀 Quick Start

### 1. Clone the Repo

```bash
git clone https://github.com/citrusworx/echo.git
cd echo
```

### 2. Start Everything

```bash
docker-compose up --build -d
```

### 3. View Services

* Main Site: [http://www.echo.local](http://www.echo.local)
* Admin: [http://admin.echo.local](http://admin.echo.local)
* API: [http://api.echo.local](http://api.echo.local)
* Registry: [http://registry.echo.local](http://registry.echo.local)
* Object Storage: [http://minio.echo.local](http://minio.echo.local)
* Docs: [http://docs.echo.local](http://docs.echo.local)

> SSL is auto-managed by Traefik via Let’s Encrypt.

---

## 🔁 Common Dev Commands

Create a `Makefile` for these:

```makefile
up:
docker-compose up --build -d

down:
docker-compose down

rebuild:
docker-compose build --no-cache

logs:
docker-compose logs -f

restart:
docker-compose restart

ps:
docker-compose ps
```

Then you can use:

```bash
make up       # Start stack
make rebuild  # Rebuild all
make logs     # Tail logs
```

---

## 📦 Registry & Themes

* **Verdaccio** serves plugins/extensions via `yarn add @kiwipress/plugin-seo`
* **MinIO** stores downloadable `.zip` files for themes, widgets, and blocks
* Theme manifests live in `theme.yaml` and are parsed at runtime

---

## 🔐 Credentials

| Service  | Username | Password     |
| -------- | -------- | ------------ |
| MinIO    | admin    | supersecure  |
| Postgres | echouser | 3ch0n3t0933! |

> Replace these with `.env`-driven secrets in production.

---

## 📌 Notes

* All services share a `echonet` Docker bridge network.
* You can use hostnames like `echo_api:3001` or `echo_minio:9000` internally.
* Volumes persist data between restarts.

---

## 🤝 Contributing

1. Fork the repo
2. Add features or services
3. PR to main branch
4. Include `docker-compose.override.yml` if adding custom services
