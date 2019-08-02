
CREATE DATABASE burgernomnom_db;
USE burgernomnom_db;

CREATE TABLE burgers_table
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
