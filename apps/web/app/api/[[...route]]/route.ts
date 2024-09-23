import { Hono } from "hono";
import { handle } from "hono/vercel";
import instagram from "./auth/facebook";

export type Env = {
  AUTH_SECRET: string;
  AUTH_GOOGLE_ID: string;
  AUTH_GOOGLE_SECRET: string;
  AUTH_FACEBOOK_ID: string;
  AUTH_FACEBOOK_SECRET: string;
  AUTH_INSTAGRAM_ID: string;
  AUTH_INSTAGRAM_SECRET: string;
  FACEBOOK_CONFIG_ID: string;
  NEXT_PUBLIC_ROOT_DOMAIN: string;
  NEXT_PUBLIC_URL: string;
  DATABASE_URL: string;
  DATABASE_AUTH_TOKEN: string;
  NODE_ENV: string;
  NEXT_PUBLIC_FAST_MODE: string;
  NEXT_PUBLIC_API_URL: string;
};

const app = new Hono<{ Bindings: Env }>().basePath("/api");

app.route("/auth", instagram);

app.get("/", (c) => {
  return c.text("Hello, world!");
});

export const GET = handle(app);
export const POST = handle(app);
export const DELETE = handle(app);
export const PUT = handle(app);

export default app as never;
