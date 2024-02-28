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

fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data))
  // .catch(err => console.log(err))
  .catch((err) => console.error(err));

async function loadData(){
    const res = await fetch("");
}
