ALTER TABLE "auth"."user" RENAME TO "users";
--> statement-breakpoint
ALTER TABLE "auth"."session" RENAME TO "sessions";
--> statement-breakpoint
ALTER TABLE "auth"."account" RENAME TO "accounts";
--> statement-breakpoint
ALTER TABLE "auth"."verification" RENAME TO "verifications";
--> statement-breakpoint
ALTER INDEX "auth"."session_user_id_idx" RENAME TO "sessions_user_id_idx";
--> statement-breakpoint
ALTER INDEX "auth"."session_token_idx" RENAME TO "sessions_token_idx";
--> statement-breakpoint
ALTER INDEX "auth"."account_user_id_idx" RENAME TO "accounts_user_id_idx";
--> statement-breakpoint
ALTER INDEX "auth"."verification_identifier_idx" RENAME TO "verifications_identifier_idx";
--> statement-breakpoint
ALTER TABLE "auth"."users" RENAME CONSTRAINT "user_email_unique" TO "users_email_unique";
--> statement-breakpoint
ALTER TABLE "auth"."sessions" RENAME CONSTRAINT "session_token_unique" TO "sessions_token_unique";
