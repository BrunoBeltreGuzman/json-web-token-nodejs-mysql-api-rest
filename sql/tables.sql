CREATE TABLE users (
       id int NOT NULL AUTO_INCREMENT primary key,
       name varchar(50) NOT NULL,
       email varchar(50) NOT NULL,
       password varchar(50) NOT NULL,
       role varchar(50) DEFAULT 'Reader'
);