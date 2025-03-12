import { Agent, routeAgentRequest } from "./index";

export class IntelligentTestAgent extends Agent<Env> {
  async onRequest(request: Request) {
    // Transform intention into response
    console.log("onRequest", request.url);
    return new Response("Ready to assist.");
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return (
      (await routeAgentRequest(request, env)) ||
      new Response("Not found", { status: 404 })
    );
  },
} satisfies ExportedHandler<Env>;
