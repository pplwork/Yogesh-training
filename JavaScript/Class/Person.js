class Person {
  name = "";
  age = 0;
  salary = 0;
  sex = "";

  constructor(name, age, salary, sex) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.sex = sex;
  }

  static sort(arr, field, order) {
    // shallow copy of arr
    let newArr = [...arr];
    quickSort(newArr, 0, newArr.length - 1, field);

    return order === "desc" ? newArr.reverse() : newArr;
  }
}

// QuickSort Algo
function quickSort(arr, start, end, field) {
  if (start < end) {
    let Pidx = partition(arr, start, end, field);

    quickSort(arr, start, Pidx - 1, field);
    quickSort(arr, Pidx + 1, end, field);
  }
}

// Partition of Array
function partition(arr, start, end, field) {
  const pivot = arr[end];
  let idx = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j][field] <= pivot[field]) {
      idx++;
      [arr[idx], arr[j]] = [arr[j], arr[idx]];
    }
  }

  idx++;
  [arr[idx], arr[end]] = [arr[end], arr[idx]];
  return idx;
}

const person = [
  ["zack", 32, 100400, "male"],
  ["raghav", 24, 44000, "male"],
  ["shivani", 30, 66000, "female"],
  ["mary", 26, 35000, "female"],
  ["steve", 36, 242343, "male"],
];

let arr = [];

// Construction of array of Person obj
person.forEach((el) => {
  arr.push(new Person(...el));
});

const sortedArr = Person.sort(arr, "name", "desc");
console.log(sortedArr);

// -------------- O/P -------------------
// [
//   Person { name: 'zack', age: 32, salary: 100400, sex: 'male' },
//   Person { name: 'steve', age: 36, salary: 242343, sex: 'male' },
//   Person { name: 'shivani', age: 30, salary: 66000, sex: 'female' },
//   Person { name: 'raghav', age: 24, salary: 44000, sex: 'male' },
//   Person { name: 'mary', age: 26, salary: 35000, sex: 'female' }
// ]