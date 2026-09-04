const div1 = document.getElementById("div1");

const firstElement = document.createElement("p");
firstElement.textContent = "Hello World";
div1.appendChild(firstElement);

const secondElement = document.createElement("button");
secondElement.textContent = "Click me";
div1.appendChild(secondElement);

const thirdElement = document.createElement("h1")
thirdElement.textContent = "Hello";
div1.appendChild(thirdElement);

const fourthElement = document.createElement("h2")
fourthElement.textContent = "h2";
div1.appendChild(fourthElement);

const fifthElement = document.createElement("h3");
fifthElement.textContent = "h3";
div1.appendChild(fifthElement);


div1.firstElementChild.remove()
div1.lastElementChild.remove()


