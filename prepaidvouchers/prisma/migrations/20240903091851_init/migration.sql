-- CreateTable
CREATE TABLE `PrepaidVouchers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `voucherCode` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `expirationDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PrepaidVouchers_voucherCode_key`(`voucherCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
