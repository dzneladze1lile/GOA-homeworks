const intNums = [2, 5, 15, 31, 16, 67];
const allabove20 = intNums.every(function(num){
    return num > 20;
});
if (allabove20) {
    console.log("Every Element is more than 20");
} else {
    console.log("Every Element is not more than 20");
};

const names = ["Alice", "John", "Susie", "William"];
const Snames = names.filter(function(name){
    return name[0] === "S"
});
console.log(Snames);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddnums = [];
for (let i = 1; i < numbers.length; i++) {
    if (i % 2 === 0) {
        oddnums.push(i);
    } else {
        console.log(`${i} is not an odd Number`);
    }
};
console.log(oddnums);

const names1 = ["Sandro", "Anano", "Giorgi", "Anastasia", "Demuri", "Kristina"];
const name6 = names1.every(function(name1){
    return name1 > 6;
});
if (name6) {
    console.log("Every name has more than 6 letters");
} else {
    console.log("Every name has not got more than 6 letters");
};

const myself = {
    firstName: "Lile",
    lastname: "Dzneladze", 
    age: 14, 
    height: 175,
    weight: 51
}
console.log(`My name is ${myself.firstName}, my last name is ${myself.lastname}. I am ${myself.age} years old. My height is ${myself.height}cm and my weight is ${myself.weight}kg.`);