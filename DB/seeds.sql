USE employees_DB;

-- Department Values --

INSERT INTO Department (id, name)
VALUES (1, "Customer Relations");

INSERT INTO Department (id, name)
VALUES (2, "Brand Development");

INSERT INTO Department (id, name)
VALUES (3, "Management");

INSERT INTO Department (id, name)
VALUES (4, "IT");

-- Role Values -- 

INSERT INTO role (id, title, salary, Department_id)
VALUES (1, "Customer service liason", 23000, 1);

INSERT INTO role (id, title, salary, Department_id)
VALUES (2, "Brand ambassador", 30000, 1);

INSERT INTO role (id, title, salary, Department_id)
VALUES (3, "Brand Manager", 40000, 2);

INSERT INTO role (id, title, salary, Department_id)
VALUES (4, "HR Consultant", 60000, 2);

INSERT INTO role (id, title, salary, Department_id)
VALUES (5, "HR Director", 80000, 3);

INSERT INTO role (id, title, salary, Department_id)
VALUES (6, "Big Boss Man", 110000, 3);

-- Employee name examples -- 

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Robert", "Kraft", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Michael", "Cheese", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jackson", "Mississippi", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Bingo", "Washisnamo", 3, null);



