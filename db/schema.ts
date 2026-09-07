import {
  sqliteTable,
  text,
  integer,
  index,
  uniqueIndex,
  check,
} from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
export const programs = sqliteTable(
  "programs",
  {
    id: text().primaryKey(),
    slug: text().notNull().unique(),
    status: text().notNull(),
    sort_order: integer().notNull().default(0),
    data: text().notNull(),
  },
  (t) => [
    check("program_status", sql`${t.status} in ('draft','open','closed')`),
  ],
);
export const users = sqliteTable("users", {
  id: text().primaryKey(),
  email: text().notNull(),
  name: text().notNull(),
  created_at: text().notNull(),
});
export const sessions = sqliteTable(
  "sessions",
  {
    token_hash: text().primaryKey(),
    user_id: text()
      .notNull()
      .references(() => users.id),
    expires_at: integer().notNull(),
  },
  (t) => [index("sessions_expiry").on(t.expires_at)],
);
export const oauthFlows = sqliteTable("oauth_flows", {
  state_hash: text().primaryKey(),
  verifier: text().notNull(),
  return_to: text().notNull(),
  expires_at: integer().notNull(),
});
export const enrollments = sqliteTable(
  "enrollments",
  {
    id: text().primaryKey(),
    user_id: text()
      .notNull()
      .references(() => users.id),
    program_id: text()
      .notNull()
      .references(() => programs.id),
    name: text().notNull(),
    email: text().notNull(),
    motivation: text().notNull(),
    portfolio: text().notNull(),
    status: text().notNull().default("submitted"),
    consent_version: text().notNull(),
    created_at: text().notNull(),
  },
  (t) => [
    uniqueIndex("enrollments_user_program").on(t.user_id, t.program_id),
    check(
      "enrollment_status",
      sql`${t.status} in ('submitted','reviewing','accepted','declined','cancelled')`,
    ),
  ],
);
export const contentPages = sqliteTable(
  "content_pages",
  {
    id: text().primaryKey(),
    type: text().notNull(),
    status: text().notNull(),
    data: text().notNull(),
    updated_at: text().notNull(),
  },
  (t) => [
    check("content_type", sql`${t.type} in ('home','about','notice')`),
    check("content_status", sql`${t.status} in ('draft','published')`),
  ],
);
export const auditLog = sqliteTable("audit_log", {
  id: text().primaryKey(),
  actor: text().notNull(),
  action: text().notNull(),
  entity_id: text().notNull(),
  created_at: text().notNull(),
});
