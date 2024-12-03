let theme = document.getElementById('theme');
let like = document.getElementById("love");
let comments = document.querySelector('.comments');
let share = document.querySelector('.share');
let btn = document.getElementById("add-remove");
let name = document.getElementById("unknown");
let image = document.querySelector("#pic");
let cenheart = document.getElementById("heart");
let profilePic = document.getElementById('profilePic');
let text = document.querySelector('h1');
let card = document.querySelector('.card');
let sidebar = document.querySelector('#menu');
let option = document.querySelector('.option');
let touch = document.querySelector('.card-body');
let link = document.getElementById('link');


let istheme = 0;
theme.addEventListener("click", function () {
if (istheme == 1) {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  theme.innerHTML = '<i class="fa-solid fa-sun"></i>'
  theme.style.color = "black";
  card.style.borderColor = "black";
  card.style.backgroundColor = "white";
  card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.7)';
  image.style.borderColor = "black";
  link.style.color = "black";
  like.style.color = "black";
  comments.style.color = "black";
  share.style.color = "black";
  msg.style.color = "black";
  istheme = 0;
} else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    theme.innerHTML = '<i class="fa-solid fa-moon"></i>'
    theme.style.color = "white";
    card.style.borderColor = "white";
    card.style.backgroundColor = "black";
    card.style.boxShadow = ' 0 4px 12px rgba(255, 255, 255, 0.7)';
image.style.borderColor = "red";
link.style.color = "white";
like.style.color = "white";
comments.style.color = "white";
share.style.color = "white";
msg.style.color = "black";
istheme = 1;
}
});

let ismenu = 0;
sidebar.addEventListener("click", function () {
  if (ismenu == 1) {
    option.style.display = "none";
    ismenu = 0;
  } else {
    option.style.display = "block";
    ismenu = 1;
  }
});

touch.addEventListener("click", function () {
    // Close the menu and reset icon
    // cross.innerHTML = '<i id="menu" class="fa-solid fa-ellipsis-vertical"></i>';
    // if (!ismenu) sidebar.click();
    option.style.display = "none";
  });


let islike = 0;
like.addEventListener("click", function () {
  if (islike == 1) {
    like.style.color = "gray";
    like.innerHTML =
      '<i class="fa-solid fa-heart-crack"></i><strong> 74</strong>';
    islike = 0;
  } else {
    like.style.color = "red";
    like.innerHTML = '<i class="fas fa-heart"></i><strong> 75</strong>';
    islike = 1;
  }
});
// let isbook = 0;
// bookmark.addEventListener("click", function () {
//   if (isbook == 1) {
//     bookmark.style.color = "gray";
//     isbook = 0;
//   } else {
//     bookmark.style.color = "rgb(37, 37, 37)";
//     isbook = 1;
//   }
// });

// let isshare = 0;
// share.addEventListener("click", function () {
//   if (isshare == 1) {
//     share.style.color = "lightgray";
//     isbook = 0;
//   } else {
//     share.style.color = "green";
//     isshare = 1;
//   }
// });
let iknow = 0;
btn.addEventListener("click", function () {
  if (iknow == 1) {
    name.innerText = "(Stranger)";
    name.style.color = "black";
    btn.innerHTML = '<i class="fas fa-user-plus"></i> Add Friend';
    iknow = 0;
  } else {
    name.innerText = "(Friend)";
    name.style.color = "Green";
    btn.innerHTML = '<i class="fas fa-user-minus"></i> Remove';
    iknow = 1;
  }
});

image.addEventListener("dblclick", function () {
  if (!islike) like.click();
  cenheart.style.transform = "translate(-50%, -50%) scale(1)";
  cenheart.style.opacity = "1";
  like.style.color = "red";
  like.innerHTML = '<i class="fas fa-heart"></i><strong> 75</strong>';
  setTimeout(() => {
    cenheart.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);

});

let typing = document.getElementById("typing"); // input
let send = document.getElementById("send"); // add button
let msg = document.getElementById("msg"); // list of tasks

// Function to add task
function addTask() {
  let task = typing.value; // Get input value
  let list = document.createElement("li"); // Create a list item
  let delbtn = document.createElement("button"); // Create delete button

  if (task === "") {
      alert("Sorry input abhi khali h! 🤨");
      return;
  }

  list.textContent = task; // Add task text to list
  // delbtn.textContent = "delete"; // Optional delete button
  msg.appendChild(list); // Add list item to the message list
  // list.appendChild(delbtn); // Attach delete button to list
  typing.value = ""; // Clear input field
msg.style.display = "block"
  // Optional: Delete task functionality
  // delbtn.addEventListener("click", deleteTask);
}

// Button click event
send.addEventListener("click", addTask);

// Enter key press event
typing.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      addTask();
  }
});
