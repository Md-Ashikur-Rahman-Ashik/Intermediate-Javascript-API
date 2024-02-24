const money = 25;
// money = 50;

const rich = money + 25;
// console.log(rich);

let count = 0;
count = count + 10;
// console.log(count);

// const numbers = [23, 4, 23, 12, 56];
// numbers[1] = 55;
// numbers.push(8, 9, 65);
// console.log(numbers);

const student = {
    name: "Bird",
    class: 12,
}

// console.log(student);

// function add(num1 = 0, num2 = 0){
//     const result = num1 + num2;
//     console.log("First number is", num1);
//     console.log("Second number is", num2);
//     return result;
// }

// const sum = add(5, 7);
// const sum = add(5);
// console.log("The result is:", sum);

function fullName(firstName, lastName = ""){
    const full = firstName + " " + lastName;
    return full;
}

// const first = "Jan";
// const last = "uary"
// const name = first + last;
// console.log(name);

// const numbers = [45, 48, 98, 78, ]

function add(a, b){
    const result = a + b;
    return result;
}

// const sum = add(5, 90);
// console.log(sum);

const secondAdd = function(a, b){
    return a + b;
}

const thirdAdd = (a, b) => a + b;

const sum = thirdAdd(3, 5);
// console.log(sum);

const math = Math.max(6, 23, 45, 1, 89, 23);
// const numbers = [2, 3, 5, 45, 5, 43, 90, 32, 15];
// const arrayMax = Math.max(...numbers);

// console.log(arrayMax);
// console.log(arrayMax);
// console.log(math);

const nums = [4, 5, 87, 9];
const secondNums = nums;
secondNums.push(12);
// console.log(secondNums);
// console.log(nums);

const actor = {
    name: "Random",
    age: 30,
    phone: "01871256265",
    money: 1234567895,
}

// console.log(actor.phone);

// const numbers = [45, 99];
// const [first, second] = numbers;

const [x, y] = [12, 66];

const glass = {
    name: "Glass",
    color: "Golden",
    price: 12,
    isCleaned: true,
};

// console.log(glass);
const keys = Object.keys(glass);
// console.log(keys);
const values = Object.values(glass);
// console.log(values);

const pair = Object.entries(glass);
// console.log(pair);
// delete glass.isCleaned;
// console.log(glass);

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

Object.freeze(glass);
glass.source = "Bangladesh";
console.log(glass);