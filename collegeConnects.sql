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



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2023 at 09:36 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `college_connects`
--

-- --------------------------------------------------------

--
-- Table structure for table `college_user`
--

CREATE TABLE `college_user` (
  `enrollment_no` varchar(20) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `contact_no` varchar(15) NOT NULL,
  `course` varchar(10) NOT NULL,
  `semester` varchar(5) NOT NULL,
  `pass_out_year` varchar(4) NOT NULL,
  `password` varchar(15) NOT NULL,
  `user_role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `college_user`
--

INSERT INTO `college_user` (`enrollment_no`, `user_name`, `email`, `contact_no`, `course`, `semester`, `pass_out_year`, `password`, `user_role`) VALUES
('ds1813421', 'nihar ghorse', 'nihar@gmail.com', '1234567890', 'MSC', 'IV', '2023', '12345', 'student'),
('dx1800304', 'priyanshu', 'priyanshug@gmail.com', '7225989749', 'MCA', 'IV', '2023', '12345', 'admin'),
('dx1800305', 'Radhika yadav', 'Radhika@gmail.com', '1234567890', 'MCA', 'IV', '2023', '12345', 'student'),
('dx1800315', 'hariom asati', 'hariom@gmail.com', '1234567890', 'MCA', 'II', '2024', '12345', 'student');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL,
  `news_tittle` varchar(75) NOT NULL,
  `news_detail` varchar(100) NOT NULL,
  `news_date` date NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `course` varchar(10) NOT NULL,
  `semester` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`news_id`, `news_tittle`, `news_detail`, `news_date`, `user_id`, `course`, `semester`) VALUES
(1, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-24', 'dx1800304', 'MCA', 'I'),
(2, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-24', 'dx1800304', 'MCA', 'IV'),
(3, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-25', 'dx1800304', 'MCA', 'I'),
(4, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-25', 'dx1800304', 'MCA', 'I'),
(5, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-25', 'dx1800304', 'MCA', 'I'),
(6, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-25', 'dx1800304', 'MCA', 'IV'),
(7, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-25', 'dx1800304', 'MCA', 'IV'),
(8, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-25', 'dx1800304', 'MCA', 'IV'),
(9, 'project submission date change', 'project submission date change 3 may to 5 may', '2023-05-26', 'dx1800304', 'MSC', 'IV');

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `file_name` varchar(100) NOT NULL,
  `description` varchar(50) NOT NULL,
  `media_type` varchar(20) NOT NULL,
  `file_path` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `user_id`, `file_name`, `description`, `media_type`, `file_path`) VALUES
(7, 'dx1800304', '2023-05-07 at 01.51.27.071_GUNJAN PF.pdf', 'file description', 'application/pdf', 'notes//MCA/IV'),
(8, 'dx1800304', '2023-05-07 at 02.09.53.221_slot-finder.png', 'file description', 'image/png', 'notes//MCA/IV'),
(9, 'dx1800304', '2023-05-20 at 00.12.11.080_IMG_4090.JPG', 'file description', 'image/jpeg', 'notes//MCA/IV'),
(10, 'dx1800304', '2023-05-23 at 23.25.43.812_IMG_4090.JPG', 'file desc', 'image/jpeg', 'notes//MCA/IV'),
(11, 'dx1800304', '2023-05-23 at 23.26.00.086_IMG_4090.JPG', 'file desc', 'image/jpeg', 'notes//MCA/IV'),
(12, 'dx1800304', '2023-05-23 at 23.26.56.870_IMG_4090.JPG', 'file desc', 'image/jpeg', 'notes//MCA/IV'),
(13, 'dx1800304', '2023-05-23 at 23.27.39.069_IMG_4089.JPG', 'ggjhgj', 'image/jpeg', 'notes//MCA/IV'),
(14, 'dx1800305', '2023-05-24 at 00.26.10.845_IMG_4058.JPG', 'file desc', 'image/jpeg', 'notes//MCA/IV'),
(15, 'ds1813421', '2023-05-24 at 21.28.21.582_IMG_4090.JPG', 'nihar ghorse desc', 'image/jpeg', 'notes//MSC/VI'),
(16, 'dx1800304', '2023-05-25 at 01.02.20.135_IMG_4090.JPG', 'temp', 'image/jpeg', 'notes//MCA/IV');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `college_user`
--
ALTER TABLE `college_user`
  ADD PRIMARY KEY (`enrollment_no`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `college_user` (`enrollment_no`);

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `college_user` (`enrollment_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
