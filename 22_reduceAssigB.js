class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

// Create employee objects
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

// 1. Find all employees from 'Wipro' company
employees = [
    {"Emp Id": 33, "Name": "Radha", "Department": "HR", "Salary": 74000, "Company": "Wipro"},
    {"Emp Id": 77, "Name": "Monika", "Department": "IT", "Salary": 40000, "Company": "Wipro"}
]

employees = [
    {"Emp Id": 22, "Name": "Anil", "Department": "IT", "Salary": 50000, "Company": "TCS"},
    {"Emp Id": 33, "Name": "Radha", "Department": "HR", "Salary": 74000, "Company": "Wipro"},
    {"Emp Id": 77, "Name": "Monika", "Department": "IT", "Salary": 40000, "Company": "Wipro"},
    {"Emp Id": 88, "Name": "Vinayak", "Department": "IT", "Salary": 75000, "Company": "TCS"},
    {"Emp Id": 99, "Name": "Mahesh", "Department": "HR", "Salary": 85000, "Company": "Infy"}
]

employees = [
    {"Emp Id": 22, "Name": "Anil", "Department": "IT", "Salary": 50000, "Company": "TCS"},
    {"Emp Id": 77, "Name": "Monika", "Department": "IT", "Salary": 40000, "Company": "Wipro"},
    {"Emp Id": 88, "Name": "Vinayak", "Department": "IT", "Salary": 75000, "Company": "TCS"},
    {"Emp Id": 99, "Name": "Mahesh", "Department": "HR", "Salary": 85000, "Company": "Infy"}
]