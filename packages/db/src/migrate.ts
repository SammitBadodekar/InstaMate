import path from "path";
import { migrate } from "drizzle-orm/libsql/migrator";
import { config } from "dotenv";
config({
  path: ".dev.vars",
});

import { buildLibsqlClient } from "./index";

(async () => {
  console.log("DATABASE_URL", process.env.DATABASE_URL);
  const db = buildLibsqlClient(
    process.env.DATABASE_URL!,
    process.env.DATABASE_AUTH_TOKEN!,
  );
  console.log("Running migrations ...");
  await migrate(db, {
    migrationsFolder: path.join(__dirname, "../migrations"),
  });
  console.log("Migrations ran successfully.");
})();
