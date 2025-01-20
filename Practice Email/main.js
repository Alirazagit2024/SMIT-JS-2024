// Names Add
let nameInput = document.querySelector("#studentName");
let courseName = document.querySelector("#itCourses");
let batchNo = document.querySelector("#batch");
let nameAdd = document.querySelector(".nameBtn");

// Data Add
let dataAdd = document.querySelector("#dataAdd");
let count = 1;
let array = [];

// Send Emails
let emailInput = document.querySelector(".email-input");
let sendEmail = document.querySelector(".send-button");

// Emails Output
let emailsOutput = document.querySelector(".emailsOutput");

// Add Student Name
nameAdd.addEventListener("click", studNameAdd);
function studNameAdd() {
  let stName = nameInput.value;
  let crName = courseName.value;
  let batch = batchNo.value;
  if (stName === "") {
    alert("Please enter a student name!");
    return;
  }
  array.push(stName);
  console.log(array);

  nameInput.value = "";

  let row = document.createElement("tr");
  row.innerHTML = `
        <td>${count}</td>
        <td>0${count}</td>
        <td>${stName}</td>
        <td>${crName}</td>
        <td>Batch No ${batch}</td>
        <td><i class="fa-solid fa-trash deleteBtn"></i></td>
        `;
  dataAdd.append(row);
  count++;

  // Delete button
  let delBtn = row.querySelector(".deleteBtn");
  delBtn.addEventListener("click", function () {
    row.remove();
    console.log("Row Deleted!");
  });
}

// Send Email
sendEmail.addEventListener("click", sendStudentsEmails);
function sendStudentsEmails() {
  let emInput = emailInput.value;
  if (emInput === "") {
    alert("Please enter an email!");
    return;
  }
  emailInput.value= "";
  emailsOutput.style.display = "block";
  array
    .map(function (item) {
      return ` <strong>Dear ${item}</strong>: ${emInput}`;
    })
    .forEach(function (email) {
      let listBox = document.createElement("li");
      listBox.innerHTML = email;
      emailsOutput.append(listBox);
      array = [];
    });

  // console.log("Emails Sent:", array.map(item => `MR ${item}: ${emInput}`));
}
