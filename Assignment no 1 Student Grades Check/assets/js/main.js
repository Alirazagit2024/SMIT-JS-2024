// SMIT Student Result 
let studentName = prompt("Please enter your Student Name:");
let f_Name = prompt("Please enter your Father Name:");
let rollNo = Number(prompt("Please enter your Roll no:"));
let campusName = prompt("Please enter your Campus Name:");
let batch = Number(prompt("Please enter your Batch no:"));

let html = Number(prompt("Please enter your HTML marks:"));
let htmlGrade;
if (html >= 80) {
  htmlGrade = "Grade A+";
} else if (html >= 70) {
  htmlGrade = "Grade A";
} else if (html >= 60) {
  htmlGrade = "Grade C";
} else if (html >= 50) {
  htmlGrade = "Grade D";
} else if (html >= 40) {
  htmlGrade = "Grade Fail!";
}
let css = Number(prompt("Please enter your CSS marks:"));
let cssGrade;
if (css >= 80) {
  cssGrade = "Grade A+";
} else if (html >= 70) {
  cssGrade = "Grade A";
} else if (html >= 60) {
  cssGrade = "Grade C";
} else if (html >= 50) {
  cssGrade = "Grade D";
} else if (html >= 40) {
  cssGrade = "Grade Fail!";
}
let hackhathon = prompt("Please enter your mini Hackathon marks:");

alert(
  "Student Name:" +
    " " +
    studentName +
    "\n" +
    "Father Name:" +
    " " +
    f_Name +
    "\n" +
    "Roll no:" +
    " " +
    rollNo +
    "\n" +
    "Campus Name:" +
    " " +
    campusName +
    "\n" +
    "Batch:" +
    " " +
    batch +
    "\n" +
    "HTML Marks:" +
    " " +
    html +
    " " +
    htmlGrade +
    "\n" +
    "CSS Marks:" +
    " " +
    css +
    " " +
    cssGrade +
    "\n" +
    "Mini Hackathon Marks:" +
    " " +
    hackhathon +
    "\n" +
    "Total Marks: 200" +
    "\n" +
    "Obtained marks:" +
    " " +
    (html + css)
);
