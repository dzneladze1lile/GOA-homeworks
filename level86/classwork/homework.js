fruits = ["Apple", "pineapple", "banana"];
fruits.push("peach");
console.log(fruits);

numbers = [1, 2, 3, 4];
numbers.pop();
console.log(numbers);

words = ["I", "am", "from", "Georgia"];
console.log(words.join("-"));

randoms = ["divani", "balishi", "chanta", "fechi", "magida", "hidroelectrosadguri"]
console.log(randoms.slice(2, 4));

cities = ["London", "New York", "Tokyo", "Tbilisi", "Berlin", "Paris", "Dubai"];
const removed = cities.shift();
console.log(cities);
console.log(removed);

nums = [1, 2, 3, 4, 5, 6,];
nums.unshift(0);
console.log(nums);
console.log(nums.length);

animals = ["Monkey", "Tiger", "Lion"];
birds = ["Eagle", "Crow", "Parrot"];
const together = animals.concat(birds);
console.log(together)

let List = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
let removed1 = List[3][1];
console.log(List)
console.log(removed1)
