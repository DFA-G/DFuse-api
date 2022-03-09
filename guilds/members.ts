import { Router } from "../deps.ts";

const MEMBERS_ROUTER = new Router({
  prefix: "/members",
  methods: ["GET", "PATCH", "DELETE"],
});

MEMBERS_ROUTER.get("/", (_) => {
  // 1. Fetch all members
  // 2. Send everything back
});

MEMBERS_ROUTER.get("/:memberID", (_) => {
  // 1. Fetch member
  // 2. If member does not exist. Send 400
  // 3. Else send back with 200
});

MEMBERS_ROUTER.patch("/:memberID", (_) => {
  // 1. Check if user is the member aswell or guild owner
  // 2. Make changes
});

MEMBERS_ROUTER.delete("/:memberID", (_) => {
    // 1. Check if user is guild owner
    // 2. If not send back 400
    // 3. Else kick member
})

export { MEMBERS_ROUTER };
