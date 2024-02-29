const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

// myLoader()
// .then(data => console.log("Resolved Data", data))
// .catch(err => console.log("Rejected with value:", err))

// fetch("")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   // .catch(err => console.log(err))
//   .catch((err) => console.error(err));

// async function loadData(){
//     const res = await fetch("");
//     const data = await res.json();
//     console.log(data);
// }

const taskLoader = async() => {
  const res = await fetch("");
}

// loadData();

console.log(1);
console.log(2);
// console.log(3);
// setTimeout(() => {
//   console.log(3);
// })

// setTimeout(() => {
//   console.log(3);
// }, 4000)

console.log(4);
console.log(5);
console.log(6);

let num = 0;
const clockId = setInterval(() => {
  num++;

  if(num > 6){
    clearInterval(clockId);
  }

  console.log(num);
}, 2000)