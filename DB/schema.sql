DROP DATABASE IF EXISTS employees_DB;
CREATE DATABASE employees_DB;
USE employees_DB;

-- Department table --
CREATE TABLE Department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Roles table --
CREATE TABLE role (
    title VARCHAR(30) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    Department_id INT NOT NULL,
    salary DECIMAL NOT NULL,
    PRIMARY KEY (id)
);

-- Employee table -- 
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    Department_id INT NOT NULL,
    salary DECIMAL NOT NULL,
    Manager_id INT     
);

