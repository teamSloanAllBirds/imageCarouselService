DROP DATABASE IF EXISTS imageurls;

CREATE DATABASE imageurls;

USE imageurls;

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE urls (
  product_id int,
  url varchar(100),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE descriptions (
  product_id int,
  subtext_one varchar(50),
  subtext_two varchar(50),
  features varchar(100),
  FOREIGN KEY (product_id) REFERENCES products(id)
)