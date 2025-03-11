// import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";

// export default defineWorkersConfig({
//   test: {
//     workspace: ["examples/*"],
//     poolOptions: {
//       workers: {
//         wrangler: { configPath: "./examples/playground/wrangler.jsonc" },
//       },
//     },
//   },
// });

import { defineConfig, defineWorkspace } from "vitest/config";
import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";

export default defineWorkspace([
  defineConfig({
    test: {
      name: "agents",
      include: ["packages/agents/**/*.spec.ts"],
    },
  }),

  // defineWorkersConfig({
  //   test: {
  //     name: "agents",
  //     include: ["packages/agents/**/*.spec.ts"],
  //     poolOptions: {
  //       workers: {
  //         wrangler: { configPath: "./packages/agents/test-wrangler.jsonc" },
  //       },
  //     },
  //   },
  // }),
]);
