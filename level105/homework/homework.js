const div1 = document.getElementById("div1");

const firstElement = document.createElement("h1");
firstElement.textContent = "Hello World";
div1.appendChild(firstElement);

const secondElement = document.createElement("h2");
secondElement.textContent = "h2";
div1.appendChild(secondElement);

const thirdElement = document.createElement("h3");
thirdElement.textContent = "h3";
div1.appendChild(thirdElement);

const fourthElement = document.createElement("h4");
fourthElement.textContent = "h4";
div1.insertBefore(fourthElement, secondElement);


div1.firstElementChild.remove()

const myDiv = document.querySelector("#div2");
myDiv.removeChild(myDiv.children[1].remove());