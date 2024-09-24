let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
  alert("You are classified as a Child.");
} else if (age >= 13 && age <= 19) {
  alert("You are classified as a Teenager.");
} else if (age >= 20 && age <= 64) {
  alert("You are classified as an Adult.");
} else if (age >= 65) {
  alert("You are classified as a Senior.");
} else {
  alert("Invalid age entered.");
}
