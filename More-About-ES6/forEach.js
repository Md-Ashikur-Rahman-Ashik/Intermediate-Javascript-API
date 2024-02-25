// const numbers = [1, 5, 6, 4, 15];
// const result = numbers.forEach(n => console.log(n));
// console.log(result);

const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p % 2 === 1);
// console.log(selected);

// const selected = players.find(player => player > 70);
// console.log(selected);

const numbers = [4, 5, 7, 1, 2, 66];
// const total = numbers.reduce((previous, current) => previous + current, 0);

// console.log(total);

// const sum = numbers.reduce((p, c) => (p + c), 0);
// console.log(sum);

const products = [
    {
        id: 1,
        name: "Walton",
        price: 65000,
    },
    {
        id: 2,
        name: "Doel",
        price: 45000,
    },
    {
        id: 3,
        name: "QBits",
        price: 40000,
    },
    {
        id: 4,
        name: "MacBook",
        price: 140000,
    },
]

const names = products.map(product => product.name);
// console.log(names);

const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(p => console.log(p.id));

const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);

const affordable = products.find(p => p.price < 50000);
// console.log(affordable);

const total = products.reduce((accum, current) => (accum + current.price), 0);
console.log(total);