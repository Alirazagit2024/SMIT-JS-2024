let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
let result;

if (num1 === num2) {
  alert("Invalid input! Please enter numeric values.");
} else {
  if (operator === "+") {
    result = num1 + num2;
    alert("The result is: " + result);
  } else if (operator === "-") {
    result = num1 - num2;
    alert("The result is: " + result);
  } else if (operator === "*") {
    result = num1 * num2;
    alert("The result is: " + result);
  } else if (operator === "/") {
    if (num2 === 0) {
      alert("Cannot divide by zero!");
    } else {
      result = num1 / num2;
      alert("The result is: " + result);
    }
  } else {
    alert("Invalid operator! Please choose +, -, *, or /.");
  }
}
