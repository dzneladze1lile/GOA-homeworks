const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(eachnum) {
    console.log(`${eachnum}`)
});

const names = ["John", "Sarah", "Mike"];
names.forEach(function(greet){
    console.log(`Hello ${greet}`);
});

let total = 0;
const nums = [10, 20, 30, 40, 50]
nums.forEach(function(sum){
    total = total += sum
});
console.log(total);

const words = ["javascript", "is", "awesome"];
words.forEach(function(word){
    console.log(`${word} has ${word.length} letter.`)
});

const students = ["Alice", "Max", "William", "Henry"]
students.forEach(function(student, index){
    console.log(`${student} is on ${index} index`)
});



const multiplyByTwo = [1, 2, 3];
multiplyByTwo.map(function(each){
    console.log(each * 2)
});

const celsiusTemperatures = [0, 10, 20, 25, 30];
const fahrenheitTemperatures = celsiusTemperatures.map(function(celsius) {
  const fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit
})
console.log(fahrenheitTemperatures);

const namess = ["jacob", "dean", "anano", "ema"];
namess.forEach(function(names){
    console.log(names.toUpperCase())
});

const users = [
  { name: "John", age: 20 },
  { name: "Sarah", age: 25 }
];
const namesOnly = users.map(function(user) {
  return user.name;
});
console.log(namesOnly); 

const numberss = [1, 2, 3, 4, 5, 6];
numberss.map(function(num){
    console.log(`Number: ${num}`)
});