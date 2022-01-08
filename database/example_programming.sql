/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 5.7.26-29 : Database - simpleApi
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `programming_languages` */

DROP TABLE IF EXISTS `programming_languages`;

CREATE TABLE `programming_languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `released_year` int(11) NOT NULL,
  `github_rank` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

/*Data for the table `programming_languages` */

insert  into `programming_languages`(`id`,`name`,`released_year`,`github_rank`,`created_at`,`updated_at`) values 
(1,'JavaScript',1995,1,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(2,'Python',1991,2,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(3,'Java',1995,3,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(4,'TypeScript',2012,7,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(5,'C#',2000,9,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(6,'PHP',1995,8,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(7,'C++',1985,5,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(8,'C',1972,10,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(9,'Ruby',1995,6,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(10,'R',1993,33,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(11,'Objective-C',1984,18,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(12,'Swift',2015,16,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(13,'Kotlin',2011,15,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(14,'Go',2009,4,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(15,'Rust',2010,14,'2021-12-19 07:07:34','2021-12-19 07:07:34'),
(16,'Scala',2004,11,'2021-12-19 07:07:34','2021-12-19 07:07:34');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
