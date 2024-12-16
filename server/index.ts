Bun.serve({
  port: 6002,
  fetch() {
    return new Response("Hello!");
  },
});
