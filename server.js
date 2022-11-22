const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeetracker_db'

});

const organization = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            message: ('What would you like to do?'),
            choices: [ 'View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 
                        'View All Departments', 'Add Department', 'Quit'],
            name: 'todo',
        }
    ])

    .then((choice) => {
        switch(choice.todo) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployee();
                break;
            default:
                process.exit();

        }
    })
};

const viewDepartments = () => {
    var query = 'SELECT * FROM departments';
    db.query(query, function (err, res) {
        console.table(res)

        organization()
    })
}

const viewRoles = () => {
    var query = 'SELECT * FROM roles ';
    db.query(query, function (err, res) {
        console.table(res)

        organization()
    })
}

const viewEmployees = () => {
    var query = 'SELECT * FROM employees';
    db.query(query, function (err, res) {
        console.table(res)

        organization()
    }) 
}

const addDepartment = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the department?',
                name: 'name'
            },
        ])

        .then((res) => {
            var query = `INSERT INTO departments (name) VALUES ('${res.name}')`
            db.query(query), (err, result) => {
                console.log(result)                
            }
            organization()
        })
}

const addRole = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'salary'
        },
    
        {
            type: 'input',
            message: 'What is the department ID?',
            name: 'title'
        }
    ])

    .then((res) => {
        var query = `INSERT INTO roles (title, salary, department_id) VALUES ('${res.name}', '${res.salary}', '${res.title}')`
        db.query(query), (err, result) => {
            console.log(result)            
        }
        organization() 
    })
}

const addEmployee = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the employee\'s first name?',
                name: 'first'
            },
            {
                type: 'input',
                message: 'What is the employee\'s last name?',
                name: 'last'
            },
            {
                type: 'input',
                message: 'What is the employee\'s role ID?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'What is the employee\'s manager ID?',
                name: 'manager'
            }
        ])

        .then((res) => {
            var query = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${res.first}', '${res.last}', '${res.title}', '${res.manager}')`
            db.query(query), (err, result) => {
                console.log(result)
            }
            organization()
            
        });
}

const updateEmployee = () => {
    return inquirer
        .prompt([
           
            {
                type: 'input',
                message: 'What is the employee\'s ID?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Enter employee\'s new role ID?',
                name: 'newRole'
            }

        ])

        .then((res) => {

            var query = `UPDATE employees SET role_id=? WHERE id=?`
            db.query(query, [res.newRole, res.title]), (err, results) => {
                console.log(results)
            }
            organization()
        })
}

organization()