-- MySQL dump 10.13  Distrib 8.0.32, for macos12.6 (x86_64)
--
-- Host: localhost    Database: remo_staging
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assessment_types`
--

DROP TABLE IF EXISTS `assessment_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assessment_types` (
  `assessment_type_id` int NOT NULL AUTO_INCREMENT,
  `table_name` varchar(100) DEFAULT NULL,
  `display_name` varchar(150) DEFAULT NULL,
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`assessment_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `award`
--

DROP TABLE IF EXISTS `award`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `award` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3911 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `award_fields`
--

DROP TABLE IF EXISTS `award_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `award_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(75) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=301 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `book_condition_fields`
--

DROP TABLE IF EXISTS `book_condition_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_condition_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `short_name` varchar(32) NOT NULL,
  `sort` int NOT NULL DEFAULT '0',
  `parent_id` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `book_formats_fields`
--

DROP TABLE IF EXISTS `book_formats_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_formats_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `short_name` varchar(32) NOT NULL,
  `sort` int NOT NULL DEFAULT '0',
  `parent_id` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `book_journal`
--

DROP TABLE IF EXISTS `book_journal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_journal` (
  `journal_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '3',
  `book_id` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `related_id` int DEFAULT NULL,
  `condition_id` int DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT NULL,
  `date_updated` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`journal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10837 DEFAULT CHARSET=utf8mb3 COMMENT='Main Books Database';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `book_publisher`
--

DROP TABLE IF EXISTS `book_publisher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_publisher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7840 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `book_types_fields`
--

DROP TABLE IF EXISTS `book_types_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_types_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `short_name` varchar(32) NOT NULL,
  `sort` int NOT NULL DEFAULT '0',
  `parent_id` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `book_wait_list`
--

DROP TABLE IF EXISTS `book_wait_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_wait_list` (
  `book_wait_list_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '3',
  `user_book_id` int DEFAULT NULL,
  `active` int NOT NULL DEFAULT '1',
  `date_created` timestamp NULL DEFAULT NULL,
  `date_updated` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`book_wait_list_id`)
) ENGINE=InnoDB AUTO_INCREMENT=213 DEFAULT CHARSET=utf8mb3 COMMENT='Main Books Database';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `story_id` int DEFAULT NULL,
  `author` varchar(600) DEFAULT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT NULL,
  `date_updated` timestamp NULL DEFAULT NULL,
  `default_user_id` int NOT NULL DEFAULT '3',
  `foreword` varchar(600) DEFAULT NULL,
  `editor` varchar(255) DEFAULT NULL,
  `illustrator` varchar(600) DEFAULT NULL,
  `isbn_10` varchar(12) DEFAULT NULL,
  `isbn_13` bigint DEFAULT NULL,
  `num_pages` int DEFAULT NULL,
  `pub_date` int DEFAULT NULL,
  `copyright_date` int DEFAULT NULL,
  `edition` int DEFAULT NULL,
  `synopsis` varchar(2048) DEFAULT NULL,
  `title` varchar(300) DEFAULT NULL,
  `word_count` int DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `asin` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10665 DEFAULT CHARSET=utf8mb3 COMMENT='Main Books Database';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `checkout_status_fields`
--

DROP TABLE IF EXISTS `checkout_status_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkout_status_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `short_name` varchar(32) NOT NULL,
  `sort` int NOT NULL DEFAULT '0',
  `parent_id` int NOT NULL DEFAULT '0',
  `active` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `class2gradecycles`
--

DROP TABLE IF EXISTS `class2gradecycles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class2gradecycles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `classroom_id` int NOT NULL,
  `grade_cycle_type` int NOT NULL COMMENT '1 = semester, 2 = trimester, 3 = quarterly',
  `grade_cycle_1_start` varchar(32) DEFAULT NULL,
  `grade_cycle_1_end` varchar(32) DEFAULT NULL,
  `grade_cycle_2_start` varchar(32) DEFAULT NULL,
  `grade_cycle_2_end` varchar(32) DEFAULT NULL,
  `grade_cycle_3_start` varchar(32) DEFAULT NULL,
  `grade_cycle_3_end` varchar(32) DEFAULT NULL,
  `grade_cycle_4_start` varchar(32) DEFAULT NULL,
  `grade_cycle_4_end` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `classroom`
--

DROP TABLE IF EXISTS `classroom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classroom` (
  `classroom_id` int NOT NULL AUTO_INCREMENT,
  `classroom_school_id` int DEFAULT NULL,
  `classroom_school_year` varchar(16) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `classroom_start_date` date DEFAULT NULL,
  `classroom_end_date` date DEFAULT NULL,
  `classroom_name` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `classroom_subject` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `classroom_display_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `classroom_avg_length` int DEFAULT NULL,
  `classroom_avg_frequency` int DEFAULT NULL COMMENT '1 = weekly 2 = bi-weekly 3 = monthly 4 = yearly',
  `classroom_avg_days` int DEFAULT NULL,
  `classroom_grade_level_type` int DEFAULT NULL COMMENT '1 = single-grade 2 = multi-age',
  `classroom_grade_level` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'IDs of options from grades_fields table.',
  `classroom_co_teacher_id` int NOT NULL COMMENT 'id from logins table for co-teacher.',
  `classroom_teacher_idV1` int DEFAULT NULL COMMENT 'NO LONGER USED IN V2, RENAMED to classroom_teacher_idV1',
  `classroom_num_students` int DEFAULT NULL,
  `classroom_num_seats` int DEFAULT NULL,
  `classroom_student_sign_in_mode` int DEFAULT NULL COMMENT '1 - Shared (QR or Google code), 2 - Single-user (email/pass).',
  `classroom_can_share_books` int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
  `classroom_can_view_prompt_replies` int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
  `classroom_can_view_survey_results` int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
  `classroom_can_view_teacher_bookshelves` int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
  `classroom_enable_family_access` int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
  `classroom_status_id` int NOT NULL DEFAULT '0' COMMENT '0 = inactive, 1= active, 2 =archived',
  `classroom_conf_frequency_above` int DEFAULT NULL,
  `classroom_conf_frequency_on` int DEFAULT NULL,
  `classroom_conf_frequency_below` int DEFAULT NULL,
  `classroom_conf_frequency_far_below` int DEFAULT NULL,
  PRIMARY KEY (`classroom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='Stores classroom information.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `classroom2teacher`
--

DROP TABLE IF EXISTS `classroom2teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classroom2teacher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class_id` int NOT NULL,
  `teacher_id` int NOT NULL,
  `active` int NOT NULL DEFAULT '1' COMMENT '0=inactive,1=active',
  `creator_id` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=323 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='relates classrooms to teachers';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `subscription_type` int DEFAULT NULL,
  `seat_price` decimal(4,2) DEFAULT NULL,
  `seats` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=144 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contact2class`
--

DROP TABLE IF EXISTS `contact2class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact2class` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact_id` int NOT NULL,
  `class_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='stores relations of contacts to classes';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contact2district`
--

DROP TABLE IF EXISTS `contact2district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact2district` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact_id` int NOT NULL,
  `district_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COMMENT='Relates contacts to districts';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contact2school`
--

DROP TABLE IF EXISTS `contact2school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact2school` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact_id` int NOT NULL,
  `school_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='relates contacts to schools';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contact2teacher`
--

DROP TABLE IF EXISTS `contact2teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact2teacher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact_id` int NOT NULL,
  `teacher_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `contact_id` int NOT NULL AUTO_INCREMENT,
  `contact_first` varchar(100) DEFAULT NULL,
  `contact_last` varchar(100) DEFAULT NULL,
  `contact_title` varchar(100) DEFAULT NULL,
  `contact_email` varchar(110) DEFAULT NULL,
  `contact_phone` varchar(20) DEFAULT NULL,
  `contact_address` varchar(100) DEFAULT NULL,
  `contact_address2` varchar(100) DEFAULT NULL,
  `contact_city` varchar(100) DEFAULT NULL,
  `contact_state` varchar(2) DEFAULT NULL,
  `contact_zip` varchar(12) DEFAULT NULL,
  `contact_couty` varchar(60) DEFAULT NULL,
  `contact_country` varchar(60) DEFAULT NULL,
  `contact_suffix` varchar(15) DEFAULT NULL,
  `contact_position` varchar(100) DEFAULT NULL,
  `contact_gender` int DEFAULT NULL,
  `contact_pronoun` int DEFAULT NULL,
  `contact_cell` varchar(15) DEFAULT NULL,
  `contact_login_id` int DEFAULT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Contacts, may or may not have a login..';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `content_warning`
--

DROP TABLE IF EXISTS `content_warning`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `content_warning` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4774 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `content_warning_fields`
--

DROP TABLE IF EXISTS `content_warning_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `content_warning_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `date`
--

DROP TABLE IF EXISTS `date`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `date` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8835 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `date_fields`
--

DROP TABLE IF EXISTS `date_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `date_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `degree_level_fields`
--

DROP TABLE IF EXISTS `degree_level_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `degree_level_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `short_name` varchar(64) NOT NULL,
  `parent_id` int NOT NULL DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COMMENT='stores degree level fields';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `district`
--

DROP TABLE IF EXISTS `district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `district` (
  `district_id` int NOT NULL AUTO_INCREMENT,
  `district_type` int DEFAULT NULL COMMENT '1 = public, 2 = private',
  `district_school_days` int DEFAULT NULL,
  `distrct_size` int DEFAULT NULL,
  `district_name` varchar(110) DEFAULT NULL,
  `district_address` varchar(100) DEFAULT NULL,
  `district_address2` varchar(100) DEFAULT NULL,
  `district_city` varchar(100) DEFAULT NULL,
  `district_state` varchar(2) DEFAULT NULL,
  `district_zip` varchar(15) DEFAULT NULL,
  `district_county` varchar(100) DEFAULT NULL,
  `district_country` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`district_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ethnicity`
--

DROP TABLE IF EXISTS `ethnicity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ethnicity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4034 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ethnicity_fields`
--

DROP TABLE IF EXISTS `ethnicity_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ethnicity_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `form`
--

DROP TABLE IF EXISTS `form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `form` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40263 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `form_fields`
--

DROP TABLE IF EXISTS `form_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `form_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `simple_name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='stores preferred gender information';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `gender_fields`
--

DROP TABLE IF EXISTS `gender_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender_fields` (
  `gender_id` int NOT NULL AUTO_INCREMENT,
  `gender_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `gender_short_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `gender_parent_id` int NOT NULL DEFAULT '0',
  `gender_sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`gender_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COMMENT='for storing preferred gender information';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `gender_identity`
--

DROP TABLE IF EXISTS `gender_identity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender_identity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3325 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `gender_identity_fields`
--

DROP TABLE IF EXISTS `gender_identity_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender_identity_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28773 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `genre_fields`
--

DROP TABLE IF EXISTS `genre_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `simple_name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `geographic_location`
--

DROP TABLE IF EXISTS `geographic_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `geographic_location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5031 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `geographic_location_fields`
--

DROP TABLE IF EXISTS `geographic_location_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `geographic_location_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=240 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `grades_fields`
--

DROP TABLE IF EXISTS `grades_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grades_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `short_name` varchar(32) NOT NULL,
  `parent_id` int NOT NULL,
  `sort` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1 COMMENT='stores grade levels';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `historical_event`
--

DROP TABLE IF EXISTS `historical_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historical_event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5515 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `historical_event_fields`
--

DROP TABLE IF EXISTS `historical_event_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historical_event_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `imports`
--

DROP TABLE IF EXISTS `imports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `isbn_13` bigint DEFAULT NULL,
  `library_id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21342 DEFAULT CHARSET=latin1 COMMENT='Books from barcode scannner';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `independent_reading_lessons`
--

DROP TABLE IF EXISTS `independent_reading_lessons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `independent_reading_lessons` (
  `lesson_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `user_book_id` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `observation` text,
  `conference_notes` text,
  `talking_points` text,
  `draft` int DEFAULT NULL,
  `teacher_id` int DEFAULT NULL,
  PRIMARY KEY (`lesson_id`)
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `international_award`
--

DROP TABLE IF EXISTS `international_award`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `international_award` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3241 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `international_award_fields`
--

DROP TABLE IF EXISTS `international_award_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `international_award_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(75) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ir_lesson_schedule`
--

DROP TABLE IF EXISTS `ir_lesson_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ir_lesson_schedule` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(75) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb3 COMMENT='Independant Reading Less Schedule';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `journal_actions`
--

DROP TABLE IF EXISTS `journal_actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `journal_actions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` int DEFAULT '1' COMMENT '1=books, 2=students, 9=both',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3 COMMENT='journal entry lookup id to name (1 is available)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3421 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `language_fields`
--

DROP TABLE IF EXISTS `language_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `language_registers`
--

DROP TABLE IF EXISTS `language_registers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language_registers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5802 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `language_registers_fields`
--

DROP TABLE IF EXISTS `language_registers_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language_registers_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `libraries`
--

DROP TABLE IF EXISTS `libraries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libraries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4221 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `libraries2books`
--

DROP TABLE IF EXISTS `libraries2books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libraries2books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `library_id` int DEFAULT NULL,
  `book_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75858 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `literary_devices`
--

DROP TABLE IF EXISTS `literary_devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `literary_devices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3529 DEFAULT CHARSET=utf8mb3 COMMENT='Forms of Writing';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `literary_devices_fields`
--

DROP TABLE IF EXISTS `literary_devices_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `literary_devices_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `logins`
--

DROP TABLE IF EXISTS `logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(150) DEFAULT NULL,
  `first` varchar(100) DEFAULT NULL,
  `last` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `batch_count` int NOT NULL DEFAULT '0',
  `active` tinyint NOT NULL DEFAULT '1' COMMENT '0=inactive; 1=active',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `passwordResetKey` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Global login for ALL users';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `logins2clients`
--

DROP TABLE IF EXISTS `logins2clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logins2clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login_id` int DEFAULT NULL,
  `client_id` int DEFAULT NULL,
  `level` int NOT NULL DEFAULT '0',
  `active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1929 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `modes_of_writing`
--

DROP TABLE IF EXISTS `modes_of_writing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modes_of_writing` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20141 DEFAULT CHARSET=utf8mb3 COMMENT='Forms of Writing';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `modes_of_writing_fields`
--

DROP TABLE IF EXISTS `modes_of_writing_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modes_of_writing_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `n_n_signposts`
--

DROP TABLE IF EXISTS `n_n_signposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `n_n_signposts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4216 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `n_n_signposts_fields`
--

DROP TABLE IF EXISTS `n_n_signposts_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `n_n_signposts_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `permissions_id` int NOT NULL AUTO_INCREMENT,
  `assesment_type_id` int DEFAULT NULL,
  `child_login_id` int DEFAULT NULL,
  `parent_login_id` int DEFAULT NULL,
  `permission_level` int DEFAULT NULL COMMENT '1 = read, 2 = write, 3 = Teacher of Record',
  `record_id` int DEFAULT NULL,
  PRIMARY KEY (`permissions_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COMMENT='Set parent child permissions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `point_of_view`
--

DROP TABLE IF EXISTS `point_of_view`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `point_of_view` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `field_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22195 DEFAULT CHARSET=latin1 COMMENT='stores PoV values.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `point_of_view_fields`
--

DROP TABLE IF EXISTS `point_of_view_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `point_of_view_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `short_name` varchar(255) NOT NULL,
  `parent_id` int NOT NULL,
  `sort` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `positions_fields`
--

DROP TABLE IF EXISTS `positions_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `positions_fields` (
  `position_id` int NOT NULL AUTO_INCREMENT,
  `position_short_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `position_name` varchar(132) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `position_sort` int NOT NULL DEFAULT '0',
  `position_parent_id` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`position_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='stores teaching positions.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pronoun_fields`
--

DROP TABLE IF EXISTS `pronoun_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pronoun_fields` (
  `pronoun_id` int NOT NULL AUTO_INCREMENT,
  `pronoun_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `pronoun_short_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `pronoun_parent_id` int NOT NULL DEFAULT '0',
  `pronoun_sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`pronoun_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COMMENT='stores pronoun fields';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `publisher_labels`
--

DROP TABLE IF EXISTS `publisher_labels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publisher_labels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=493 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `publishers`
--

DROP TABLE IF EXISTS `publishers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publishers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort` bigint unsigned DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `quarantine_schedule`
--

DROP TABLE IF EXISTS `quarantine_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quarantine_schedule` (
  `quarantine_schedule_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '3',
  `user_book_id` int DEFAULT NULL,
  `active` int NOT NULL DEFAULT '1',
  `date_created` timestamp NULL DEFAULT NULL,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`quarantine_schedule_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COMMENT='Main Books Database';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `race_culture`
--

DROP TABLE IF EXISTS `race_culture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `race_culture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=257 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `race_culture_fields`
--

DROP TABLE IF EXISTS `race_culture_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `race_culture_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reader_journal`
--

DROP TABLE IF EXISTS `reader_journal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reader_journal` (
  `journal_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '3',
  `book_id` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `related_id` int DEFAULT NULL,
  `condition_id` int DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT NULL,
  `date_updated` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`journal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34453 DEFAULT CHARSET=utf8mb3 COMMENT='Main Books Database';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reading_rate_results`
--

DROP TABLE IF EXISTS `reading_rate_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reading_rate_results` (
  `reading_rate_results_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `book_id` int DEFAULT NULL,
  `user_book_id` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `reading_location` int DEFAULT NULL COMMENT '1 = school, 2 = home',
  `type_of_reading` int DEFAULT NULL COMMENT '1=myself,2=someone else, 3=to me, 4= share read',
  `reading_setting` int DEFAULT NULL,
  `reading_type_details` int DEFAULT NULL COMMENT '1=Silent, 2=Aloud,3=Adult,4=teen,5=child,6=young child',
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `total_time` int DEFAULT NULL,
  `start_page` int DEFAULT NULL,
  `end_page` int DEFAULT NULL,
  `total_pages` int DEFAULT NULL,
  `word_per_page` int DEFAULT NULL,
  `types_of_reading` varchar(50) DEFAULT NULL,
  `section_rating` int DEFAULT NULL,
  `check_in` int DEFAULT NULL,
  `reader_request` int DEFAULT NULL,
  `reader_request_almost_finished` int DEFAULT NULL,
  `reader_continuum` int DEFAULT NULL,
  `words_per_page` int DEFAULT NULL,
  `observational_notes` text,
  `share_feedback` int DEFAULT NULL,
  `reader_response` text,
  `reading_response_pages` varchar(11) DEFAULT NULL,
  `reading_response_type` int DEFAULT NULL,
  `reading_response_subtype` int DEFAULT NULL,
  `grade_level` int DEFAULT NULL,
  `grade_level_status` int DEFAULT NULL,
  `teacher_id` int DEFAULT NULL,
  PRIMARY KEY (`reading_rate_results_id`),
  KEY `date` (`date`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18469 DEFAULT CHARSET=utf8mb3 COMMENT='Hold data from reading rate form';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reading_response_fields`
--

DROP TABLE IF EXISTS `reading_response_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reading_response_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subtype_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `short_name` varchar(32) NOT NULL,
  `enabled` bit(1) DEFAULT b'1',
  `label` text NOT NULL,
  `notes` text NOT NULL,
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `subtype_id` (`subtype_id`),
  CONSTRAINT `reading_response_fields_ibfk_1` FOREIGN KEY (`subtype_id`) REFERENCES `reading_response_subtypes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reading_response_results`
--

DROP TABLE IF EXISTS `reading_response_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reading_response_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rr_response_id` int NOT NULL,
  `field_id` int NOT NULL,
  `response` text NOT NULL,
  `date_created` timestamp NULL DEFAULT NULL,
  `date_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `rr_response_id` (`rr_response_id`),
  KEY `field_id` (`field_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5069 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reading_response_subtypes`
--

DROP TABLE IF EXISTS `reading_response_subtypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reading_response_subtypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `short_name` varchar(32) NOT NULL,
  `enabled` bit(1) NOT NULL DEFAULT b'1',
  `sort` int DEFAULT NULL,
  `notes` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `reading_response_subtypes_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `reading_response_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reading_response_types`
--

DROP TABLE IF EXISTS `reading_response_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reading_response_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `short_name` varchar(32) NOT NULL,
  `enabled` bit(1) NOT NULL DEFAULT b'1',
  `page_num` bit(1) NOT NULL DEFAULT b'1' COMMENT '1 or 0 to show/hide page_num field',
  `notes` text,
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `religion`
--

DROP TABLE IF EXISTS `religion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `religion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3312 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `religion_fields`
--

DROP TABLE IF EXISTS `religion_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `religion_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `short_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scans`
--

DROP TABLE IF EXISTS `scans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `isbn_13` bigint DEFAULT NULL,
  `library_id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=846 DEFAULT CHARSET=latin1 COMMENT='Books from barcode scannner';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `school`
--

DROP TABLE IF EXISTS `school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `school` (
  `school_id` int NOT NULL AUTO_INCREMENT,
  `school_contact_id` int NOT NULL COMMENT 'id of the school contact from contacts table',
  `school_billing_contact_id` int NOT NULL COMMENT 'id of the school billing contact from contacts table',
  `school_site_contact_id` int NOT NULL COMMENT 'id of the school billing contact from contacts table',
  `school_name` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `school_address` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `school_city` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `school_state` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `school_zip` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'id of sub type from subsciprtion_types table',
  `school_subscription_type` int NOT NULL,
  `school_size` int NOT NULL,
  `school_grade_levels` int NOT NULL,
  `school_start_date` date NOT NULL,
  `school_end_date` date NOT NULL,
  `school_total_days` int NOT NULL,
  `school_rti_program_behavior` int NOT NULL,
  `school_rti_program_gt` int NOT NULL,
  `school_rti_program_reading` int NOT NULL,
  PRIMARY KEY (`school_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='Stores school information';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `school2district`
--

DROP TABLE IF EXISTS `school2district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `school2district` (
  `id` int NOT NULL AUTO_INCREMENT,
  `school_id` int NOT NULL,
  `district_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='relates schools to districts';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `series_fields`
--

DROP TABLE IF EXISTS `series_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `short_name` varchar(32) NOT NULL,
  `parent_id` int NOT NULL DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `services_provided_fields`
--

DROP TABLE IF EXISTS `services_provided_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_provided_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `short_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `parent_id` int NOT NULL DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sexual_orientation`
--

DROP TABLE IF EXISTS `sexual_orientation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sexual_orientation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3345 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sexual_orientation_fields`
--

DROP TABLE IF EXISTS `sexual_orientation_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sexual_orientation_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `silent_reading_rates`
--

DROP TABLE IF EXISTS `silent_reading_rates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `silent_reading_rates` (
  `silent_reading_rates_id` int NOT NULL AUTO_INCREMENT,
  `grades_fields_id` int DEFAULT NULL,
  `low_range` int DEFAULT NULL,
  `high_range` int DEFAULT NULL,
  `target` int DEFAULT NULL,
  PRIMARY KEY (`silent_reading_rates_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `specialized_courses_fields`
--

DROP TABLE IF EXISTS `specialized_courses_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specialized_courses_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `short_name` varchar(32) NOT NULL,
  `parent_id` int NOT NULL DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` char(2) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `student2class`
--

DROP TABLE IF EXISTS `student2class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student2class` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL COMMENT 'Student Info ID not Student Login ID',
  `class_id` int NOT NULL,
  `active` int NOT NULL DEFAULT '1' COMMENT '0=inactive, 1=active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1779 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='relates students to classes';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `student_info`
--

DROP TABLE IF EXISTS `student_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `student_app_id` varchar(32) NOT NULL,
  `student_calpads_ssid` varchar(32) DEFAULT NULL COMMENT 'CALPADS SSID value.',
  `student_login_id` int DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `middle_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `date_created` timestamp(6) NULL DEFAULT NULL,
  `date_updated` timestamp(6) NULL DEFAULT NULL,
  `preferred_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `gender` int DEFAULT NULL,
  `pronoun` int DEFAULT NULL,
  `birth_date` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `grade_level` int DEFAULT NULL,
  `grade_movement` int DEFAULT NULL,
  `guided_reading_level` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `rti_srv_type` int DEFAULT NULL,
  `student_services` varchar(32) DEFAULT NULL COMMENT 'CSL of Student Identified Services',
  `rti_services` varchar(28) DEFAULT NULL COMMENT 'CSL of RTI Services',
  `specialized_courses` varchar(32) DEFAULT NULL COMMENT 'c.s.l. of ids from specialized_courses_fields table',
  `grade_level_status` int DEFAULT NULL COMMENT 'Labeled as Level of Student',
  `lexile_level_min` int DEFAULT NULL,
  `lexile_level_max` int DEFAULT NULL,
  `type` int DEFAULT NULL COMMENT 'Labeled as Type of Student',
  `weakness` int DEFAULT NULL COMMENT 'fluency or comprehension',
  `reader_type` int DEFAULT NULL COMMENT 'Theme or Plot',
  `reading_stage` int DEFAULT NULL,
  `DELETEself_assessment` int DEFAULT NULL COMMENT 'self assessment how does student feel about reading',
  `DELETEreader_non_reader` int DEFAULT NULL COMMENT 'self assessment reader or non-reader 1 is yes or 2 is no',
  `DELETEread_goal` int DEFAULT NULL COMMENT 'Number of books student wants to read in a year',
  `DELETEtype_of_reading` int DEFAULT NULL COMMENT '1-Fiction, 2-Non-Fiction,3-No Preference',
  `DELETEbook_finish` int DEFAULT NULL COMMENT 'How often does a student finish a book? 5(Most)-1(Never)',
  `DELETEread_speed` int DEFAULT NULL COMMENT '1.fast,2.avg,3.slow',
  `ethnicity` int DEFAULT NULL,
  `avatar` varchar(64) DEFAULT NULL,
  `backup_avatar` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12554 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `subject_fields`
--

DROP TABLE IF EXISTS `subject_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(75) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `subscription_type`
--

DROP TABLE IF EXISTS `subscription_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscription_type` (
  `sub_type_id` int NOT NULL AUTO_INCREMENT,
  `sub_type_short_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `sub_type_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `sub_type_parent_id` int NOT NULL,
  `sub_type_sort` int NOT NULL,
  `year_price` decimal(10,2) DEFAULT NULL,
  `month_price` decimal(10,2) DEFAULT NULL,
  `active` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`sub_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COMMENT='stores subscription types.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `suffix_fields`
--

DROP TABLE IF EXISTS `suffix_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suffix_fields` (
  `suffix_id` int NOT NULL AUTO_INCREMENT,
  `suffix_short_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `suffix_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `suffix_parent_id` int NOT NULL,
  `suffix_sort` int NOT NULL,
  PRIMARY KEY (`suffix_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='suffix information storage.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `survey_categories`
--

DROP TABLE IF EXISTS `survey_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survey_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `survey_data`
--

DROP TABLE IF EXISTS `survey_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survey_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_id` int DEFAULT NULL,
  `login_id` int DEFAULT NULL,
  `value` int DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19647 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `survey_fields`
--

DROP TABLE IF EXISTS `survey_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survey_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_id` int DEFAULT NULL,
  `name` varchar(350) DEFAULT NULL,
  `short_name` varchar(120) DEFAULT NULL,
  `value` int DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=199 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `survey_headings`
--

DROP TABLE IF EXISTS `survey_headings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survey_headings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `survey_questions`
--

DROP TABLE IF EXISTS `survey_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survey_questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prompt` varchar(500) DEFAULT NULL COMMENT 'The content of the survey question',
  `type` int DEFAULT NULL COMMENT '1=choose 1, 2=Check all that apply, 3 = Write in Number (only)',
  `user_target` int DEFAULT NULL COMMENT '1= student, 2 = educator, 3 = both',
  `category_id` int NOT NULL,
  `heading_id` int NOT NULL,
  `sort` int NOT NULL DEFAULT '0',
  `required_date` date DEFAULT NULL COMMENT 'The date at which students must answer the question',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1 COMMENT='Questions fror the student survey';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `teacher_login_id` int DEFAULT NULL COMMENT 'ID from ''logins'' table.',
  `teacher_title` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'ID from ''titles_fields'' table',
  `teacher_first_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `teacher_middle_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `teacher_last_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `teacher_suffix` varchar(16) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `teacher_date_of_birth` date DEFAULT NULL,
  `teacher_date_started_teaching` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `degree_level_id` int DEFAULT NULL COMMENT 'ID from degree_level_fields table',
  `is_certified` int DEFAULT NULL COMMENT '1 for yes, 0 for no.',
  `certification_id` int DEFAULT NULL COMMENT 'id of certification from teacher_certification_fields',
  `certification_start` varchar(16) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `certification_end` varchar(16) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `teacher_avatar` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'URL to gravatar, or name of avatar image.',
  `teacher_backup_avatar` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `teacher_subscription_type` int DEFAULT NULL COMMENT 'id from ''subscription_type'' table',
  `teacher_code_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `teacher_display_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `quarantined_books` int DEFAULT '0' COMMENT '0=inactive, 1=active',
  `teacher_backup_email` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `teacher_gender` int DEFAULT NULL COMMENT 'ID of entry in gender_fields table.',
  `teacher_pronoun` int DEFAULT NULL COMMENT 'ID of pronoun_fields table entry.',
  `teacher_position` int DEFAULT NULL COMMENT 'id of entry in teacher_positions fields table',
  `teacher_grade_band` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'array of grade bands? Will likely need to shuffle this over to relate to another table',
  `teacher_subjects` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'CSL of value from the form.',
  `teacher_provided_services` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'CSL of ids from services_provided_fields',
  `teacher_specialized_courses` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'CSL of ids from specialized_courses_fields',
  `teacher_state_id` int DEFAULT NULL COMMENT 'reference state_fields table',
  `teacher_district` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `teacher_school` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `teacher_cell_phone` varchar(16) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `teacher_texts_enabled` int DEFAULT NULL,
  `active` int NOT NULL DEFAULT '1' COMMENT '0=inactive,1=active',
  `teacher_date_created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `teacher_date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='Teacher information from add_teacher form.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `teacher2school`
--

DROP TABLE IF EXISTS `teacher2school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher2school` (
  `id` int NOT NULL AUTO_INCREMENT,
  `teacher_id` int NOT NULL COMMENT 'id from ''teacher'' table',
  `school_id` int NOT NULL COMMENT 'id from ''school'' table',
  `active` int NOT NULL DEFAULT '1' COMMENT '0=inactive, 1=active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `teacher_certification_fields`
--

DROP TABLE IF EXISTS `teacher_certification_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_certification_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `short_name` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `parent_id` int NOT NULL DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='stores certification fields';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `text_features`
--

DROP TABLE IF EXISTS `text_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `text_features` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38188 DEFAULT CHARSET=utf8mb3 COMMENT='Forms of Writing';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `text_features_fields`
--

DROP TABLE IF EXISTS `text_features_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `text_features_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `text_structures`
--

DROP TABLE IF EXISTS `text_structures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `text_structures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4882 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `text_structures_fields`
--

DROP TABLE IF EXISTS `text_structures_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `text_structures_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `titles_fields`
--

DROP TABLE IF EXISTS `titles_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `titles_fields` (
  `title_id` int NOT NULL AUTO_INCREMENT,
  `title_short_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `title_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `title_sort` int NOT NULL,
  `title_parent_id` int NOT NULL,
  PRIMARY KEY (`title_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='titles (mr/mrs etc)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `topic`
--

DROP TABLE IF EXISTS `topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88901 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `topic_fields`
--

DROP TABLE IF EXISTS `topic_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topic_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_books`
--

DROP TABLE IF EXISTS `user_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `book_type` int DEFAULT NULL COMMENT '1=fiction,2=non-ficiton,3=blended',
  `checkout_status` int NOT NULL DEFAULT '4' COMMENT 'id from ''checkout_status_fields'' table.',
  `condition` int DEFAULT NULL,
  `cover_image` varchar(32) DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT NULL,
  `date_updated` timestamp NULL DEFAULT NULL,
  `format` int DEFAULT NULL COMMENT '1=hardcover,2=PaperBack,3=ebook,4=audio,5=other',
  `guided_reading_level` varchar(3) DEFAULT NULL,
  `lexile_level` int DEFAULT NULL,
  `location` int DEFAULT NULL,
  `mentor_text` int DEFAULT NULL,
  `multiple_pov` int DEFAULT NULL,
  `price` decimal(13,2) DEFAULT NULL,
  `qty_label` int DEFAULT NULL,
  `series` int DEFAULT NULL,
  `series_name` varchar(255) DEFAULT NULL,
  `series_pos` int DEFAULT NULL,
  `tags` varchar(1000) DEFAULT NULL,
  `teacher_notes` varchar(2048) DEFAULT NULL,
  `teacher_read` int DEFAULT NULL,
  `text_complexity` int DEFAULT NULL,
  `unpaged` int NOT NULL DEFAULT '0',
  `unreliable_narrative` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `entered_user_id` int DEFAULT NULL COMMENT 'user that entered the book in ReMo',
  `want_for_classroom` int DEFAULT NULL,
  `own_this_copy` int NOT NULL DEFAULT '0' COMMENT '0=unspecified 1=user 2=school 3=School Library',
  `want_to_discard` int DEFAULT NULL,
  `word_count` int DEFAULT NULL,
  `words_per_page` int DEFAULT NULL,
  `current_user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tags` (`tags`(255))
) ENGINE=InnoDB AUTO_INCREMENT=72117 DEFAULT CHARSET=utf8mb3 COMMENT='Main Books Database';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_levels`
--

DROP TABLE IF EXISTS `user_levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_levels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level` int DEFAULT NULL,
  `label` varchar(100) DEFAULT NULL,
  `added_version` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=102 DEFAULT CHARSET=latin1 COMMENT='user level to number lookup';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `voice`
--

DROP TABLE IF EXISTS `voice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6957 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `voice_fields`
--

DROP TABLE IF EXISTS `voice_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voice_fields` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `parent_id` int DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `wait_list_schedule`
--

DROP TABLE IF EXISTS `wait_list_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wait_list_schedule` (
  `wait_list_schedule_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '3',
  `user_book_id` int DEFAULT NULL,
  `active` int NOT NULL DEFAULT '1',
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `date_updated` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`wait_list_schedule_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Main Books Database';
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-23 16:22:45
