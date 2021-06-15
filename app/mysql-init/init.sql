ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;

CREATE DATABASE IF NOT EXISTS e2ecubbit;

USE e2ecubbit;

CREATE TABLE IF NOT EXISTS user (
  user_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(100) NOT NULL,
  app_name varchar(100) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS info (
  file_id binary(16) NOT NULL PRIMARY KEY,
  name varchar(300) NOT NULL,
  address varchar(300) NOT NULL,
  file_size varchar(300) NOT NULL,
  file_mime varchar(300) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP,
  owner int,
  FOREIGN KEY (owner) REFERENCES user(user_id)
);

INSERT INTO user (name, app_name, created_at) VALUES ('Mazdak Nazemi', 'Cubbit Vult!', NOW());
INSERT INTO info (
  file_id, 
  name, 
  address, 
  file_size, 
  file_mime , 
  created_at) 
VALUES (
  UUID_TO_BIN(UUID()), 
  'example.txt!', 
  './init.sql?', 
  '23455654353', 
  'text/sql?', 
  NOW()
);