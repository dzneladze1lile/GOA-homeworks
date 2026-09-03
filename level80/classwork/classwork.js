let name1 = "Lile";
switch (name1) {
    case "Davit":
        console.log("Hello Davit");
        break
    case "nikolozi":
        console.log("Hello nikoloz");
        break
    case "vazha":
        console.log("Hello vazha");
        break
    default:
        console.log("Wrong name");
}


function greet(name) {
    return `Hello ${name}`;
}

let message = greet("Lile");
console.log(message);



function multiplication(a,b) {
    return a * b;
}

let result = multiplication(3, 4);
console.log(result);



function substriction(a, b) {
    return a - b;
}

let result2 = substriction(10, 5);
console.log(result2);


function ageChecker(age) {
    if (age > 18) {
        console.log("Adult");
    } else {
        console.log("Teenager");
    }
}

let result3 = ageChecker(17);

