// const a = 5;
// console.log(typeof a);

// const b = "Learning Web Development";
// console.log(typeof b);

const ages = [45, 65, 48];
// console.log(typeof ages);

const student = {
    id: 23,
    class: 7
};
// console.log(typeof student);

// const d = true;
// console.log(typeof d);

// let x = 5;
// let y = x;

// console.log(x, y);

// y = 7;

// console.log(x, y);

// let p = {
    // job: "Web Developer"
// };
// let q = p;

// q = {
//     job: "Backend web developer"
// }

// q.job = "Front End Web Developer";

// console.log(p, q);

// let first;
// console.log(first);

function second(a, b){
    const total = a + b;
}

// const result = second();
// console.log(result);

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

// third(2, 5);

function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

// const total = noNegative(2, 5);
// console.log(total);

const fifth = {
    id: 2,
    name: "Poncom",
    age: 40,
}

// console.log(fifth.age);
// console.log(fifth.salary);

const sixth = [4, 89, 87, 56, 54];
// console.log(sixth[1]);
// delete sixth[1];
// console.log(sixth[5]);
// console.log(sixth);

const eighth = undefined;
const ninth = null;

const data = {
    results: [],
    updated: null,
}

// console.log(typeof undefined);
// console.log(typeof null);

const x = false;
// if(x){
//     console.log("Value of x is truthy");
// }
// else{
//     console.log("Value of x is falsy");
// }

const y = "";
// if(!y){
//     console.log("Value is falsy");
// }

const z = " ";
if(!!z){
    console.log("Value is truthy");
}