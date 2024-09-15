import { defineConfig } from "drizzle-kit";

console.log("DATABASE_URL 2", process.env.DATABASE_URL);
export default defineConfig({
  schema: "./src/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
