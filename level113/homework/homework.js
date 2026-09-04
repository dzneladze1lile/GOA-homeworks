const myForm = document.querySelector("form");

function submit(e) {
    e.preventDefault()


const username = document.getElementById("username").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value

console.log(username);
console.log(email);
console.log(password);
}

myForm.addEventListener("submit", submit);
