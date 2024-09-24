const password = prompt("Enter your password");

if (password.length < 6) {
  alert("Password must contain at least 6 characters");
} else if (!/[0-9]/.test(password)) {
  alert("Password must contain at least one number");
} else if (!/[a-z]/.test(password)) {
  alert("Password must contain at least one lowercase letter");
} else if (!/[A-Z]/.test(password)) {
  alert("Password must contain at least one uppercase letter");
} else if (password === "Aliraza2024") {
  alert("Logged in successfully");
} else {
  alert("invalid password");
}
