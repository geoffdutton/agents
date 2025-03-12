// file: /Users/geoff/code/agents/vitest.config.ts

import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";
import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

// current: /Users/geoff/code/agents/packages/agents
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
// current:/Users/geoff/code/agents
const workspaceRoot = path.resolve(repoRoot, "packages", "agents");

import { resolve as patheResolve } from "pathe";

console.log("repoRoot:", repoRoot);
console.log("workspaceRoot:", workspaceRoot);
console.log("patheResolve(process.cwd()):", patheResolve(process.cwd()));
console.log("Test file:", patheResolve(workspaceRoot, "test/basic.spec.ts"));

// This works fine

// export default defineConfig({
//   test: {
//     root: repoRoot,
//     include: [path.resolve(workspaceRoot, "test/basic.spec.ts")],
//   },
// });

/** 
Error:

Vitest caught 1 unhandled error during the test run.
This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Error ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
TypeError: input.replace is not a function
 ❯ normalizeWindowsPath Users/geoff/code/agents/node_modules/pathe/dist/shared/pathe.ff20891b.mjs:6:16

Notice how "Users/geoff/.." doesn't start with a "/" like "/Users/geoff/..", so it's not being interpreted as an absolute path.
 */

export default defineWorkersConfig({
  test: {
    include: ["packages/agents/test/*.spec.ts"],
    poolOptions: {
      workers: {
        main: "packages/agents/src/server-for-check.ts",
        singleWorker: true,
        miniflare: {
          main: "packages/agents/src/server-for-check.ts",
          compatibilityDate: "2025-03-10",
        },
      },
    },
  },
});
