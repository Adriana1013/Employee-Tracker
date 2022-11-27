INSERT INTO departments (dept_name)
VALUES ("Marketing"),
       ("Design"),
       ("HR"),
       ("Accounting");

INSERT INTO roles (title, salary, department_id)
VALUES ("Marketing Coordinator", 60000, 1),
       ("Art Director", 170000, 2),
       ("Marketing Manager", 90000, 1),
       ("Accountant", 130000, 4),
       ("Graphic Designer", 65000, 2),
       ("Accounting Manager", 195000, 4),
       ("Human Resources Officer", 145000, 3),
       ("Benefits Admin", 80000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Elle", "Woods", 7, null),
       ("Regina", "George", 6, null),
       ("Jack", "Sparrow", 4, null),
       ("Forest", "Gump", 8, null),
       ("Ace", "Ventura", 1, null),
       ("Harry", "Styles", 5, null),
       ("Audrey", "Hepburn", 2, null),
       ("Jackie", "Kennedy", 3, null);
