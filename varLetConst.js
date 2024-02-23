const money = 25;
// money = 50;

const rich = money + 25;
// console.log(rich);

let count = 0;
count = count + 10;
// console.log(count);

const numbers = [23, 4, 23, 12, 56];
numbers[1] = 55;
numbers.push(8, 9, 65);
// console.log(numbers);

const student = {
    name: "Bird",
    class: 12,
}

// console.log(student);

function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log("First number is", num1);
    console.log("Second number is", num2);
    return result;
}

const sum = add(5, 7);
// const sum = add(5);
// console.log("The result is:", sum);

function fullName(firstName, lastName = ""){
    const full = firstName + " " + lastName;
    return full;
}

const first = "Jan";
const last = "uary"
const name = first + last;
console.log(name);