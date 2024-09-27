let numStudents = Number(prompt("Kitne students hain class mein?"));

let studentNames = [];
let absentStudents = [];
let presentStudents = [];

for (let i = 0; i < numStudents; i++) {
  let name = String(prompt(`Student ${i + 1} ka name daalain:`));
  let status = String(prompt(`Kya Student ${i + 1} present hai ya absent? (Present/Absent)`));

  if (status === "present" || status === "absent") {
    studentNames.push(name);
    if (status === "Absent") {
      absentStudents.push(name);
    } else {
      presentStudents.push(name);
    }
  } else {
    alert("Galat input! Sirf 'present' ya 'absent' daalain.");
    i--;
  }
}

let presentCount = numStudents - absentStudents.length;

alert(`Total Present Students: ${presentCount}`);
alert(`Present Students: ${presentStudents.join(", ")}`);
alert(`Absent Students: ${absentStudents.join(", ")}`);
