// function fiveSecondDelay(){
//     console.log("Testing this function to be executed after five seconds.");
// }

// setTimeout(() => {
//     console.log("Testing this function to be executed after five seconds");
// }, 5000);

// function delayedGreeting(name, time){
//     console.log("Ahlan Sahlan", name);
// }

// setTimeout((delayedGreeting),time)

// function delayGreeting(name, time){
//     function delayedGreeting(){
//         console.log("Ahlan Sahlan", name);
//     }

//     setTimeout(delayedGreeting, time);
// }

// delayGreeting("Alice", 2000);

// function tellJoke() {
//   console.log(
//     "Why don't scientists trust atoms? Because they make up everything!"
//   );
// }

// const jokeInterval = setInterval(tellJoke, 2000);
// setTimeout(() => {
//     clearInterval(jokeInterval);
// }, 10000);


// tellJoke();

const data = async() => {
  const apiData = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
  const res = await apiData.json();
  console.log(res.joke);
}

data();