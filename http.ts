import { Application } from "./deps.ts";
import { GUILDS_ROUTER } from "./guilds/mod.ts";

const app = new Application({ contextState: "alias", state: {} });

// TODO: Logging middleware
// TODO: Error handling middleware
// TODO: Auth middleware

app.use(GUILDS_ROUTER.allowedMethods());
app.use(GUILDS_ROUTER.routes());

await app.listen({ port: 8000 });
