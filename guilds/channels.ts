import { Router } from "../deps.ts";

const CHANNELS_ROUTER = new Router({
  prefix: "/channels",
  methods: ["GET", "POST", "PATCH", "DELETE"],
});

CHANNELS_ROUTER.get("/", (_) => {
  // Get all channels that are in `ctx.params.guildID`
});

CHANNELS_ROUTER.post("/", (_) => {
  // 1. Parse body
  // 2. Create new Channel with settings
  // 3. Add to db
  // 4. Send snowflake and 200 back
});

CHANNELS_ROUTER.get("/:channelID", (_) => {
  // Get channel `ctx.params.channelID` from `ctx.params.guildID`
});

CHANNELS_ROUTER.patch("/:channelID", (_) => {
  // 1. Parse body
  // 2. Change channel specific settings
  // 3. Notify gateway in some way???
});

CHANNELS_ROUTER.delete("/:channelID", (_) => {
  // 1. check if token is from the guild owner
  // 2. if not send 400 back
  // 3. else delete channel and all it's messages from DB
});

CHANNELS_ROUTER.get("/:channelID/messages", (ctx) => {
  const _messageCount = ctx.request.url.searchParams.get("count") ?? 100;
  // 1. Get last 100 messages from DB
  // 2. Send back as JSON array
});

CHANNELS_ROUTER.get("/:channelID/messages", (ctx) => {
  const _messageCount = ctx.request.url.searchParams.get("count") ?? 100;
  // 1. Check if user is the guild owner
  // 2. If they're not. Send 400 back
  // 3. Else delete message and send back 200 Ok
});

CHANNELS_ROUTER.delete("/:channelID/messages/:messageID", (_) => {
  // 1. Check if user is the message "owner" or guild owner
  // 2. If they're not. Send 400 back
  // 3. Else delete message and send back 200 Ok
});

export { CHANNELS_ROUTER };
