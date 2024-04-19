

let array = [2, 4, 1, 7, 8, 9];

const sum = array.reduce((runningTotal, currentValue)=>{
 return runningTotal+currentValue;
}, 0);
console.log(sum);

class Employee{
    constructor(emp_id, emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    detail(){
console.log(`Employee Details => ID: ${this.emp_id}, Name : ${this.emp_name},Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);
    }
}
const anil=new Employee(22,"Anil","IT",50000,"TCS");
const radha=new Employee(33,"Radha","HR",74000,"Wipro");
const rishi=new Employee(55,"Rishi","Fianance",47000,"TCS");
const sonali=new Employee(66,"Sonali","Fianance",45000,"Infy");
const monika=new Employee(77,"Monika","IT",40000,"Wipro");
const vinay=new Employee(88,"Vinayak","IT",75000,"TCS");
const mahi=new Employee(99,"Mahesh","HR",85000,"Infy");