import { defineConfig } from "@trigger.dev/sdk";

export default defineConfig({
  // Replace with your project ref from the Trigger.dev dashboard (e.g. "proj_abc123").
  // You get this after running `npx trigger.dev@latest login` and selecting/creating a project.
  project: "<your-project-ref>",
  dirs: ["./src/trigger"],
  retries: {
    enabledInDev: false,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1000,
      maxTimeoutInMs: 10000,
      factor: 2,
      randomize: true,
    },
  },
  maxDuration: 3600,
});
