const jsonString = `
{
  "name": "Aleix Melon",
  "id": "E00245",
  "role": ["Dev", "DBA"],
  "age": 23,
  "doj": "11-12-2019",
  "married": false,
  "address": {
    "street": "32, Laham St.",
    "city": "Innsbruck",
    "country": "Austria"
  },
  "referred-by": "E0012"
}`;

try {

  console.log("step 1- Convert employee-info.json one to object");
  const data = JSON.parse(jsonString);
  console.log("object");
  console.log(data);


  console.log("step 2-Log on console role 'DEV'");
  console.log(data.role[0]);


  console.log("step 3-Log only last name 'Melon'");
  console.log(data.name.split(" ")[1]);


  console.log("step 4-Log only joining year of employee -> 2019");
  console.log(new Date(data.doj).getFullYear());

  console.log("no error");
} catch (error) {
  console.error("Error:", error.message);
}
