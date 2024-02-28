// setInterval(doSomething);
// setTimeout(doSomething);
// setTimeout(doSomething, 4000);
setTimeout(() => {
    console.log("Lazy logged");
}, 4000);

let a = 5;

function add(num1, num2){
    const result = num1 + num2 + a;
    return result;
}

const sum = add(4, 5);
// console.log(sum);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

function doSomething(){
    console.log(3);
}

// doSomething();