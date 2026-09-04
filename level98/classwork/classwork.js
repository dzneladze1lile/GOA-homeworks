const car =  {
    model: "Toyota", 
    brand: "RAV4",

    aboutCar() {
        console.log(`this is ${this.model} ${this.brand}`)
    }
}

const car1 = {
    model: "BMW", 
    brand: "M4",

    aboutCar() {
        console.log(`this is ${this.model} ${this.brand}`)
    }
}
car.aboutCar()
car1.aboutCar()



function createUser(firstname, lastname) {
    return {
    firstname: firstname,
    lastname: lastname, 
    sayHello() {
        console.log(`hello, my name is ${this.firstname} and my lastname is ${this.lastname}`)
    }
}
}
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const fname = prompt("Enter your firstname:")
    const lname = prompt("Enter your lastname:")

    if (fname && lname) {
        const newUser = createUser(fname, lname);
        console.log(newUser);
        newUser.sayHello()
    } else {
        alert("please Enter your firstname and lastname")
    }
});



function createFavorites(favoriteFilm, favoriteSong, favoriteAnimation) {
    return {
        favoriteFilm: favoriteFilm,
        favoriteSong: favoriteSong,
        favoriteAnimation: favoriteAnimation, 

        sayFavorites() {
            console.log(`My favoriteFilm is ${this.favoriteFilm}, my favoriteSong is ${this.favoriteSong} and my favorite animation is ${this.favoriteAnimation}`);
        }
    }
}
const btn1 = document.addEventListener("click", () => {
    const film = prompt("Enter your favorite film:");
    const song = prompt("Enter your favorite song:");
    const animation = prompt("Enter your favorite animation");
    const favorites = createFavorites(film, song, animation);
    console.log(favorites)
})