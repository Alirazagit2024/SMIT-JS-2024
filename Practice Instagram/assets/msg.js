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


// send.addEventListener("click", function () {
//     let task = typing.value; //value
//     let list = document.createElement("li"); //khali div
//     let delbtn = document.createElement("button"); //delete btn
//     if(task == "") {
//         alert("Sorry input abhi khali h!🤨")
//         return;
//     }
//   list.textContent = task;
//   // delbtn.textContent = "delete";
//   msg.appendChild(list);
//   // list.appendChild(delbtn);
//   typing.value = ""
//   // delbtn.addEventListener("click", deleteTask);
// });


// // Delete function
// function deleteTask() {
//   let listItem = this.parentElement; // Button ka parent <li> element
//   msg.removeChild(listItem); // Parent <li> ko UL se delete karte hain
// }
