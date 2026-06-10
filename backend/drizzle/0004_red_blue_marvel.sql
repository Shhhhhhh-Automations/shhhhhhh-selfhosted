CREATE TABLE `sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`device` text DEFAULT 'Unknown Device' NOT NULL,
	`ip_address` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`last_active_at` text DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
