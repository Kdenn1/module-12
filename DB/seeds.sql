USE employees_DB;

-- Department Options --

INSERT INTO Department (id, name)
VALUES (1, "Customer Relations");

INSERT INTO Department (id, name)
VALUES (2, "Brand Development");

INSERT INTO Department (id, name)
VALUES (3, "Management");

INSERT INTO Department (id, name)
VALUES (4, "IT");

-- Role Options -- 

INSERT INTO role (id, title, salary, Department_id)
VALUES (1, "Customer service liason", 23000, 1) 

