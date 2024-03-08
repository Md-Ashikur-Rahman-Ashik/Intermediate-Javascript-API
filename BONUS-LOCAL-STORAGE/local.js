// localStorage.getItem("Hello");

// console.log(localStorage.getItem("Hello"));

const hello = localStorage.getItem("Hello");

// console.log(hello);

// A function for setting age
function setAge(){
    localStorage.setItem("Age", 19);
    const getAge = localStorage.getItem("Age");
    console.log(getAge);
}