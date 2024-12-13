// Bg Color
let bg = document.querySelector(".bg");

// Rain Audio
let rain = document.querySelector("#rain");

// Light & Buttons
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let bRed = document.getElementById("bRed");
let bYellow = document.getElementById("bYellow");
let bGreen = document.getElementById("bGreen");

// Sun & Moon
let sun = document.querySelector("#sun");

// Signs Change
let sign = document.querySelector("#image");

// Mobile Button
let home = document.querySelector(".circle");

// Bike & Car
let bike = document.querySelector(".bike");
let car = document.querySelector(".car");

// Audios
let bikeS = document.querySelector("#bikeS");
let bikeP = document.querySelector("#bikeP");
let carH = document.querySelector("#carH");
let carS = document.querySelector("#carS");
let carP = document.querySelector("#carP");

// Red button
bRed.addEventListener("click", function () {
  carH.play();
  bg.classList.remove("dark");
  sign.src = 'assets/images/stop.png'; 
  sun.src = 'assets/images/sun.png'; 
  bRed.style.backgroundColor = "red";
  bRed.style.color = "white";
  bYellow.style.backgroundColor = "transparent";
  bYellow.style.color = "black";
  bGreen.style.backgroundColor = "transparent";
  bGreen.style.color = "black";
  red.style.backgroundColor = "red";
  yellow.style.backgroundColor = "gray";
  green.style.backgroundColor = "gray";
  bike.style.animation = "none";
  car.style.animation = "none";
});

// Yellow button
bYellow.addEventListener("click", function () {
  carS.play();
  bikeS.play();
  bg.classList.toggle("day");
  sign.src = 'assets/images/wait.png'; 
  sun.src = 'assets/images/sun.png'; 
  bRed.style.backgroundColor = "transparent";
  bRed.style.color = "black";
  bYellow.style.backgroundColor = "yellow";
  bYellow.style.color = "black";
  bGreen.style.backgroundColor = "transparent";
  bGreen.style.color = "black";
  red.style.backgroundColor = "gray";
  yellow.style.backgroundColor = "yellow";
  green.style.backgroundColor = "gray";
  bike.style.animation = "moveRightY 2s linear forwards";
  car.style.animation = "moveLeftY 2s linear forwards";
});

// Green button
bGreen.addEventListener("click", function () {
  rain.play();
  carP.play();
  bikeP.play();
  bg.classList.toggle("dark");
  sign.src = 'assets/images/go.png'; 
  sun.src = 'assets/images/moon.png'; 
  bRed.style.backgroundColor = "transparent";
  bRed.style.color = "black";
  bYellow.style.backgroundColor = "transparent";
  bYellow.style.color = "black";
  bGreen.style.backgroundColor = "green";
  bGreen.style.color = "white";
  red.style.backgroundColor = "gray";
  yellow.style.backgroundColor = "gray";
  green.style.backgroundColor = "green";
  bike.style.animation = "moveRight 4.4s linear forwards";
  car.style.animation = "moveLeft 5s linear forwards";
});

// Home button
home.addEventListener("click", function () {
  console.log("ALI");
  
  rain.pause();
  carH.pause();
  carS.pause(); 
  carS.pause(); 
  carP.pause(); 
  carP.pause(); 
  bikeS.pause(); 
  bikeS.pause(); 
  bikeP.pause(); 
  bikeP.pause(); 
  bg.classList.remove("dark");
  sign.src = 'assets/images/stop.png'; 
  sun.src = 'assets/images/sun.png'; 
  bRed.style.backgroundColor = "transparent";
  bRed.style.color = "black";
  bYellow.style.backgroundColor = "transparent";
  bYellow.style.color = "black";
  bGreen.style.backgroundColor = "transparent";
  bGreen.style.color = "black";
  red.style.backgroundColor = "red";
  yellow.style.backgroundColor = "gray";
  green.style.backgroundColor = "gray";
  bike.style.animation = "none";
  car.style.animation = "none";
});

console.log(home);
