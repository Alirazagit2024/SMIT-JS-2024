// Supabase API & URL
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtlcmx1dXFndmh6amxodmhmdGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODExODAsImV4cCI6MjA1Mjg1NzE4MH0.ARuoKq68fAZR8YrZEe0uGM0OHPukw-pm1aOXBfmlT4I";
const SUPABASE_URL = "https://kerluuqgvhzjlhvhftjv.supabase.co";
const supa_base = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Pgae Reload
document.addEventListener("DOMContentLoaded", async () => {
  const { data, error } = await supa_base.auth.getSession();
  // console.log("data-DOmContetnLoad", data);
  // console.log("error-DOmContetnLoad", error);
  if (data.session) {
    // Redirect to dashboard
    if (window.location.pathname !== "/dashboard.html") {
      window.location.href = "dashboard.html";
    }
  }
});

// SignUp
const signupBtn = document.querySelector("#signupBtn");
if (signupBtn) {
  signupBtn.addEventListener("click", async function () {
    const signupName = document.querySelector("#signupName").value.trim();
    const signupEmail = document.querySelector("#signupEmail").value.trim();
    const signupPassword = document.querySelector("#signupPassword").value.trim()
    const { data, error } = await supa_base.auth.signUp({
      email: signupEmail,
      password: signupPassword,
      options: {
        data: { full_name: signupName },
      },
    });
    document.querySelector("#signupName").value = "";
    document.querySelector("#signupEmail").value = "";
    document.querySelector("#signupPassword").value = "";
    alert("You have successfully signed up! Please check your email to verify your account.");
    if (data?.session !== null) {
      window.location.href = "dashboard.html";
    }
    // console.log("data:", data);
    // console.log("Error:", error);
  });
}

// Login
const loginBtn = document.querySelector("#loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", async function () {
    const loginEmail = document.querySelector("#loginEmail").value.trim();
    const loginPassword = document.querySelector("#loginPassword").value.trim();
    const { data, error } = await supa_base.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });
    document.querySelector("#loginEmail").value = "";
    document.querySelector("#loginPassword").value = "";
    alert("You have successfully Login!");
    if (data?.session !== null) {
      window.location.href = "dashboard.html";
    }
    // console.log("data:", data);
    // console.log("Error:", error);
  });
}

// Forget Password
const resetBtn = document.querySelector(".resetBtn");
if (resetBtn) {
  resetBtn.addEventListener("click", async function () {
    const forgetEmail = document.querySelector("#forgetEmail").value.trim();

    if (!forgetEmail) {
      alert("Please enter your email address.");
      return;
    }
      const { data, error } = await supa_base.auth.resetPasswordForEmail(forgetEmail, {
        redirectTo: "confirmpass.html",
      });

      if (error) {
        console.error("Error sending reset email:", error.message);
        return;
      }
      document.querySelector("#forgetEmail").value = "";
      console.log("Password reset email sent successfully!", data);
      alert("Password reset email has been sent. Check your inbox!");
  });
}


// LogOut
const logoutBtn = document.querySelector("#logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async function () {
    const { error } = await supa_base.auth.signOut();
    alert("You have successfully LogOut!");
    // console.log("error", error);
    window.location.href = "index.html";
  });
}

