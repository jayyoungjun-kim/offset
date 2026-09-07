import { writeFileSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { seedPrograms } from "../app/lib/program-data.ts";
const quote = (v) => "'" + String(v).replaceAll("'", "''") + "'";
mkdirSync(".wrangler", { recursive: true });
const sql = seedPrograms
  .map(
    (p) =>
      `INSERT OR IGNORE INTO programs(id,slug,status,sort_order,data) VALUES(${[p.id, p.slug, p.status, p.order, JSON.stringify(p)].map(quote).join(",")});`,
  )
  .join("\n");
writeFileSync(".wrangler/seed.sql", sql);
const result = spawnSync(
  "node_modules/.bin/wrangler",
  [
    "d1",
    "execute",
    "DB",
    "--local",
    "--config",
    "wrangler.local.json",
    "--file",
    ".wrangler/seed.sql",
  ],
  { stdio: "inherit" },
);
process.exit(result.status ?? 1);
