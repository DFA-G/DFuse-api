import { Router } from "../deps.ts";

const INVITES_ROUTER = new Router({
  prefix: "/invites",
  methods: ["GET", "POST", "DELETE"],
});

INVITES_ROUTER.get("/", () => {
  // Get all invite links of the guild
});

INVITES_ROUTER.post("/", () => {
  // Create a new invite link when provided with following payload `{ uses: number, expire_time: number }`
});

INVITES_ROUTER.delete("/", () => {
  // Delete all invite links.
});

INVITES_ROUTER.delete("/:id", () => {
  // Delete specific invite link with code `id`
});

export { INVITES_ROUTER };
