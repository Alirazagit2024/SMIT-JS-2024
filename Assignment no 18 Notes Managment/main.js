// Input fields aur buttons ka reference
var title = document.getElementById("title"); // Title input ka reference
var desc = document.getElementById("description"); // Description input ka reference
var submit = document.getElementById("submit"); // Submit button ka reference
var clear = document.getElementById("clear"); // Clear button ka reference
var notes = document.getElementById("notes"); // Notes container jahan sare tasks dikhne hain
var storage = JSON.parse(localStorage.getItem("data")) || []; // Local storage ka data uthao, nahi to khaali array lo

// Page load hone pe local storage ke data ko display karo
window.addEventListener("load", function () {
  storage.forEach(function (task) {
    createNote(task.title, task.desc); // Har note ko screen pe display karo
  });
});

// Note banane aur display karne ka function
function createNote(taskTitle, taskDesc) {
  var box = document.createElement("div"); // Main div jo ek note ko hold karega
  box.classList.add("note-card"); // Styling ke liye "note-card" class

  var leftdiv = document.createElement("div"); // Left-side ka div
  leftdiv.classList.add("leftdiv"); // Styling ke liye "leftdiv" class

  var left = document.createElement("div"); // Title ke liye left div
  left.classList.add("left"); // Styling ke liye "left" class
  var heading = document.createElement("h4"); // Title ke liye heading
  heading.innerHTML = taskTitle; // Title ka text set karo

  var right = document.createElement("div"); // Description ke liye right div
  right.classList.add("right"); // Styling ke liye "right" class
  var para = document.createElement("p"); // Description ka paragraph
  para.innerHTML = taskDesc; // Description ka text set karo

  var rightdiv = document.createElement("div"); // Delete button ke liye alag div
  rightdiv.classList.add("rightdiv"); // Styling ke liye "rightdiv" class
  var delBtn = document.createElement("button"); // Delete button banaya
  delBtn.innerHTML = "Delete"; // Button ka text set kiya
  delBtn.classList.add("del"); // Styling ke liye "del" class

  // Left div ko fill karo aur right div ko alag rakho
  left.append("Name:- ", heading);
  right.append("Description:- ", para);
  leftdiv.append(left, right); // Left aur right ko ek container mein jodo
  rightdiv.append(delBtn); // Delete button rightdiv mein daalo
  box.append(leftdiv, rightdiv); // Poore box ko left aur right ke saath jodo
  notes.append(box); // Final box ko notes section mein display karo
  delBtn.addEventListener("click", function () {
    notes.removeChild(box);
    localStorage.removeItem("data");
  });
}

// Submit button pe click hone par naya note banao aur save karo
submit.addEventListener("click", function () {
  var taskTitle = title.value.trim(); // Title ka value
  var taskDesc = desc.value.trim(); // Description ka value

  if (taskTitle && taskDesc) {
    // Agar dono fields filled hain
    var newTask = { title: taskTitle, desc: taskDesc }; // Naya task object
    storage.push(newTask); // Local storage ke array mein add karo
    localStorage.setItem("data", JSON.stringify(storage)); // Local storage update karo
    createNote(taskTitle, taskDesc); // Screen pe note display karo
    title.value = ""; // Input box clear karo
    desc.value = ""; // Input box clear karo
  } else {
    alert("Please fill out both fields."); // Agar koi field khaali hai to warning do
  }
});

// Clear button functionality
clear.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete all notes?")) {
      localStorage.removeItem("data"); // Local storage se pura data delete karo
      notes.innerHTML = ""; // Screen se sare notes hatao
  }
});