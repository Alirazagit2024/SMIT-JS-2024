// Object
let students = {};

// Search
let searchRollNo = document.getElementById("searchRollNumber");
let searchBtn = document.getElementById("searchBtn");

let output = document.getElementById("output");

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form refresh

  // Inputs
  let rollNo = document.getElementById("rollNumber").value;
  let studName = document.getElementById("studentName").value;
  let fatherName = document.getElementById("fatherName").value;
  let course = document.getElementById("course").value;
  let hostLink = document.getElementById("hostedLink").value;
  let repoLink = document.getElementById("repoLink").value;

  // Store data in object
  students[rollNo] = {
    sName: studName,
    fName: fatherName,
    cName: course,
    hosted: hostLink,
    hostedRepo: repoLink,
  };

  // Confirmation
  alert("Student Added Successfully!");
  document.getElementById("studentForm").reset();
});

// Search Student by Roll Number
searchBtn.addEventListener("click", search);
function search() {
  let rollNo = searchRollNo.value;
  output.style.display = "block";

  if (students[rollNo]) {
    let student = students[rollNo];
    output.innerHTML = `
      <p><strong>Roll No:</strong> ${rollNo}</p>
      <p><strong>Student Name:</strong> ${student.sName}</p>
      <p><strong>Father Name:</strong> ${student.fName}</p>
      <p><strong>Course Name:</strong> ${student.cName}</p>
        <p><strong>Assignment Hosted Link:</strong><p/><a href="${student.hosted}" target="_blank">${student.hosted}</a>
        <p><strong>GitHub Repository Link:</strong><p/><a href="${student.hostedRepo}" target="_blank">${student.hostedRepo}</a>
       <div id="clear">
        <button id="delBtn">Delete</button>
        </div>
        `;
    // delete btn
    let delBtn = document.getElementById("delBtn");
    delBtn.classList.add("delete");
    delBtn.addEventListener("click", function () {
      (output.innerHTML = ""), (output.style.display = "none");
    });
  } else {
    output.innerHTML = `<p>Student not found!</p>`;
  }
}
