class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const ali = new Person("Mohammad Ali", 21);
// console.log(ali);
// ali.sleep();

const badam = new Person("Badam", 23);
// console.log(badam);
// badam.sleep();

// const lazy = ali.sleep;
// lazy();

const person = {
    name: "Mohammad Ali",
    job: "Fighter"
}

// console.log(person.job);
console.log(person["job"]);