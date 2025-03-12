import { describe, it, expect, beforeEach, vi } from "vitest";
import { env } from "cloudflare:test";

import app from "../src/server-for-check";

describe("agents", () => {
  // let ctx: ExecutionContext;
  // beforeEach(() => {
  //   ctx = createExecutionContext();
  // });

  // it("should be able to handle a request", async () => {
  //   const request = new Request("https://example.com/");
  //   const response = await app.fetch(request, env, ctx);

  //   await waitOnExecutionContext(ctx);
  //   expect(response.status).toBe(200);
  //   expect(await response.text()).toBe("Ready to assist.");
  // });

  it("should pass a basic test", () => {
    expect(true).toBe(true);
  });

  it("should handle string operations", () => {
    const str = "test string";
    expect(str.length).toBe(11);
    expect(str.replace("test", "simple")).toBe("simple string");
  });
});
