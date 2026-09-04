// ვებსაიტის ეკრანზე გამოსაჩენად ბრაუზერი გადის 3 გზას: parsing, manipulation, renter.
// DOM html დოკუმენტის სტრუქტურას წარმოადგენს. როცა ბრაუზერი გვერდს ტვირთავს DOM ყველა თეგს აქცევს ობიექტად და js ს ამ ობიექტების გამო შეუძლის რაღაცების შეცვლა.

const div1 = document.getElementById("div1");
const btn1 = document.getElementById("btn1");

div1.style.width = "100px";
div1.style.height = "100px";
div1.style.background = "red";


btn1.addEventListener("click", () => {
    if (div1.style.background === "red") {
        div1.style.background = "blue";
    } else {
        div1.style.background = "red";
    }
});


const div2 = document.getElementById("div2");
const btn2 = document.getElementById("btn2");

let size = 50;
div2.style.width = size + "px";
div2.style.height = size + "px";
div2.style.background = "green";

btn2.addEventListener("click", () => {
    size += 10;
    div2.style.width = size + "px";
    div2.style.height = size + "px";
});

const btn3 = document.getElementById("btn3");
const p1 = document.getElementById("p1");

btn3.style.height = "100px";
btn3.style.width = "100px"
btn3.style.marginLeft = "50px"

btn3.addEventListener("click", () => {
    if (p1.innerHTML === "Lile") {
        p1.innerHTML = "Lile Dzneladze";
    } else {
        p1.innerHTML = "Lile";
    }
});

const btn4 = document.getElementById("btn4");
const p2 = document.getElementById("p2");

btn4.style.width = "50px";
btn4.style.height = "50px";
btn4.addEventListener("click", () => {
    let num = Number(p2.innerHTML);
    let result = num * 2
    p2.innerHTML = result;

})
