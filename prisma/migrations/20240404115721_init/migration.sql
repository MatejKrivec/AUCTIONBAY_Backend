-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ELECTRONICS', 'CLOTHING', 'BOOKS', 'FURNITURE', 'SPORTS', 'OTHER');

-- CreateTable
CREATE TABLE "USER" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "USER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AUCTION" (
    "auctionId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AUCTION_pkey" PRIMARY KEY ("auctionId")
);

-- CreateTable
CREATE TABLE "ITEM" (
    "itemId" SERIAL NOT NULL,
    "sellerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "startingPrice" DOUBLE PRECISION NOT NULL,
    "maxPrice" DOUBLE PRECISION NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "ITEM_pkey" PRIMARY KEY ("itemId")
);

-- CreateTable
CREATE TABLE "BID" (
    "bidId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "auctionId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "bidDateTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BID_pkey" PRIMARY KEY ("bidId")
);

-- CreateIndex
CREATE UNIQUE INDEX "USER_username_key" ON "USER"("username");

-- CreateIndex
CREATE UNIQUE INDEX "USER_email_key" ON "USER"("email");
