import { Router } from "../deps.ts";
import { CHANNELS_ROUTER } from "./channels.ts";
import { MEMBERS_ROUTER } from "./members.ts";
// import { INVITES_ROUTER } from "./invites.ts";

const GUILDS_ROUTER = new Router({ prefix: "/guilds/:guildID" });

// TODO: Middleware to check if a user is even in this guild

GUILDS_ROUTER.use(CHANNELS_ROUTER.allowedMethods());
GUILDS_ROUTER.use(CHANNELS_ROUTER.routes());
GUILDS_ROUTER.use(MEMBERS_ROUTER.allowedMethods());
GUILDS_ROUTER.use(MEMBERS_ROUTER.routes());

export { GUILDS_ROUTER };
