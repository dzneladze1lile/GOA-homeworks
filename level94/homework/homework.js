const car = {
    brand: "BMW",
    model: "M4 G82"
};
car.year = 2024;
console.log(car);

const calculator = {
    add: function(a, b) {
        return a + b
    }
}
let result = calculator.add(10, 5);
console.log(result);

const user = {
    name: "Grisha", 
    age: 15
};
delete user.age;
user.weight = 60;
console.log(user);

const book = {
    title: "The Inheritance Games",
    author: "Jennifer Lynn Barnes"
};
book.title = "The Hawthorne Legacy";
console.log(book.title);

for (let i in car) {
    console.log(i);
}
