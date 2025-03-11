import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  createExecutionContext,
  env,
  waitOnExecutionContext,
} from "cloudflare:test";

import app from "./server";

describe("agents", () => {
  let ctx: ExecutionContext;
  beforeEach(() => {
    ctx = createExecutionContext();
  });

  it("should be able to handle a request", async () => {
    const request = new Request("https://example.com/");
    const response = await app.fetch(request, env, ctx);

    await waitOnExecutionContext(ctx);
    expect(response.status).toBe(200);
    expect(await response.text()).toBe("Ready to assist.");
  });
});
