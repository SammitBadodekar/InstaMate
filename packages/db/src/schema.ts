import { relations } from "drizzle-orm";
import {
  serial,
  text,
  timestamp,
  integer,
  pgTable,
  uuid,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image"),
  email: text("email"),
  instagramBusinessAccountId: text("instagram_business_account_id").unique(),
  instagramPageName: text("instagram_page_name"),
  accessToken: text("access_token"),
  accessTokenExpires: timestamp("access_token_expires", {
    withTimezone: true,
    mode: "date",
  }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const DailyInsight = pgTable("daily_insight", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id)
    .unique(),
  commentsCount: integer("comments_count").notNull(),
  storyRepliesCount: integer("story_replies_count").notNull(),
  directMessagesCount: integer("direct_messages_count").notNull(),
  storyMentionsCount: integer("story_mentions_count").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
