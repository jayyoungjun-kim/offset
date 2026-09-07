CREATE TABLE `audit_log` (
	`id` text PRIMARY KEY NOT NULL,
	`actor` text NOT NULL,
	`action` text NOT NULL,
	`entity_id` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `content_pages` (
	`id` text PRIMARY KEY NOT NULL,
	`type` text NOT NULL,
	`status` text NOT NULL,
	`data` text NOT NULL,
	`updated_at` text NOT NULL,
	CONSTRAINT "content_type" CHECK("content_pages"."type" in ('home','about','notice')),
	CONSTRAINT "content_status" CHECK("content_pages"."status" in ('draft','published'))
);
--> statement-breakpoint
CREATE TABLE `enrollments` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`program_id` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`motivation` text NOT NULL,
	`portfolio` text NOT NULL,
	`status` text DEFAULT 'submitted' NOT NULL,
	`consent_version` text NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`program_id`) REFERENCES `programs`(`id`) ON UPDATE no action ON DELETE no action,
	CONSTRAINT "enrollment_status" CHECK("enrollments"."status" in ('submitted','reviewing','accepted','declined','cancelled'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `enrollments_user_program` ON `enrollments` (`user_id`,`program_id`);--> statement-breakpoint
CREATE TABLE `oauth_flows` (
	`state_hash` text PRIMARY KEY NOT NULL,
	`verifier` text NOT NULL,
	`return_to` text NOT NULL,
	`expires_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `programs` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`status` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`data` text NOT NULL,
	CONSTRAINT "program_status" CHECK("programs"."status" in ('draft','open','closed'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `programs_slug_unique` ON `programs` (`slug`);--> statement-breakpoint
CREATE TABLE `sessions` (
	`token_hash` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `sessions_expiry` ON `sessions` (`expires_at`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`created_at` text NOT NULL
);
