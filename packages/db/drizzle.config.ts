import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({
  path: ".dev.vars",
});

console.log(
  "DATABASE_URL 2",
  process.env.DATABASE_URL,
  process.env.DATABASE_AUTH_TOKEN,
);

if (!process.env.DATABASE_URL || !process.env.DATABASE_AUTH_TOKEN) {
  throw new Error("DATABASE_URL or DATABASE_AUTH_TOKEN not set");
}

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
});
