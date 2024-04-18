/*
  Warnings:

  - You are about to drop the column `itemId` on the `AUCTION` table. All the data in the column will be lost.
  - You are about to drop the `ITEM` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `AUCTION` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `AUCTION` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxPrice` to the `AUCTION` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `AUCTION` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `AUCTION` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startingPrice` to the `AUCTION` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AUCTION" DROP COLUMN "itemId",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "maxPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "startingPrice" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "ITEM";

-- DropEnum
DROP TYPE "Category";
