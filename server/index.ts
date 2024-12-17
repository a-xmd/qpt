import { handle } from "./tmp-article.ts";

Bun.serve({
  port: 6002,
  fetch(req) {
    const path = new URL(req.url).pathname;
    if (path.startsWith("/article")) {
      return handle(req);
    }
    console.log({ path });
    return new Response("Page not found", { status: 404 });
  },
});
