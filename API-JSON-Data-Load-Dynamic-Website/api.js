const user = {
  id: 1,
  name: "Hard Working",
  job: "Actor",
};
// console.log(user);

// const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
  owner: "Ali",
  address: {
    street: "Neel Khet",
    city: "Ranbir",
    country: "BD",
  },
  products: ["Laptop", "Mic", "Monitor", "Keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
// console.log(shop);

const shopJson = JSON.stringify(shop);
// console.log(shopJson);

const shopObj = JSON.parse(shopJson);
// console.log(shopObj);

// console.log("Fetching");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => console.log(response))
//   .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))

// fetch("https://jsonplaceholder.typicode.com/todos/1")

// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function loadDataTwo(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data))
}

function loadUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data);
}

function loadUsersTwo(){
    // console.log("Button Handler");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUsersTwo(data))
}

function displayUsersTwo(data){
    // console.log(data);
    for(const user of data){
        // console.log(user);
        // console.log(user.name);
        // console.log(user);
        console.log(user.email);
    }
}