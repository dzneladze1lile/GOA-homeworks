const users = JSON.parse(localStorage.getItem("users")) || [];

const userForm = document.querySelector("form");

userForm.addEventListener("submit", (e) => {
    e.preventDefault();

const formElements = e.target.elements;

const firstnameValue = formElements.Firstname.value;
const lastnameValue = formElements.Lastname.value;
const ageValue = formElements.age.value;
const genderValue = formElements.gender.value;

const userObject = {
    firstname:firstnameValue,
    lastname:lastnameValue,
    age:ageValue,
    gender:genderValue
}

users.push(userObject);
localStorage.setItem("users", JSON.stringify(users));

e.target.reset();
console.log(users);
});