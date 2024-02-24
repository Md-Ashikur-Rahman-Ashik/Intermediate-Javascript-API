const a = 56;
// const numbers = [56, 7, 8];
const person = {
    name: "Sakib Khan",
}

// const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`

const square = x => (x * x);

const data = [{
    id: 1,
    name: "Abul",
    address: "Nilkhet",
}];

// console.log(data.address);
// console.log(data);
// console.log(data[0]);
// console.log(data[0].address);

const secondData = {
    count: 5000,
    data: [
        {
            id: 1,
            name: "Walton laptop",
            price: 65000,
        },
        {
            id: 2,
            name: "Macbook",
            price: 165000,
        },
    ]
}

// console.log(secondData.data);
// console.log(secondData.data[1]);
// console.log(secondData.data[1].price);

const user = {
    id: 5001,
    name: "Shariful",
    address: {
        street: {
            first: "54/1 North side",
            second: "Poribag Goli",
            third: "No Dorai"
        },
        city: "Dhaka"
    }
}

// console.log(user.address);
// console.log(user.address.street.second);

const secondUser = {
    id: 5002,
    name: "Sagor",
    address: {
        city: "Chattagram",
        country: "Bangladesh"
    }
}

const numbers = [4, 5, 2, 8, 10];
// const doubled = [];

// for (let num of numbers){
//     const double = (num * 2);
//     doubled.push(double);
// }

// console.log(doubled);

function doubleIt(num){
    console.log("The current number is:", num);
    return (num * 2);
}

// const result = numbers.map(doubleIt);
// console.log(result);

const secondDouble = n => (n * 2);

const output = numbers.map(secondDouble);
console.log(output);