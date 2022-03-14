import { gateway as _, http } from "./config.json" assert { type: "json" };

const MESSAGE_CHANNEL = new MessageChannel();

const HTTP_WORKER = new Worker(new URL("http.ts", import.meta.url), {
  type: "module",
  name: "HTTP Worker",
  deno: http,
});

HTTP_WORKER.postMessage(MESSAGE_CHANNEL.port1, [MESSAGE_CHANNEL.port1]);

// const GATEWAY_WORKER = new Worker(new URL("gateway.ts", import.meta.url), {
//   type: "module",
//   name: "GATEWAY Worker",
//   deno: gateway,
// });
