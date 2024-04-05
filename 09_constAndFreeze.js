const person = {

    name: "Gajanan",

    city: "Pune",

    experience: 10

}

// Not allowed

// person = { 

//     pin: 12345

// }

console.log(person);

person.city= "Mumbai";

console.log(person);
const address = {

    flatNumber: 1005,

    wing: "B2 Block",

    street: "Wakad"

}

console.log(address);

Object.freeze(address);

 

address.street = "Kharadi";// Won't reflect this change as object address is freezed

console.log(address);


const result = "street" in address;
console.log(result);

console.log("pin" in address);

const keys = Object.keys(address);
console.log(keys);

const values = Object.values(address)
console.log(values);