// Toggle dark theme
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function previewImage() {
  const file = document.getElementById("profileImage").files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById("imagePreview").src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  }
}

function createResume() {
  // Collecting form data
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let careerObjective = document.getElementById("careerObjective").value;
  let degree = document.getElementById("degree").value;
  let institution = document.getElementById("institution").value;
  let completionYear = document.getElementById("completionYear").value;
  let grade = document.getElementById("grade").value;
  let jobTitle = document.getElementById("jobTitle").value;
  let companyName = document.getElementById("companyName").value;
  let duration = document.getElementById("duration").value;
  let jobDescription = document.getElementById("jobDescription").value;
  let skills = document
    .getElementById("skills")
    .value.split(",")
    .map((skill) => `<li>${skill.trim()}</li>`)
    .join("");
  let languages = document
    .getElementById("languages")
    .value.split(",")
    .map((language) => `<li>${language.trim()}</li>`)
    .join("");
  let hobbies = document.getElementById("hobbies").value;

  // Handling Image
  let profileImg = document.getElementById("profileImage").files[0]
    ? document.getElementById("imagePreview").src
    : "";

  // Populating the resume section
  document.getElementById("profileImg").src = profileImg;
  document.getElementById("resumeEmail").innerText = email;
  document.getElementById("resumePhone").innerText = phone;
  document.getElementById("resumeAddress").innerText = address;
  document.getElementById("resumeObjective").innerText = careerObjective;
  document.getElementById("resumeDegree").innerText = degree;
  document.getElementById("resumeInstitution").innerText = institution;
  document.getElementById("resumeYear").innerText = completionYear;
  document.getElementById("resumeGrade").innerText = grade;
  document.getElementById("resumeJobTitle").innerText = jobTitle;
  document.getElementById("resumeCompany").innerText = companyName;
  document.getElementById("resumeDuration").innerText = duration;
  document.getElementById("resumeDescription").innerText = jobDescription;
  document.getElementById("resumeSkills").innerHTML = skills;
  document.getElementById("resumeLanguages").innerHTML = languages;
  document.getElementById("resumeHobbies").innerText = hobbies;

  document.getElementById("resumeOutput").style.display = "block";
  document.getElementById("resumeForm").style.display = "none";
}

function resetForm() {
  document.getElementById("resumeForm").reset();
  document.getElementById("resumeOutput").style.display = "none";
  document.getElementById("resumeForm").style.display = "block";
}
