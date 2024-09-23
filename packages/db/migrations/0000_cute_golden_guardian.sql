CREATE TABLE `daily_insight` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`comments_count` integer NOT NULL,
	`story_replies_count` integer NOT NULL,
	`direct_messages_count` integer NOT NULL,
	`story_mentions_count` integer NOT NULL,
	`created_at` text,
	`updated_at` text,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`image` text,
	`email` text,
	`instagram_business_account_id` text,
	`instagram_page_name` text,
	`access_token` text,
	`access_token_expires` text,
	`created_at` text,
	`updated_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `daily_insight_user_id_unique` ON `daily_insight` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_instagram_business_account_id_unique` ON `user` (`instagram_business_account_id`);