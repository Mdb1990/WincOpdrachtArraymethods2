/** @format */

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

// Hier komt jouw functie
const findSpiderMan = (item) => item.find(({ name }) => name === "Spiderman");

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

const doubleArrayValues = (array) => array.map((x) => x * 2);
console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

const containsNumberBiggerThan10 = (array) => {
  return array >= 10;
};

//a.every((el) => el > 3);
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11].filter(containsNumberBiggerThan10)));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2].filter(containsNumberBiggerThan10)));
// result should be false

const isItalyInTheGreat7 = (array) => array.includes("Italy");

console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);
// result should be true

const tenfold = (item, index, arr) => {
  arr[index] = item * 10;
};

const numbers = [1, 4, 3, 6, 9, 7, 11];
numbers.forEach(tenfold);

console.log(numbers);
//console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

const isBelow100 = (array) => {
  if (array >= 100) {
    return true;
  } else {
    return false;
  }
};

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]));

// result should be: false

const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(bigSum.reduce(reducer));
// result should be 1118

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15


