let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let RemovedNumbers = numbers.splice(2, 3);
console.log(numbers);
console.log(RemovedNumbers);

for (let i = 0; i < RemovedNumbers.length; i++) {
    console.log(RemovedNumbers[i]);
}

for (let i = 100; i <= 200; i += 5) {
    console.log(i);
}

for (let i = 200; i >= 100; i -= 5) {
    console.log(i);
}