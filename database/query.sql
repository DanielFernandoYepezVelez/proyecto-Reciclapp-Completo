CREATE DATABASE reciclApp;
USE reciclApp;
CREATE TABLE roles(
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  rolName VARCHAR (50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE documents(
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  typeDocument VARCHAR (50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE neighborhoods(
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  neighborhood VARCHAR (100) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE houses(
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  typeHouse VARCHAR (50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE users(
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fullName VARCHAR (50) NOT NULL,
  numberDocument VARCHAR (20) NOT NULL,
  mobilePhone INT (20) NOT NULL,
  email VARCHAR (50) NOT NULL UNIQUE,
  password VARCHAR (60) NOT NULL,
  addressHome VARCHAR (50) NOT NULL,
  membersHome VARCHAR (50) NOT NULL,
  role_id INT (11) DEFAULT 1,
  document_id INT (11),
  neighborhood_id INT (11),
  house_id INT (11),
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles (id),
  CONSTRAINT fk_document FOREIGN KEY (document_id) REFERENCES documents (id),
  CONSTRAINT fk_neighborhood FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(id),
  CONSTRAINT fk_house FOREIGN KEY (house_id) REFERENCES houses(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE collectLocations(
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  locationName VARCHAR (60) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE appointments(
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  client_id INT (11),
  collector_id INT (11),
  collectLocation_id INT (11),
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_client FOREIGN KEY (client_id) REFERENCES users(id),
  CONSTRAINT fk_collector FOREIGN KEY (collector_id) REFERENCES users(id),
  CONSTRAINT fk_collectLocation FOREIGN KEY (collectLocation_id) REFERENCES collectLocations(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE typeMaterials(
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  typeMaterial VARCHAR (50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE collects(
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  quantity INT (50) NOT NULL,
  client_id INT (11),
  typeMaterial_id INT (11),
  appointment_id INT (11),
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_client2 FOREIGN KEY (client_id) REFERENCES users (id),
  CONSTRAINT fk_typeMaterail FOREIGN KEY (typeMaterial_id) REFERENCES typeMaterials(id),
  CONSTRAINT fk_appointment FOREIGN KEY (appointment_id) REFERENCES appointments(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
/*
Forma para crear las tablas en SQLyong u otro motor de base de datos cliente
*/
CREATE TABLE `appointments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) DEFAULT NULL,
  `collector_id` int(11) DEFAULT NULL,
  `collectLocation_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_client` (`client_id`),
  KEY `fk_collector` (`collector_id`),
  KEY `fk_collectLocation` (`collectLocation_id`),
  CONSTRAINT `fk_client` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_collectLocation` FOREIGN KEY (`collectLocation_id`) REFERENCES `collectlocations` (`id`),
  CONSTRAINT `fk_collector` FOREIGN KEY (`collector_id`) REFERENCES `users` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 CREATE TABLE `collectlocations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locationName` varchar(60) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 CREATE TABLE `collects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(50) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `typeMaterial_id` int(11) DEFAULT NULL,
  `appointment_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_client2` (`client_id`),
  KEY `fk_typeMaterail` (`typeMaterial_id`),
  KEY `fk_appointment` (`appointment_id`),
  CONSTRAINT `fk_appointment` FOREIGN KEY (`appointment_id`) REFERENCES `appointments` (`id`),
  CONSTRAINT `fk_client2` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_typeMaterail` FOREIGN KEY (`typeMaterial_id`) REFERENCES `typematerials` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 CREATE TABLE `documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeDocument` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 CREATE TABLE `houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeHouse` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 CREATE TABLE `neighborhoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `neighborhood` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeDocument` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_spanish_ci