-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2023 at 09:18 PM
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
-- Table structure for table `alumini`
--

CREATE TABLE `alumini` (
  `alumini_id` int(11) NOT NULL,
  `user_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `alumini_detail`
--

CREATE TABLE `alumini_detail` (
  `id` int(11) NOT NULL,
  `alumini_id` int(11) NOT NULL,
  `previous_company` varchar(50) NOT NULL,
  `resume_url` varchar(50) NOT NULL,
  `linkedin_user_name` varchar(20) NOT NULL,
  `github_user_name` varchar(20) NOT NULL,
  `portfolio_url` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `news_detail` varchar(200) NOT NULL,
  `news_date` date NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `course` varchar(10) NOT NULL,
  `semester` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`news_id`, `news_tittle`, `news_detail`, `news_date`, `user_id`, `course`, `semester`) VALUES
(1, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-27', 'dx1800304', 'MCA', 'I'),
(2, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-27', 'dx1800304', 'MCA', 'IV'),
(3, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-27', 'dx1800304', 'MCA', 'I'),
(4, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-27', 'dx1800304', 'MCA', 'I'),
(5, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-27', 'dx1800304', 'MCA', 'I'),
(6, 'class time change', 'dsa class time change 1pm to 3pm', '2023-05-27', 'dx1800304', 'MCA', 'IV'),
(7, 'Internal postponed', 'The Java internal has been postponed, they will inform about the new date later.', '2023-05-27', 'dx1800304', 'MCA', 'IV'),
(8, 'assignment notification', 'You are notified to please bring your Data Structures and Algorithms assignment today as it is the last day of submission', '2023-05-27', 'dx1800304', 'MCA', 'IV'),
(9, 'project submission date change', 'project submission date change 3 may to 5 may', '2023-05-27', 'dx1800304', 'MSC', 'IV'),
(11, 'tittle', 'desc', '2023-05-27', 'dx1800304', 'M.Tech', 'II');

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `file_name` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `media_type` varchar(20) NOT NULL,
  `file_path` varchar(50) NOT NULL,
  `subject` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `user_id`, `file_name`, `description`, `media_type`, `file_path`, `subject`) VALUES
(21, 'dx1800304', '2023-05-26 at 11.30.49.613_IMG_4080.JPG', 'Er model and basic SQL query pdf and ER model questions', 'image/jpeg', 'notes//MCA/IV', 'DBMS'),
(22, 'dx1800304', '2023-05-26 at 22.15.00.541_IMG_4089.JPG', 'Notes of stack and queue implementation through array and linkedlist', 'image/jpeg', 'notes//MCA/IV', 'DSA'),
(23, 'dx1800304', '2023-05-26 at 22.22.06.102_IMG_4090.JPG', 'All types of numerial notes', 'image/jpeg', 'notes//MCA/IV', 'OS');

-- --------------------------------------------------------

--
-- Table structure for table `subject_news`
--

CREATE TABLE `subject_news` (
  `subject_name` varchar(30) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `subject_news_detail` varchar(100) NOT NULL,
  `id` int(11) NOT NULL,
  `course` varchar(10) NOT NULL,
  `semester` varchar(5) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumini`
--
ALTER TABLE `alumini`
  ADD PRIMARY KEY (`alumini_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `alumini_detail`
--
ALTER TABLE `alumini_detail`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alumini_id` (`alumini_id`);

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
-- Indexes for table `subject_news`
--
ALTER TABLE `subject_news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id_subject` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alumini`
--
ALTER TABLE `alumini`
  MODIFY `alumini_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `alumini_detail`
--
ALTER TABLE `alumini_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `subject_news`
--
ALTER TABLE `subject_news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alumini`
--
ALTER TABLE `alumini`
  ADD CONSTRAINT `alumini_user_id` FOREIGN KEY (`user_id`) REFERENCES `college_user` (`enrollment_no`);

--
-- Constraints for table `alumini_detail`
--
ALTER TABLE `alumini_detail`
  ADD CONSTRAINT `alumini_detail_ibfk_1` FOREIGN KEY (`alumini_id`) REFERENCES `alumini` (`alumini_id`);

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

--
-- Constraints for table `subject_news`
--
ALTER TABLE `subject_news`
  ADD CONSTRAINT `user_id_subject` FOREIGN KEY (`user_id`) REFERENCES `college_user` (`enrollment_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
