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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'Пушкунов Айдыс','aidys@gmail.com','$2b$10$M3t1Ngtkm2gasKxvkGRsXeZibX8kX1wbt3ZUNYLlOoiTJfPIOBtwa'),(26,'Пушкунов Эдгар','edgar@gmail.com','$2b$10$xYzTs4KjuA8GTfMahcuToe9bLfGNfO62qRVtMZgkYrETfJUMlCnvu'),(27,'Дибесова Ай-Санаа','aisana@gmail.com','$2b$10$Qhd/UpseNJa.c05ASudB7.pexQ4aj38O3L.biwXED3GCsF.7kGxXK'),(28,'Тадырова Баяна','bayana@gmail.com','$2b$10$DZ6qRoKHkN3ZtY7rZ9jZI.ptlDOg0u7g7ACaDzys2hYIRN9ZHqsBe'),(29,'Куликлов Павел','pavel@gmail.com','$2b$10$ejQFi7pPLeesVBvAeGnSA.ARKsR2mbvwpED2fFfY4gzfEhYOHfVPu'),(40,'Иванов Вася','vasya@gmail.com','$2b$10$ofwJjSO3vjTGYVPCeJGGc.YSK3TObEopzG1Cx0QLqzEEeo3bz4226'),(41,'Иванов Иван','ivan@gmail.com','$2b$10$v642Pb/K4lOPbETjKZ22z.VoB44PM3TYty5KEQJaG229RhU5wEeuW'),(42,'Нефритова Настя','nastya@gmail.com','$2b$10$NyZ/0QUHsSyV3zhQczX7w.gacPNruHcaQ7bFWf0zqa6EYWWSVWv/K'),(43,'Кайынбажева Айтана','aitana@gmail.com','$2b$10$94Gru0aYeGtrWII9nbjD0OfQdqCz7tiRv8Lrnsk35y.nF8kQOTumi'),(44,'Битешева Айсана','bitesheva@gmail.com','$2b$10$.aEnPX93AKQIghninjsqJetSe71ED/k9FSWZ6xwG26gnVLQN5yt7q'),(45,'Даражанова Ай-Танаа','aitanajarazhanova@gmail.com','$2b$10$ufEGvQ05uCSYAzp5wNvS5e1U7mqZJRMiHO67PIKR7rqAUUcEczvcS'),(46,'Саймина Урсула','ursula@gmail.com','$2b$10$h23DrOe6aDImG.yz4W/ejubiJgP.dnu76ShtgXIPPgFYsk.kWGiJK'),(47,'Сугенова Сырга','syrga@gmail.com','$2b$10$1VlLnJpWo/KPBWxWRdUtAO3zZS7S3WEdR0cJ1BvaRwuizOvvNCemK'),(48,'Дарынова Jинjи','jinji@gmail.com','$2b$10$QZuIOTKdbNq873DwJYaxi.jYdNOoiqE2uQT1yfVKmcj0HuNKEZfU6'),(49,'Саймина Самира','samira@gmail.com','$2b$10$NBw9iQsB08su7o1HI5Z/duIAGUxAZXGc8lVCCAbEoz62FbuxePDZq'),(50,'Кужекенова Тамира','tamira@gmail.com','$2b$10$5JA0HY.jd1KQZj6JoN5RreymQR.afyzvRsvbiqxQ1Pe7E2QKK219q'),(51,'test','t@gmail.com','$2b$10$MC65andRYF4NKqkYXegQ1ubtT93.nVykpj71qGinYmXNQtZRKLLxi'),(52,'Иванов Степан','s@gmail.com','$2b$10$.t8JbeVrn4.DO21Hy7722.I7BolDTVPd9cT9FedIG7yM8cuPuUlhy'),(53,'Иван царейвич','ivansarei@gmail.com','$2b$10$q6/4TuilNODJFMRr5PkN7unkiJwe6GZliTAOfQ34keyd0OChbh3PW'),(54,'dsfagae dfsgefag','r@gmail.com','$2b$10$evk94XoxsnC5SHllJKk0N.mlwUuiYBNNk6ZPi7gWIzKdoWsAKDgAe');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
