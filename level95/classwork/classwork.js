//ობიექტი არის მონაცემთა ტიპი, რომელიც ინახავს ინფორმაციას. ის საშუალებას გვაძლევს ერთ ცვლადში დავაჯგუფოთ სხვადასხვა ტიპის მონაცემები.
//კუთვნილება არის ობიექტის შიგნით არსებული ცვლადი. იგი შედგება სახელისგან (Key) და მნიშვნელობისგან (Value). მნიშვნელობა შეიძლება იყოს ნებისმიერი მონაცემთა ტიპი.
//მეთოდი არის ობიექტის კუთვნილება, რომლის მნიშვნელობაც არის ფუნქცია. მეთოდი გამოიყენება ობიექტის შიგნით არსებულ მონაცემებზე რაიმე ლოგიკის შესასრულებლად.

const player = {
    name: "Gio",
    score: 10,
    increaseScore() {
        player.score = player.score + 1;
        console.log(player.score);
    }
};
player.increaseScore();


const hero = {
    name: "Giviko", 
    health: 7400, 
    takeDamage() {
        hero.health = hero.health -= 1000
        console.log(hero.health)
    }
}
hero.takeDamage()



const dragon = {
    name: "Drogon",
    firePower: 50000, 
    isHungry: true
}
for (let i in dragon) {
    if (i === "firePower" && dragon[i] > 7000) {
        console.log("You are cooked")
    } else {
        console.log(i + ": " + dragon[i])
    }
};

products = ['Milk', 'Bread', 'Water', 'Chocolate'];
for (let i  of products) {
    if (i === "Chocolate") {
        console.log('Found it! Adding to card')
    } else {
        console.log('Searching Chocolate... Next')
    }
}