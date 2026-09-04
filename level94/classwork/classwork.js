const person = {
    name: "Koba", 
    age: 62, 
    city: "Rustavi"
}
console.log("My name is " + person.name + " and i live in " + person.city);
person.height = 150;
person.age = 67;
console.log(person);

const group = {
    group: 77, 
    studyInfo: function() {
        console.log("I study in group 77");
    }
}
group.studyInfo();

for (let i in person) {
    delete person[i];
};
console.log(person);


const lastname = "Dzneladze"
for (let i in lastname) {
    console.log(lastname[i]);
};