// setInterval იმეორებს რაიმე მოქმედებას მითითებული დროის ინტერვალით უსასრულოდ.
// clearInterval დახმარებით შეგვიძლია გავაჩეროთ setInterval ის რაიმე ჩართული უსასრულო ციკლი.

let count = 0;
const print = () => {
    console.log("Hello World");
    count++

    if (count === 10) {
        clearInterval(interval)
        console.log("Timer stopped")
    }
}

let interval = setInterval(print, 1000)
