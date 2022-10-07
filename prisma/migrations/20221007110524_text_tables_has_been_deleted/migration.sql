/*
  Warnings:

  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `articlesCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `news` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `newsCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userArticles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userNews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "articles" DROP CONSTRAINT "articles_fk0";

-- DropForeignKey
ALTER TABLE "news" DROP CONSTRAINT "news_fk0";

-- DropForeignKey
ALTER TABLE "userArticles" DROP CONSTRAINT "userArticles_fk0";

-- DropForeignKey
ALTER TABLE "userArticles" DROP CONSTRAINT "userArticles_fk1";

-- DropForeignKey
ALTER TABLE "userNews" DROP CONSTRAINT "userNews_fk0";

-- DropForeignKey
ALTER TABLE "userNews" DROP CONSTRAINT "userNews_fk1";

-- DropTable
DROP TABLE "articles";

-- DropTable
DROP TABLE "articlesCategory";

-- DropTable
DROP TABLE "news";

-- DropTable
DROP TABLE "newsCategory";

-- DropTable
DROP TABLE "userArticles";

-- DropTable
DROP TABLE "userNews";
