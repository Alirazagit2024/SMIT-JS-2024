// DOM elements
var theme = document.getElementById("theme");
var fileInput = document.getElementById("fileInput");
var profilePic = document.getElementById("profilePic");
var selectImageButton = document.getElementById("selectImageButton");
var username = document.getElementById("username");
var editProfileBtn = document.getElementById("editProfileBtn");
var text = document.querySelector("h1");
var card = document.querySelector(".card");

let istheme = 0;

// Theme Toggle Logic
theme.addEventListener("click", function () {
  if (istheme == 1) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    theme.innerHTML = '<i class="fa-solid fa-sun"></i>';
    theme.style.color = "black";
    card.style.borderColor = "black";
    card.style.backgroundColor = "white";
    card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.7)";
    profilePic.style.borderColor = "gray";
    text.style.color = "black";
    istheme = 0;
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    theme.innerHTML = '<i class="fa-solid fa-moon"></i>';
    theme.style.color = "white";
    card.style.borderColor = "white";
    card.style.backgroundColor = "black";
    card.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.7)";
    profilePic.style.borderColor = "white ";
    text.style.color = "white";
    istheme = 1;
  }
});

// Button click to trigger file picker
selectImageButton.addEventListener("click", function () {
  fileInput.click();
});

profilePic.addEventListener("click", function () {
  
  fileInput.click();
});

// Change image on file selection
fileInput.addEventListener("change", function () {
  var file = fileInput.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (event) {
      profilePic.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Edit Profile Button Logic
// Add an event listener to the Edit Profile button
editProfileBtn.addEventListener("click", function () {
  // Step 1: Ask the user for a new name using a prompt
  var newName = prompt("Enter your new username:");

  // Step 2: Check if the user entered a name and it's not just empty spaces
  if (newName !== null) { // User didn't cancel the prompt
    if (newName.trim() !== "") { // User entered a valid name
      // Step 3: Update the username text
      username.innerHTML = newName + ' <i class="fa-solid fa-check"></i>';
    } else {
      // Step 4: Alert the user if the input was empty or invalid
      alert("Username cannot be empty!");
    }
  }
});

