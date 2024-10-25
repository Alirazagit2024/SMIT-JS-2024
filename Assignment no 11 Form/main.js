document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let valid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name === "") {
        valid = false;
        document.getElementById('nameError').textContent = "Name is required.";
    } else {
        document.getElementById('nameError').textContent = "";
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = "Enter a valid email address.";
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Phone number validation
    const phone = document.getElementById('phone').value;
    if (!/^\d{11}$/.test(phone)) {
        valid = false;
        document.getElementById('phoneError').textContent = "Phone number must be 10 digits.";
    } else {
        document.getElementById('phoneError').textContent = "";
    }

    // Date of Birth validation (non-empty)
    const dob = document.getElementById('dob').value;
    if (dob === "") {
        valid = false;
        document.getElementById('dobError').textContent = "Date of birth is required.";
    } else {
        document.getElementById('dobError').textContent = "";
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    if (gender === "") {
        valid = false;
        document.getElementById('genderError').textContent = "Please select your gender.";
    } else {
        document.getElementById('genderError').textContent = "";
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (age === "" || isNaN(age) || age < 1 || age > 120) {
        valid = false;
        document.getElementById('ageError').textContent = "Age must be a number between 1 and 120.";
    } else {
        document.getElementById('ageError').textContent = "";
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        valid = false;
        document.getElementById('passwordError').textContent = "Password must be at least 6 characters.";
    } else {
        document.getElementById('passwordError').textContent = "";
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        valid = false;
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
    } else {
        document.getElementById('confirmPasswordError').textContent = "";
    }

    // Address validation
    const address = document.getElementById('address').value;
    if (address === "") {
        valid = false;
        document.getElementById('addressError').textContent = "Address is required.";
    } else {
        document.getElementById('addressError').textContent = "";
    }

    // City validation
    const city = document.getElementById('city').value;
    if (city === "") {
        valid = false;
        document.getElementById('cityError').textContent = "City is required.";
    } else {
        document.getElementById('cityError').textContent = "";
    }

    // If all fields are valid, allow form submission
    if (valid) {
        alert("Registration successful!");
        // You can submit the form data to the server here.
    }
});
