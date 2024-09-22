import { Lucia } from "lucia";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { buildLibsqlClient, sessionTable, userTable } from "@instamate/db";

export const getLuciaClient = (
  DATABASE_URL: string,
  DATABASE_AUTH_TOKEN: string,
  NODE_ENV: string,
) => {
  const db = buildLibsqlClient(
    DATABASE_URL as string,
    DATABASE_AUTH_TOKEN as string,
  );
  const adapter = new DrizzleSQLiteAdapter(
    db as any,
    sessionTable as any,
    userTable as any,
  );

  const lucia = new Lucia(adapter, {
    sessionCookie: {
      expires: false,
      attributes: {
        secure: NODE_ENV === "production",
      },
    },
    getUserAttributes: (attributes) => {
      return attributes;
    },
  });
  return lucia;
};

declare module "lucia" {
  interface Register {
    Lucia: Lucia<Record<never, never>, DatabaseUserAttributes>;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  name: string;
  email: string;
  image: string;
  instagramBusinessAccountId: string;
  instagramPageName: string;
  accessToken: string;
}
