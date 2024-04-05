class Student {
    constructor(rollNumber, name, division) {
      this.rollNumber = rollNumber;
      this.name = name;
      this.division = division;
    }
  
    getDetail() {
      return `Roll Number: ${this.rollNumber}, Name: ${this.name}, Division: ${this.division}`;
    }
  }
  
 
  const student1 = new Student(11, 'Alice', 'A');
  const student2 = new Student(12, 'Bob', 'B');
  const student3 = new Student(13, 'Charlie', 'C');
  

  console.log(student1.getDetail());
  console.log(student2.getDetail());
  console.log(student3.getDetail());
  