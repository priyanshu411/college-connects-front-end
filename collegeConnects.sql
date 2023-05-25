CREATE TABLE `college_connects`.`college_user` ( `enrollment_no` VARCHAR(20) NOT NULL , `user_name` VARCHAR(50) NOT NULL , `email` VARCHAR(50) NOT NULL , `contact_no` VARCHAR(15) NOT NULL , `course` VARCHAR(10) NOT NULL , `semester` VARCHAR(5) NOT NULL , `pass_out_year` VARCHAR(4) NOT NULL , `password` VARCHAR(15) NOT NULL , PRIMARY KEY (`enrollment_no`(20)), UNIQUE (`email`(50))) ENGINE = InnoDB;

ALTER TABLE `college_user` ADD `user_role_id` INT(2) NOT NULL AFTER `email`;
CREATE TABLE `college_connects`.`role` ( `role_id` INT(2) NOT NULL , `role_name` VARCHAR(10) NOT NULL , PRIMARY KEY (`role_id`)) ENGINE = InnoDB;
ALTER TABLE `college_user` ADD CONSTRAINT `role_id` FOREIGN KEY (`user_role_id`) REFERENCES `role`(`role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE `college_connects`.`news` ( `news_id` INT NOT NULL , `news_tittle` VARCHAR(20) NOT NULL , `news_detail` VARCHAR(100) NOT NULL , `news_date` DATE NOT NULL , `user_id` VARCHAR(20) NOT NULL , `course` VARCHAR(10) NOT NULL , `semester` VARCHAR(5) NOT NULL , PRIMARY KEY (`news_id`)) ENGINE = InnoDB;
ALTER TABLE `news` ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `college_user`(`enrollment_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE `college_connects`.`notes` ( `id` INT NOT NULL , `user_id` VARCHAR(20) NOT NULL , `file_name` VARCHAR(20) NOT NULL , `description` VARCHAR(50) NOT NULL , `media_type` VARCHAR(10) NOT NULL , `file_path` INT(20) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
ALTER TABLE `notes` ADD FOREIGN KEY (`user_id`) REFERENCES `college_user`(`enrollment_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `notes` CHANGE `media_type` `media_type` VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;
ALTER TABLE `notes` CHANGE `file_path` `file_path` VARCHAR(50) NOT NULL;
ALTER TABLE `notes` CHANGE `file_name` `file_name` VARCHAR(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;

ALTER TABLE `notes` CHANGE `id` `id` INT(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `notes` CHANGE `file_name` `file_name` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;
ALTER TABLE `news` CHANGE `news_tittle` `news_tittle` VARCHAR(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;