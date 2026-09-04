const phone = {
    brand: "Samsung", 
    model: "Galaxy S24 ultra", 
    aboutTelephone() {
        console.log(`this is ${this.brand} ${this.model}`)
    }
}
const phone1 = {
    brand: "Apple",
    model: "iphone 16 pro", 
    aboutTelephone() {
        console.log(`this is ${this.brand} ${this.model}`)
    }
}
phone.aboutTelephone()
phone1.aboutTelephone()



function myHobbies(hobby1, hobby2, hobby3) {
    return {
        hobby1: hobby1,
        hobby2: hobby2, 
        hobby3: hobby3,
        myHobbies() {
            console.log(`my hobbies are ${this.hobby1}, ${this.hobby2} and ${this.hobby3}`)
        }
    }

}
const btn = document.getElementById("btn")
btn.addEventListener('click', () => {
    const first = prompt("Enter your first Hobby:")
    const second = prompt("Enter your second Hobby:")
    const third = prompt("Enter your third Hobby:")
    const allhobby = myHobbies(first, second, third);
    console.log(allhobby)
});


function user(firstname, lastname, age) {
    return {
        firstname,
        lastname,
        age,
        userInfo() {
            console.log(`my name is ${this.firstname}, my lastname is ${this.lastname} and i am ${this.age} years old`);
        }
    }
}
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    const fname = prompt("Enter your firstname:");
    const lname = prompt("Enter your lastname:")
    const age = prompt("Enter your age:")
    if (fname && lname && age) {
        const newUser = user(fname, lname, age);
        console.log(newUser)
    } else {
        alert("Please enter your firstname, lastname and age")
    }
})