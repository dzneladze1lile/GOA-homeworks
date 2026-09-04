const person = {
    name: "sulxani", 
    age: "67", 
    height: "200"
}

let choice = prompt("Enter name, age or height");
console.log(person[choice]);
console.log(Object.entries(person));

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`)
}

// დესტრუქცია არის ობიექტის ან მასივის დაშლა, რაც საშუალებას გვაძლევს, ერთი მოქმედებით ამოვიღოთ მათგან სასურველი მონაცემები და პირდაპირ ცალკეულ ცვლადებს მივაკუთვნოთ.