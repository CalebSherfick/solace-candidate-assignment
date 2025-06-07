ALTER TABLE "advocates" RENAME COLUMN "payload" TO "specialties";--> statement-breakpoint
ALTER TABLE "advocates" ALTER COLUMN "phone_number" SET DATA TYPE text;