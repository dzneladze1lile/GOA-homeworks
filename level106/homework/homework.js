const btns = document.getElementsByClassName("btns");
const div1 = document.getElementById("itemsDiv");


let itemNumber = 1;
let isDark = false;

const AddItem = () => {
    const item = prompt("Add Item: ")

itemsDiv.innerHTML += `
<div class = "item">
<b>#${itemNumber}</b>
<p>${item}</p>
<button onclick = "this.parentElement.remove()">Delete</button>
</div>`

itemNumber++
};

const deleteAllItems = () => {
    itemsDiv.innerHTML = "";
};

const changeTheme = () => {
    isDark = !isDark;
    if(isDark) {
        document.body.className = "dark"
        btns[2].textContent = "Light mode"
    } else {
        document.body.className = "light"
        btns[2].textContent = "Dark mode"
    }
}

btns[0].addEventListener("click", AddItem);
btns[1].addEventListener("click", deleteAllItems);
btns[2].addEventListener("click", changeTheme);
