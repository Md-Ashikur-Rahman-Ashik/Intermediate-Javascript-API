const first = 2;
const second = 2;
// if(first == second){
//     console.log("Values are equal");
// }
// else{
//     console.log("Values are not equal");
// }

// if(first === second){
//     console.log("Values are equal");
// }
// else{
//     console.log("Values are not equal");
// }

function add(a, b){
    const total = a + b;
    // console.log(a, b);
    if(b > 5){
        const sum = 25 + a + b;
    }
    else{
        const sum = 5 + a + b;
        var current = sum;
    }
    // console.log(sum);
    console.log(current);
    return total;
}

// console.log(a, b);
// add(5, 3);

// function stopWatch(){}
function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
// console.log(firstServer);
// console.log(firstServer());

function greeting(greetingHandler, name){
    // console.log(greetingHandler());
    greetingHandler(name);
}

// const name = "Halim Uncle"
// const number = 45;
// const numbers = [45, 54, 78];
// const laptop = {
//     price: 45000,
//     brand: "Walton",
//     memory: "8gb",
// }

function greetingHandler(name){
    console.log("As Salamu Alaikum", name);
}

function greetEvening(name){
    console.log("Good Evening", name);
}

function greetNight(name){
    console.log("Good Night,", name);
}

// greeting(greetingHandler, "Tom Hanks");
// greeting(greetEvening, "Tom Solaiman");
// greeting(greetNight, "Rasel");

function sum(a, b, c){
    // console.log(arguments[4]);
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}

const total = sum(45, 89, 12, 15, 17);
// console.log(total);
// console.log(typeof sum);
// console.log(sum.length);

let num1 = 5;
let num2 = 7;

// function multiply(num1, num2){}
function multiply(a, b){
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
// console.log(output);

// let numbers = []
let studentOne = {
    name: "Jalil",
    partner: "Khalid",
};
let studentTwo = {
    name: "Raj",
    partner: "Farhan"
}

function makeMovie(businessOne, businessTwo){
    businessOne.name = "Nafees";
    businessTwo.partner = "Salim";
}

// console.log(studentOne);
// console.log(studentTwo);
console.log(studentOne, studentTwo);

makeMovie(studentOne, studentTwo);
console.log(studentOne, studentTwo);