const myDate = new Date(2025, 6, 14, 5, 10, 32);
console.log(myDate);

myDate.setHours(12);
myDate.setMinutes(56);
myDate.setSeconds(10);

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());


const now = new Date()
console.log(now)

const nowMs = Date.now()
console.log(nowMs);