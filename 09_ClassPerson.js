class Person {
  
    constructor(myName, myCity, myAge){
        this.name = myName;
        this.city = myCity;
        this.aAge = myAge;
        
    }
    detail(){
        console.log(`Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}
const jenny = new Person("Jenny","Pune", 22);
console.log(jenny);

const bill = new Person("Bill","Mumbai", 24);
console.log(bill);

const elon = new Person("Elon","Mumbai", 24);
console.log(elon);

console.log(`===== Traversing array object ======`);
const array = [jenny, bill, elon];
for (const element of array) {
   element.detail(); 
}
