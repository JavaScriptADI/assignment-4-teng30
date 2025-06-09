
let students = [
   {
   name: "tengo",
   gpa: 4
   },
   {
   name: "gio",
   gpa: 4
   },
   {
    name: "lomidze",
    gpa: 3.8
   }
];

let names = "";
let sum = 0;

for (let i = 0; i < students.length; i++){;
    names +=` ${students[i].name}` 
};

for (let i = 0; i < students.length; i++){;
    sum += students[i].gpa 
};
 
average = sum / students.length;

console.log(`the average gpa of ${names} is ${average}`);
