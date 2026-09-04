const getAge = (age) => age * 2;
console.log(getAge(12))

const sayHello = (name) => `Hi ${name}`;
console.log(sayHello("Nino"))


function isEven(num) {
    return num % 2 === 0
}

function checkNumber(num) {
    if (isEven(num)) {
        return `${num} is an Even Number`
    } else {
        return `${num} is an Odd Number`
    }
}
console.log(isEven(5))

function greet() {
    console.log("Hello World")
}
greet()

let greet2 = "Hello World";
console.log(greet2);

const greet3 = () => console.log("Hello World");
greet3()