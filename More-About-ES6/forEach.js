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

// const names = products.map(product => product.name);
// console.log(names);

// const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(p => console.log(p.id));

// const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);

// const affordable = products.find(p => p.price < 50000);
// console.log(affordable);

// const total = products.reduce((accum, current) => (accum + current.price), 0);
// console.log(total);

class Product{
    country = "Bangladesh";
    constructor(name){
        this.name = name;
    }
    speak(talk){
        // console.log(`Talking about ${talk}`);
    }
}

const walton = new Product("Walton");
// console.log(walton);
// walton.speak("What are you talking about?");

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log("Sir is teaching Math.");
    }
}

const teacher = new Teacher("Tapon Sir", "Physics");
// console.log(teacher);

const rashid = new Teacher("Rashid Sir", "English");
// console.log(rashid);

class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log("Car is not moving");
    }
}

const vehicle = new Vehicle("Land Cruiser", 15000000);
// console.log(vehicle);

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        
    }
}