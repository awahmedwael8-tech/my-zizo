# my-zizo

Phase 3: Hosting and Deployment — a [Trigger.dev](https://trigger.dev) project for background jobs / scheduled tasks.

## Requirements

- Node.js 18.20+ (this project was set up with Node 24)
- A [Trigger.dev](https://trigger.dev) account

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Authenticate the Trigger.dev CLI (opens your browser):
   ```bash
   npx trigger.dev@latest login
   ```

3. Create/select a project in the dashboard, copy its **project ref**, and paste it
   into `trigger.config.ts` (replace `<your-project-ref>`).

4. Copy the env template and add your DEV secret key from the dashboard:
   ```bash
   cp .env.example .env
   ```

5. Run the local dev server:
   ```bash
   npx trigger.dev@latest dev
   ```

## Project structure

| Path | Purpose |
|------|---------|
| `trigger.config.ts` | Trigger.dev project configuration |
| `src/trigger/` | Task definitions (auto-discovered) |
| `src/trigger/example.ts` | Example `hello-world` task |
| `.env.example` | Template for local environment variables |

## Deploy

```bash
npx trigger.dev@latest deploy
```
