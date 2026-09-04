// forEach გადაუვლის და ცვლის ორიგინალ სიას, ანუ რასაც ვეტყვით იმას გაუკეთებს. არ აბრუნებს ახალს.
// map გადაუვლის ორიგინალ სიას და აბრუნებს ახალს. (ზუსტად იმდენი ელემენტი იქნება სიაში რამდენიც იყო).
// filter გადაუვლის სიას, მოსინჯავს სიაში არსებულ ელემენტს თითოეულ პირობაზე და თუ პირობა true ს გამოიტანს, ის ელემენტი გადააქვს ახალ საიში.
// reduce ამცირებს სიას, ანუ გამოაქვს 1 მნიშნელობა. მაგ: თუ სიაში 5 ელემენტია, reduce გამოიტანს ერთს.

const numbers = [5, 10, 15, 20, 25, 30];
numbers.forEach(function(num){
    console.log(`Number is: ${num}`);
});

const nums = [1, 2, 4, 5, 7, 8]; 
const nums1 = [];
nums.filter(function(odd5){
    if (odd5 % 2 === 0){
        nums1.push(odd5)
    } else if (odd5 > 5) {
        nums1.push(odd5)
    }
});
console.log(nums1);

const numbrs = [2, 4, 6, 8, 10];
const result = numbrs.reduce(function(acc, curValue){
    return acc + curValue
}, 0) / numbrs.length;
console.log(result);

const numbers1 = [1, 2, 3, 4, 5, 6];
const newNumbers1 = [];
numbers1.filter(function(numbers2){
    if (numbers2 % 2 === 0) {
        newNumbers1.push(numbers2)
    }
});
const multiplyThree = newNumbers1.map(function(numsTimesThree){
    return numsTimesThree * 3
});
const numssum = multiplyThree.reduce(function(acc, curValue) {
    return acc + curValue
}, 0);
console.log(newNumbers1);
console.log(multiplyThree);
console.log(numssum);
