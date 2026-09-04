const sumOfNumbers = (...numbers) => {
  console.log(numbers.reduce((acc, cur) => acc + cur))
}

sumOfNumbers(7);
sumOfNumbers(2, 3);
sumOfNumbers(777, 541, 21);



const originalList = [1, 2, 3];
const copiedList = [...originalList];

console.log(copiedList);

const originalObject = { name: "Lile", age: 15 };
const copiedObject = { ...originalObject };

console.log(copiedObject);