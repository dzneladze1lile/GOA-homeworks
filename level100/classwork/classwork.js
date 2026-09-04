const numbers = [1, 2, 3, 4, 5];
const [first, second, third, fourth, fifth] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);

const person = {
    FirstName: "Ani",
    age: "22", 
    familyname: "saxelashvili"
}
const {FirstName, familyname: lastname} = person;
console.log(FirstName);
console.log(lastname);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
