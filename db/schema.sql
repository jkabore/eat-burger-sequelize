DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE Burger_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(225) NULL,
  devour BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
)