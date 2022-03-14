import { Application } from "./deps.ts";
import { GUILDS_ROUTER } from "./guilds/mod.ts";
import { createLogger } from "./logger.ts";

const LOGGER = createLogger("http");

const app = new Application({ contextState: "alias", state: {} });

// If this happens then we are genuinely fucked.
app.addEventListener("error", (x) => {
  LOGGER.critical(`${x.error} -- ${x.message}`);
});

app.use(async (ctx, next) => {
  const method = ctx.request.method.toUpperCase();
  const { ip } = ctx.request;
  const { url } = ctx.request.originalRequest;
  const requestID = crypto.randomUUID().substring(0, 8);

  LOGGER.info(
    `New ${method} request from ${ip} with id(${requestID}) to route ${url}`,
  );

  await next();
});

// TODO: Auth middleware

app.use(GUILDS_ROUTER.allowedMethods());
app.use(GUILDS_ROUTER.routes());
LOGGER.info("HTTP Server started on port: 8000");
await app.listen({ port: 8000 });
