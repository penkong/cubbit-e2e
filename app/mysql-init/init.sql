CREATE DATABASE IF NOT EXISTS e2ecubbit;

USE e2ecubbit;

CREATE TABLE IF NOT EXISTS user (
  user_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  created_at TIMESTAMP,
  name varchar(100)
);

CREATE TABLE IF NOT EXISTS info (
  file_id binary(16) NOT NULL PRIMARY KEY,
  name varchar(100) NOT NULL,
  address varchar(100) NOT NULL,
  file_size varchar(100) NOT NULL,
  file_mime varchar(40) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP,
  owner int,
  FOREIGN KEY (owner) REFERENCES user(user_id)
);

INSERT INTO user (name) VALUES ('Mazdak Nazemi');
INSERT INTO info (
  file_id, 
  name, 
  address, 
  file_size, 
  file_mime , 
  created_at) VALUES (UUID_TO_BIN(UUID()), 'example.txt', './init.sql', '234556', 'text/sql', NOW());