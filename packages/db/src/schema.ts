import { time } from "console";
import { relations } from "drizzle-orm";
import {
  text,
  integer,
  sqliteTable,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image"),
  email: text("email"),
  instagramBusinessAccountId: text("instagram_business_account_id").unique(),
  instagramPageName: text("instagram_page_name"),
  accessToken: text("access_token"),
  accessTokenExpires: text("access_token_expires"),
  createdAt: text("created_at"),
  updatedAt: text("updated_at"),
});

export const sessionTable = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: text("expires_at").notNull(),
});

export const DailyInsight = sqliteTable("daily_insight", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id)
    .unique(),
  commentsCount: integer("comments_count").notNull(),
  storyRepliesCount: integer("story_replies_count").notNull(),
  directMessagesCount: integer("direct_messages_count").notNull(),
  storyMentionsCount: integer("story_mentions_count").notNull(),
  createdAt: text("created_at"),
  updatedAt: text("updated_at"),
});
