// HTML elements ko id ke liye access karo
let theme = document.getElementById("theme");
let con = document.querySelector(".container");
let card = document.querySelector(".clock");
let days = document.getElementById("days");
let year = document.getElementById("year");
let curdate = document.getElementById("date");
let month = document.getElementById("month");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

// theme settings
let istheme = 0;
theme.addEventListener("click", function () {
  if (istheme == 1) {
    document.body.style.background =
      "linear-gradient(to right, #1d2671, #c33764)";
    document.body.style.color = "black";
    con.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
    theme.innerHTML = '<i class="fa-regular fa-sun"></i>';
    theme.style.color = "white";
    istheme = 0;
  } else {
    document.body.style.background = "black";
    document.body.style.color = "white";
    con.style.boxShadow = "0 0px 30px rgba(255, 255, 255, 0.7)";
    theme.innerHTML = '<i class="fa-regular fa-moon"></i>';
    theme.style.color = "white";
    istheme = 1;
  }
});

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function clock() {
  let date = new Date();
  let y = date.getFullYear();
  let cd = date.getDate();
  let mn = date.getMonth();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let d = date.getDay();
  // AM/PM check karo using if-else
  let amPm;
  if (h >= 12) {
    amPm = "PM";
  } else {
    amPm = "AM";
  }
  // 24-hour format ko 12-hour format mein convert karo using if-else
  if (h > 12) {
    h = h - 12;
  } else if (h === 0) {
    h = 12;
  }

  // Minutes aur seconds ke liye '0' lagao if-else se
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  days.textContent = daysOfWeek[d];
  year.textContent = y;
  month.textContent = monthNames[mn];
  curdate.textContent = cd;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
  ampm.textContent = amPm;
  setTimeout(clock, 10);
}
clock();
