import { Hono } from "hono";
import { handle } from "hono/vercel";
import instagram from "./auth/facebook";
export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/auth", instagram);

app.get("/", (c) => {
  return c.text("Hello, world!");
});

export const GET = handle(app);
export const POST = handle(app);
export const DELETE = handle(app);
export const PUT = handle(app);

export default app as never;
