const integers = [1, 2, 3, 4, 5, 6, 7, 8];

const positive = integers.every(function(num){
    return num > 0
});
if (positive) {
    console.log("All numbers are positive");
} else {
    console.log("Some of the numbers are negative");
};

const squarednum = integers.map(function(num){
    return num ** 2
});
console.log(squarednum);

const randoms = ["Akvariumi", "14", "Shreki", "32"];
const hasNumber = randoms.some(function(item){
    return !isNaN(Number(item))
});
console.log(hasNumber);

const ints = [100, 200, 50];
const result = ints.map(function(int){
    return int - (int * 20 / 100)
});
console.log(result);