const btn1 = document.getElementById("dark-light");
const btn2 = document.getElementById("completed");
const p1 = document.getElementById("mainp");
const p2 = document.getElementById("task");
const div = document.getElementById("tasks");

let darkmode = false;
console.log(darkmode);

const darkModeFunc = () => {
    darkmode = !darkmode
    console.log(darkmode);

    if (darkmode) {
        btn1.textContent = "Light mode";
        document.body.style.backgroundColor = "#131516";
        div.style.border = "solid white";
    } else {
        btn1.textContent = "Dark mode";
        document.body.style.backgroundColor = "white";
        div.style.border = "solid black";
    }
};

btn1.onclick = darkModeFunc;

