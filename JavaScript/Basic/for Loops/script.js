// for loop
function printNum(endCount) {
  for (let i = 1; i <= endCount; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

printNum(5);

// --------------------------------------------------

// for..in -> use to iterate through the property of object
const student = {
  id: "ASYR214DSG",
  name: "Rahul",
  year: 3,
  branch: "CSE",
  age: 19,
};

for (let prop in student) {
  console.log(prop + ": " + student[prop]);
}
console.log("-------------");

// --------------------------------------------------------

// for..of -> use to iterate the iterable DS like String, Array, Map
const org = "pplWork Company";

for (let ch of org) {
  console.log(ch);
}
console.log("--------------------------");

const arr = ["p", "p", "l", "W", "o", "r", "k"];
for (let ch of arr) {
  console.log(ch);
}

// while loop -> runs based on the condition 
let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}

// do..while loop -> atleast runs one time, afterward based on the condition 
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 6);
