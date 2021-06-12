CREATE DATABASE IF NOT EXISTS e2ecubbit;

USE e2ecubbit;

CREATE TABLE test (
  test_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  created_at TIMESTAMP,
  name varchar(500)
);

INSERT INTO test (name) VALUES ('Mazdak Nazemi');