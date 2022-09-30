/*
  Warnings:

  - You are about to drop the column `title` on the `articles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tittle]` on the table `articles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tittle` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "articles_title_key";

-- AlterTable
ALTER TABLE "articles" DROP COLUMN "title",
ADD COLUMN     "tittle" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "articles_tittle_key" ON "articles"("tittle");
