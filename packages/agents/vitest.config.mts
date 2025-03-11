import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";
import path from "node:path";

// Ensure the config path is a string
const configPath = path.resolve(__dirname, "test-wrangler.jsonc");

export default defineWorkersConfig({
  test: {
    poolOptions: {
      workers: {
        wrangler: { configPath },
      },
    },
  },
});
