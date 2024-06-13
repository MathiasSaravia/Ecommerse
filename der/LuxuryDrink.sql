CREATE DATABASE  IF NOT EXISTS `luxury_drinks` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `luxury_drinks`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: luxury_drinks
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2024-06-04 22:26:32',
  `updatedAt` datetime NOT NULL DEFAULT '2024-06-04 22:26:32',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'vinos','2024-06-04 22:26:32','2024-06-04 22:26:32'),(2,'espumantes','2024-06-04 22:26:32','2024-06-04 22:26:32'),(3,'whiskys','2024-06-04 22:26:32','2024-06-04 22:26:32'),(4,'licores','2024-06-04 22:26:32','2024-06-04 22:26:32'),(5,'populares','2024-06-04 22:26:32','2024-06-04 22:26:32'),(6,'otros','2024-06-04 22:26:32','2024-06-04 22:26:32');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderproducts`
--

DROP TABLE IF EXISTS `orderproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderproducts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2024-06-04 22:26:32',
  `updatedAt` datetime NOT NULL DEFAULT '2024-06-04 22:26:32',
  PRIMARY KEY (`id`),
  KEY `orderId` (`orderId`),
  KEY `productId` (`productId`),
  CONSTRAINT `orderproducts_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `orderproducts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderproducts`
--

LOCK TABLES `orderproducts` WRITE;
/*!40000 ALTER TABLE `orderproducts` DISABLE KEYS */;
INSERT INTO `orderproducts` VALUES (1,1,12,2,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(2,2,11,1,'2024-06-04 22:26:32','2024-06-04 22:26:32');
/*!40000 ALTER TABLE `orderproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total` int DEFAULT NULL,
  `userId` int NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2024-06-04 22:26:32',
  `updatedAt` datetime NOT NULL DEFAULT '2024-06-04 22:26:32',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,3000,8,'completed','2024-06-04 22:26:32','2024-06-04 22:26:32'),(2,5000,11,'pending','2024-06-04 22:26:32','2024-06-04 22:26:32');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `description` text,
  `imagePrincipal` varchar(255) DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2024-06-04 22:26:32',
  `updatedAt` datetime NOT NULL DEFAULT '2024-06-04 22:26:32',
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Dv Catena Cabernet 750ml',7400,35,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','D.V._Catena_Cabernet_-_Malbec.webp',1,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(2,'Angelina Zapata Malbec 750ml',15990,30,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Angelica_Zapata_Malbec_Alta_750cc.webp',1,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(3,'Tinto Luigi Bosca Malbec 750ml',4170,25,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Tinto_Luigi_Bosca_Malbec_750ml.webp',1,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(4,'Angelina Zapata Malbec 750ml',15990,20,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Angelica_Zapata_Malbec_Alta_750cc.webp',1,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(5,'Tinto Luigi Bosca Malbec 750ml',4175,25,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Tinto_Luigi_Bosca_Malbec_750ml.webp',1,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(6,'Dv Catena Cabernet 750ml',7400,35,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','D.V._Catena_Cabernet_-_Malbec.webp',1,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(7,'Angelina Zapata Malbec 750ml',15900,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Angelica_Zapata_Malbec_Alta_750cc.webp',1,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(8,'Tinto Luigi Bosca Malbec 750ml',4175,25,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Tinto_Luigi_Bosca_Malbec_750ml.webp',1,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(9,'Sidra Real 720 x Caja de 6',8000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Sidra_Real_750.png',2,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(10,'Anana Fizz Real',5000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','anana_fizz_real.png',2,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(11,'Champagne Norton Extra Brut 750ml',15000,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Champagne_Norton_extra_brut_750ml.webp',2,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(12,'Sidra Real 720 x Caja de 6',8000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Sidra_Real_750.png',2,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(13,'Anana Fizz Real',5000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','anana_fizz_real.png',2,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(14,'Champagne Norton Extra Brut 750ml',15000,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Champagne_Norton_extra_brut_750ml.webp',2,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(15,'Sidra Real 720 x Caja de 6',8000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Sidra_Real_750.png',2,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(16,'Anana Fizz Real',5000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','anana_fizz_real.png',2,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(17,'Champagne Norton Extra Brut 750ml',15000,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Champagne_Norton_extra_brut_750ml.webp',2,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(18,'Johnnie Walker Swing Escoces Blended 750ml',52000,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Johnnie_Walker_Swing_Escoces_Blended_750ml.png',3,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(19,'White Horse Fine Old Blended',15000,20,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','White_Horse_Fine_Old_Blended_Scotch.webp',3,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(20,'Ballantines Finest Blended Scotch',10500,5,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Whisky_Ballantines_Finest_Blended_Scotch_700ml.webp',3,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(21,'Johnnie Walker Swing Escoces Blended 750ml',52000,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Johnnie_Walker_Swing_Escoces_Blended_750ml.png',3,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(22,'White Horse Fine Old Blended',15000,20,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','White_Horse_Fine_Old_Blended_Scotch.webp',3,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(23,'Ballantines Finest Blended Scotch',10500,5,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Whisky_Ballantines_Finest_Blended_Scotch_700ml.webp',3,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(24,'Johnnie Walker Swing Escoces Blended 750ml',52000,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Johnnie_Walker_Swing_Escoces_Blended_750ml.png',3,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(25,'White Horse Fine Old Blended',15000,20,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','White_Horse_Fine_Old_Blended_Scotch.webp',3,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(26,'Ballantines Finest Blended Scotch',10500,5,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Whisky_Ballantines_Finest_Blended_Scotch_700ml.webp',3,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(27,'Borghetti Cafe 700ml',12330,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Licor_Borghetti_Cafe_700ml.png',4,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(28,'Tres Plumas Naranjas Curacao',15559,5,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Licor_Tres_Plumas_Triple_Sec_Naranjas_Curacao_700ml.png',4,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(29,'Wild Africa Cream 750ml',19710,25,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Licor_Wild_Africa_Cream_750ml_Bebida_Caramelo_Y_Crema.png',4,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(30,'Borghetti Cafe 700ml',12330,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Licor_Borghetti_Cafe_700ml.png',4,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(31,'Tres Plumas Naranjas Curacao',15559,5,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Licor_Tres_Plumas_Triple_Sec_Naranjas_Curacao_700ml.png',4,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(32,'Wild Africa Cream 750ml',19710,25,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Licor_Wild_Africa_Cream_750ml_Bebida_Caramelo_Y_Crema.png',4,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(33,'Borghetti Cafe 700ml',12330,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Licor_Borghetti_Cafe_700ml.png',4,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(34,'Tres Plumas Naranjas Curacao',15559,5,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Licor_Tres_Plumas_Triple_Sec_Naranjas_Curacao_700ml.png',4,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(35,'Wild Africa Cream 750ml',19710,25,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Licor_Wild_Africa_Cream_750ml_Bebida_Caramelo_Y_Crema.png',4,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(36,'Meet Lima HardSeltzer 310ml',9999,30,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Meet_HardSeltzer_Aromas_Naturales_310ml.png',6,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(37,'Mingo Pomelo 750ml',9000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','mingo_pomelo_750ml.png',6,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(38,'Dr Lemon Vodka Pomelo XL',4200,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Dr-Lemon-con-Vodka-Pomelo.png',6,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(39,'Meet Lima HardSeltzer 310ml',9999,30,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Meet_HardSeltzer_Aromas_Naturales_310ml.png',6,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(40,'Mingo Pomelo 750ml',9000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','mingo_pomelo_750ml.png',6,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(41,'Dr Lemon Vodka Pomelo XL',4200,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Dr-Lemon-con-Vodka-Pomelo.png',6,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(42,'Meet Lima HardSeltzer 310ml',9999,30,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Meet_HardSeltzer_Aromas_Naturales_310ml.png',6,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(43,'Mingo Pomelo 750ml',9000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','mingo_pomelo_750ml.png',6,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(44,'Dr Lemon Vodka Pomelo XL',4200,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Dr-Lemon-con-Vodka-Pomelo.png',6,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(45,'Meet Lima HardSeltzer 310ml',9999,30,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Meet_HardSeltzer_Aromas_Naturales_310ml.png',5,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(46,'Mingo Pomelo 750ml',9000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','mingo_pomelo_750ml.png',5,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(47,'Dr Lemon Vodka Pomelo XL',4200,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Dr-Lemon-con-Vodka-Pomelo.png',5,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(48,'Meet Lima HardSeltzer 310ml',9999,30,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Meet_HardSeltzer_Aromas_Naturales_310ml.png',5,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(49,'Mingo Pomelo 750ml',9000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','mingo_pomelo_750ml.png',5,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(50,'Dr Lemon Vodka Pomelo XL',4200,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Dr-Lemon-con-Vodka-Pomelo.png',5,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(51,'Meet Lima HardSeltzer 310ml',9999,30,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Meet_HardSeltzer_Aromas_Naturales_310ml.png',5,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(52,'Mingo Pomelo 750ml',9000,10,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','mingo_pomelo_750ml.png',5,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(53,'Dr Lemon Vodka Pomelo XL',4200,15,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Dr-Lemon-con-Vodka-Pomelo.png',5,'2024-06-04 22:26:32','2024-06-04 22:26:32');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20240502002148-create-category.js'),('20240502204440-create-product.js'),('20240502214907-create-user.js'),('20240521084402-create-order.js'),('20240521084708-create-order-product.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `rol` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2024-06-04 22:26:32',
  `updatedAt` datetime NOT NULL DEFAULT '2024-06-04 22:26:32',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Antonella','Dukwen','antoDuk@gmail.com','123456',NULL,NULL,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(2,'Dario','Benitez','reedq@gmail.comp','123456',NULL,NULL,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(3,'Lucas','Fasanella','lucasF@gmail.com','123456',NULL,NULL,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(4,'Matias','Saravia','matias@gmail.com','123456',NULL,NULL,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(5,'Juan','Samek','juandsamek@gmail.com','123456',NULL,NULL,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(6,'','','amsams@gmail.com','$2a$10$4xOYPoxc3KadZ62Nur5wJ.m6p.rqZPCNKZZWONgltmT.QUjIDML86',NULL,NULL,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(7,'Supermatt','26','maycolbeach@gmail.com','$2a$10$EopvXn//Xs290VKuDC0y.OkATVYhhIm51cZboRXl2C97bwJgyIYve',NULL,NULL,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(8,'mathias','saravia','asas@gmail.com','$2a$10$7b0O0pnXFj67NElpTaT7PuZdJAlTrAWNg1i7DMa0kMFyXoo6ZgQX.',NULL,NULL,'2024-06-04 22:26:32','2024-06-04 22:26:32'),(9,'MATHIAS','SARAVIA','matiassas@gmail.com','$2a$10$pG6yA72jzFakRtkkYoMwh.3gfnIJ0jY58DR/XnipWaslxlaX5QxHW',NULL,'regular','2024-06-04 22:26:32','2024-06-04 22:26:32'),(10,'mathias','mathias','mathiasnasi@gmail.com','$2a$10$ZKuJTunWzqd80IGI3bH5ZeWXMOYh0/IO6n65XwcBJmZqjD.CHDjyW',NULL,'ADMIN','2024-06-04 22:26:32','2024-06-04 22:26:32'),(11,'mathiasxd','saravia','mathias26@gmail.com','$2a$10$ADTd3v4AFDJv.IiKGxPLVO6kOvXCRgLmbWIXzqlgpBGjR1VyVVTDS',NULL,'ADMIN','2024-06-04 22:26:32','2024-06-04 22:26:32'),(12,'xd','xd','mathias26xd@gmail.com','$2a$10$1EfKn0IfEDT7XJKniBiEg.lmHzHdvqDgG4SAmUXp.Snnblm32dlm.',NULL,'regular','2024-06-04 22:26:32','2024-06-04 22:26:32'),(13,'Antonela','duckwen','antoduckwen@gmail.com','$2a$10$C//dV2GyKzvubE8Mzx.UduJMXUHLWqO501WAXLCi7FIJcmvyHPv1y',NULL,'regular','2024-06-04 22:26:32','2024-06-04 22:26:32'),(14,'Antonela','duckwen','anto@hotmail.com','$2a$10$HSy.dVKQ3wrhTQ67jYuB2.1vKYDDLxDbtwkIY0yOfdtRVHRXWIKNC',NULL,'regular','2024-06-04 22:26:32','2024-06-04 22:26:32'),(15,'Antonela','duckwen','anto.l.d@hotmail.com','$2a$10$qtRqpiTCdsWv./7sjGfDQ.qDCezjYanJHhWZordvfjFEWRZAoy956',NULL,'regular','2024-06-04 22:26:32','2024-06-04 22:26:32'),(16,'MATHIAS','SARAVIA','mathiasxdxd@gmail.com','$2a$10$GvYAmEBqvrObsK.v0jMO5OnSQY3cnp4lBZvaKGZETqVIS3gpSh8bG',NULL,'ADMIN','2024-06-04 22:26:32','2024-06-04 22:26:32');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'luxury_drinks'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-04 19:49:23
