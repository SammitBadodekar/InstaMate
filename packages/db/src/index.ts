import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export const buildLibsqlClient = (
  DATABASE_URL: string,
  DATABASE_AUTH_TOKEN: string,
) => {
  const client = createClient({
    url: DATABASE_URL,
    authToken: DATABASE_AUTH_TOKEN,
  });
  return drizzle(client);
};

export * from "./schema";
export * from "drizzle-orm";
