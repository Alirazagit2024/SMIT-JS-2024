// Step 1: HTML elements ko JavaScript mein laana
let counter = document.getElementById("num");
let increment = document.getElementById("plus");
let decrement = document.getElementById("minus");
let resetValue = document.getElementById("reset");

// Step 2: Counter ki initial value set karna
let count;
if (localStorage.getItem('count')) {
  count = Number(localStorage.getItem('count')); // Agar value mili, to use number mein convert karo
} else {
  count = 0; // Agar value nahi mili, to default 0 set karo
}

// Function jo display ko update kare
function updateCounter() {
    counter.innerText = count; // HTML mein counter ki value update karo
  }

// Step 3: Function banana jo counter ko increase kare
function increase() {
  count++;
  updateCounter();
  localStorage.setItem('count',count);
}


function decrease() {
    if (count > 0) { // Yeh ensure karta hai ke counter 0 se neeche na jaye
        count--;
        localStorage.setItem('count',count);
      }
      updateCounter();
}

function resetCounter() {
    count = 0;
    updateCounter();
    localStorage.removeItem('count',count);
  }
  updateCounter();

// Step 4: Button click hone par function ko call karwana
plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);
reset.addEventListener("click", resetCounter);




// timer program

// let timer = document.getElementById("timer");
// let start = document.getElementById("start");
// let stop = document.getElementById("stop");
// let resettimer = document.getElementById("rt");

// let num;
// if (localStorage.getItem('num')) {
//   num = Number(localStorage.getItem('num')); // Agar value mili, to use number mein convert karo
// } else {
//   num = 0; // Agar value nahi mili, to default 0 set karo
// }


// start.addEventListener("click",function () {
//   for (let num = 0; num < 12; num++) {
//     timer.textContent =  num ++;
  
// }
// })

// Timer ki value ko set karna (initially 0 seconds, 0 minutes, 0 hours)
let hours = 0;
let minutes = 0;
let seconds = 0;

// Timer ko display karne ka function
function updateTimer() {
  // Time ko "HH:MM:SS" format mein dikhana
  let timerDisplay = document.getElementById("timer");
  timerDisplay.innerText = 
    (hours < 10 ? "0" : "") + hours + ":" + 
    (minutes < 10 ? "0" : "") + minutes + ":" + 
    (seconds < 10 ? "0" : "") + seconds;
}

// Start button ke liye function
let interval;
document.getElementById("start").addEventListener("click", function() {
  // Agar timer already chal raha hai, toh kuch na kare
  if (interval) return;

  // Timer chalana (1 second mein seconds ko badhana)
  interval = setInterval(function() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    updateTimer(); // Timer update karo
  }, 100); // 1000ms = 1 second
});

// Stop button ke liye function
document.getElementById("stop").addEventListener("click", function() {
  // Timer ko rokna
  clearInterval(interval);
  interval = null; // Interval ko null kar dena
});

// Reset button ke liye function
document.getElementById("rt").addEventListener("click", function() {
  // Timer ko reset karna
  clearInterval(interval);
  interval = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimer(); // Timer ko update kar ke "00:00:00" dikhana
});
