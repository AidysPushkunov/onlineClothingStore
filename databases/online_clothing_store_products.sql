-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: online_clothing_store
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `price` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'https://www.charuel.ru/upload/resize_cache/iblock/73f/445_445_1/%D0%92%D0%AB%D0%9F%D0%90%D0%94%D0%90%D0%A8%D0%9A%D0%90.jpg','КОФТА LOUNGE TONAL LOGO ','Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян','7820'),(2,'https://i.pinimg.com/originals/be/7f/49/be7f4915c6400e7949f7197811d03286.jpg','LOGO ','Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян','3253'),(8,'https://static.2moodstore.com/r/21_0VsSSy4I/rs:fit:1900:1900:1/plain/images/products/1/341/651796821/2mood1901_1867884545.jpg','Casual Style','Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян','2442'),(9,'https://static.2moodstore.com/r/21_0VsSSy4I/rs:fit:1900:1900:1/plain/images/products/1/341/651796821/2mood1901_1867884545.jpg','Klerak','Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян','49030'),(10,'https://stylegirlfriend.com/wp-content/uploads/2020/01/20-justus-frederic-hansen-819x1024.jpg','Solo','Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян','2134'),(11,'https://static.2moodstore.com/r/21_0VsSSy4I/rs:fit:1900:1900:1/plain/images/products/1/341/651796821/2mood1901_1867884545.jpg','Herrru','Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян','32432'),(12,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzQhQ7LtGguarNEBoM2vYK4rT-d3w3oTn4Q&usqp=CAU','Nerii','Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян','2314'),(13,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzQhQ7LtGguarNEBoM2vYK4rT-d3w3oTn4Q&usqp=CAU','Lerum','Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян','234'),(14,'https://static.2moodstore.com/r/21_0VsSSy4I/rs:fit:1900:1900:1/plain/images/products/1/341/651796821/2mood1901_1867884545.jpg','Rentff','Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян','1234'),(15,'https://static.2moodstore.com/r/21_0VsSSy4I/rs:fit:1900:1900:1/plain/images/products/1/341/651796821/2mood1901_1867884545.jpg','Doorl','Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян','234');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-05 23:59:10
