const box = document.querySelector("#box");
let left = 0;
let topPos = 0;
let direction = "right";

const myAnimation = setInterval(() => {
    if (direction === "right") {
        left++;
        if (left === 170) {
            direction = "down";
        }
    } 
    else if (direction === "down") {
        topPos++;
        if (topPos === 170) {
            direction = "left";
        }
    } 
    else if (direction === "left") {
        left--;
        if (left === 0) {
            direction = "up";
        }
    } 
    else if (direction === "up") {
        topPos--;
        if (topPos === 0) {
            direction = "right";
        }
    }

    box.style.left = `${left}px`;
    box.style.top = `${topPos}px`;
}, 10);

box.addEventListener("click", () => {
    clearInterval(myAnimation);
});