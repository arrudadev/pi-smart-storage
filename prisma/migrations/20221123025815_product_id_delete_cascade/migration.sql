-- DropForeignKey
ALTER TABLE `Movements` DROP FOREIGN KEY `Movements_productId_fkey`;

-- AddForeignKey
ALTER TABLE `Movements` ADD CONSTRAINT `Movements_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
