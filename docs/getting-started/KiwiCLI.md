# 🧪 KiwiCLI Overview

There are many things you can accomplish with the CLI. It is the **preferred method** of starting any project in the Kiwi ecosystem.

---

## 🚀 `kiwi start --service {module}`

Starts a specific Kiwi module as a background service.

```bash
kiwi start --service kiwipress
```

- Boots up the specified module (e.g., kiwipress, kiwishop).

- Logs are written to `.kiwi/logs/{module}.log`.

- Service runs in a managed child process.

---

## 🛑 `kiwi stop --service {module}`

Stops a running Kiwi module.

```bash
kiwi stop --service kiwipress
```

- Sends a graceful shutdown signal.

- Logs the stop event in the same `.kiwi/logs` folder.

---

## 📡 `kiwi status`

Displays the status of all managed Kiwi modules.

```bash
kiwi status
```

- Shows running/stopped state

- Shows port, PID, uptime, etc.

---

### 📜 `kiwi logs`

Tails logs from all running modules.

```bash
kiwi logs
```

- Defaults to real-time view (`tail -f` style)

- Add `--service` to filter:

```bash
kiwi logs --service kiwipress
```

---

### 🌱 `kiwi init`

Scaffolds a new Kiwi Engine project.

```bash
kiwi init
```

- Interactive mode: pick stack, flavor, and modules

---

### 🖥️ `kiwi init --gui`

Launches the Sugar visual editor to create your app via drag-and-drop.

```bash
kiwi init --gui
```

- Requires Sugar to be installed

- Opens the GUI for visual project generation

---

### ☁️ `kiwi deploy --aws path/to/config.yaml`

Deploys your project using AWS infrastructure defined in a config file.

```bash
kiwi deploy --aws config/prod.yaml
```

- Uses GrapeVine to provision infrastructure

- Deploys the build artifact or container

- Supports profiles: dev/stage/prod

---

### ❓ `kiwi help`

Displays the help menu and command usage.

```bash
kiwi help
```

---

## 🧠 Project & App Lifecycle

### `kiwi upgrade`

Upgrade Kiwi Engine and/or installed modules.

```bash
kiwi upgrade
kiwi upgrade --module nectar
```

---

### `kiwi clean`

Removes build artifacts and resets temp state.

```bash
kiwi clean
```

---

### `kiwi config`

Edit or display current `kiwi.config.yaml`.

```bash
kiwi config edit
kiwi config show
```

---

### `kiwi reset`

Hard reset to a fresh state (ask for confirmation).

```bash
kiwi reset
```

---

## 🧩 Module Management

### `kiwi modules`

Lists all official and installed modules.

```bash
kiwi modules
kiwi modules --installed
```

---

### `kiwi search <keyword>`

Searches the module/plugin/theme registry.

```bash
kiwi search ecommerce
```

---

### `kiwi remove <module>`

Uninstalls a module from your project.

```bash
kiwi remove kiwipress
```

---

### `kiwi link`

Links a local module for development.

```bash
kiwi link ../my-custom-module
```

---

## ⚙️ Development Tools

### `kiwi devtools`

Launches a diagnostics dashboard (text-based or TUI).

```bash
kiwi devtools
```

---

### `kiwi debug`

Starts in verbose debug mode.

```bash
kiwi debug --service kiwipress
```

---

### `kiwi analyze`

Analyze project size, performance, and config health.

```bash
kiwi analyze
```

---

## 🚀 Deployment & Ops

### `kiwi deploy --local`

Deploys to a local container stack (Docker, Podman, etc.)

```bash
kiwi deploy --local
```

---

### `kiwi rollback`

Rolls back to the last successful deployment.

```bash
kiwi rollback
```

---

### `kiwi snapshot`

Creates a versioned snapshot of the current state.

```bash
kiwi snapshot create
kiwi snapshot list
```

---

## 🧪 Testing & QA

### `kiwi test`

Runs project/module-level tests.

```bash
kiwi test
kiwi test --watch
```

---

### `kiwi lint`

Runs lint checks (configurable by flavor).

```bash
kiwi lint
```

---

## 🧙 Wizard Mode

### `kiwi wizard`

Launches a full interactive setup experience.

```bash
kiwi wizard
```

---

Want to pick a few of these to fully spec out next in the docs?
