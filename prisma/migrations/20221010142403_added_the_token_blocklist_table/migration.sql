-- CreateTable
CREATE TABLE "tokenBlocklist" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "tokenBlocklist_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tokenBlocklist_token_key" ON "tokenBlocklist"("token");
