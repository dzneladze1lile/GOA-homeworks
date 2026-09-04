const sumbtn = document.getElementById("sum");
const myForm = document.querySelector("form");

function calculateSum(e) {
    e.preventDefault();


const num1 = parseInt(document.getElementById("num1").value);
const num2 = parseInt(document.getElementById("num2").value);

const sum = num1 + num2
console.log(sum);
}

sumbtn.addEventListener("click", calculateSum)

