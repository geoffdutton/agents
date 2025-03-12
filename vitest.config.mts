// file: /Users/geoff/code/agents/vitest.config.ts
import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// Get the absolute path to the current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the test file path using absolute paths
const testPackagePath = path.join(__dirname, "packages", "tests");
const testFilePath = path.join(testPackagePath, "test", "agent.spec.ts");
const wranglerConfigPath = path.join(testPackagePath, "wrangler.jsonc");

// Log paths for debugging
console.log("__dirname:", __dirname);
console.log("testFilePath:", testFilePath);
console.log("wranglerConfigPath:", wranglerConfigPath);

// Use defineConfig with workers pool
export default defineWorkersConfig({
  test: {
    // Use absolute paths to avoid path normalization issues
    include: [testFilePath],
    poolOptions: {
      workers: {
        singleWorker: true,
        wrangler: {
          configPath: wranglerConfigPath,
        },
      },
    },
  },
});

/**
The original error was:
TypeError: input.replace is not a function
 ❯ normalizeWindowsPath Users/geoff/code/agents/node_modules/pathe/dist/shared/pathe.ff20891b.mjs:6:16

This was happening because some paths didn't have a leading slash.
By using absolute paths with path.join(), we avoid this issue.
*/
