-- AlterTable
ALTER TABLE `users` MODIFY `status` ENUM('pending', 'active', 'rejected', 'inactive') NOT NULL DEFAULT 'pending';
