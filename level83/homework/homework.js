const multiplyByThree = (num) => num * 3;
console.log(multiplyByThree(2));


const isAdult = (age) => {                
    if (age >= 18) {
      return true
    } else {
      return false
    }
}
console.log(isAdult(20))


function first(number) {
    return number
}

function second(number) {
    return first(number) + 10
}

const third = second(10);
console.log(third)


function js1() {
    console.log("JavaScript is fun")
}
js1()

let js2 = "JavaScript is fun"
console.log(js2)

const js3 = () => console.log("JavaScript is fun")
js3()

