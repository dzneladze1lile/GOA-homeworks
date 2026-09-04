// getElementById ეძებს id ს და აბრუნებს მხოლოდ  ერთ ელემენტს.
const paragraph = document.getElementById("p1");
paragraph.style.color = "red";

const btn = document.getElementById("btn1")
btn.style.color = "green"

// getElementsByTagName ეძებს ყველა ერთნაირ თეგს. აბრუნებს სიას.
const paragraphs = document.getElementsByTagName("p");
paragraphs[0].innerHTML = "hi";

// getElementByClassName ეძებს ყველა ელემენტს რომელსაც აქვს ერთი და იგივე კლასი. აბრუნებს სიას.
const buttons = document.getElementsByClassName("btn")
console.log(buttons.length)

// querySelector პოულობს პირველ ელემენტს რომელიც შეესაბამება css სელექტორს.
const firstp = document.querySelector("p");
console.log(firstp)

// querySelectorAll პოულობს ყველა ელემენტს რომელიც css სელექტორს შეესაბამება.
const allbtns = document.querySelectorAll("button")
console.log(allbtns);

const btns = document.querySelectorAll(".btn")
console.log(btns.length)



