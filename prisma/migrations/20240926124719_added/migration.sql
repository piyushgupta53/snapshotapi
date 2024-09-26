/*
  Warnings:

  - Added the required column `s3Url` to the `Screenshot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screenshot" ADD COLUMN     "s3Url" TEXT NOT NULL;
