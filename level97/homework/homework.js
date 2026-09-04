const div1 = document.getElementById("div1");
const p1 = document.getElementById("p1");
const btn1 = document.getElementById("btn1");

btn1.style.width = "50px";
btn1.style.height = "20px";

btn1.addEventListener("click", () => {
    if (p1.innerHTML === "yes") {
        p1.innerHTML = "no";
    } else {
        p1.innerHTML = "yes"
    }
})


const div2 = document.getElementById("div2");
const btn2 = document.getElementById("btn2");

div2.style.width = "200px";
div2.style.height = "200px";
div2.style.marginTop = "30px";
btn2.style.width = "50px";
btn2.style.height = "50px";

btn2.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

let randomColor = `rgb(${r}, ${g}, ${b})`
div2.style.backgroundColor = randomColor;
});


const div3 = document.getElementById("div3");
const btn3 = document.getElementById("btn3");
const p2 = document.getElementById("p2");

btn3.style.width = "100px"
btn3.style.height = "50px"
btn3.style.marginTop = "25px"

btn3.addEventListener("mouseover", () => {
    if (p2.innerHTML === "name: ") {
        p2.innerHTML = "name: Lile";
    } else {
        p2.innerHTML = "name: "
    }
});

const div4 = document.getElementById("div4");
const btn4 = document.getElementById("btn4");
const p3 = document.getElementById("p3");

btn4.style.width = "40px";
btn4.style.height = "30px";
btn4.style.marginTop = "20px";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let currentIndex = 0;

btn4.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % alphabet.length;
    p3.textContent = alphabet[currentIndex]
    if (currentIndex % 2 === 0) {
        p3.style.color = "red";
    } else {
        p3.style.color = "blue";
    }
})