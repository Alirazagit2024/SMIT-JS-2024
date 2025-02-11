// Supabase API & URL
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtlcmx1dXFndmh6amxodmhmdGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODExODAsImV4cCI6MjA1Mjg1NzE4MH0.ARuoKq68fAZR8YrZEe0uGM0OHPukw-pm1aOXBfmlT4I";
const SUPABASE_URL = "https://kerluuqgvhzjlhvhftjv.supabase.co";
const supa_base = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Page Reload
document.addEventListener("DOMContentLoaded", async () => {
  const { data, error } = await supa_base.auth.getSession();

  if (data.session) {
    const userName = data.session.user.user_metadata?.full_name || "User";
    document.querySelectorAll(".username").forEach((element) => {
      element.innerHTML = `<i class="fa-solid fa-lock"></i> ${userName}`;
    });
    // alert(`Welcome, ${userName}! Redirecting you to Insta...`);
    if (window.location.pathname !== "/profile.html") {
      window.location.href = "profile.html";
    }
  } else if (error) {
    // console.error("Error fetching session:", error);
  }
});

// SignUp
const signupBtn = document.querySelector("#signupBtn");
if (signupBtn) {
  signupBtn.addEventListener("click", async function () {
    const signupName = document.querySelector("#signupName").value.trim();
    const signupEmail = document.querySelector("#signupEmail").value.trim();
    const signupPassword = document
      .querySelector("#signupPassword")
      .value.trim();
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
    alert(
      "You have successfully signed up! Please check your email to verify your account."
    );
    if (data?.session !== null) {
      window.location.href = "profile.html";
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
    if (data?.session !== null) {
      alert("You have successfully Login!");
      window.location.href = "profile.html";
    } else {
      alert("Your password is invalid");
    }
    // console.log("data:", data);
    // console.log("Error:", error);
  });
}

// LogOut
const logoutBtn = document.querySelector("#logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async function () {
    const { error } = await supa_base.auth.signOut();
    alert("You have successfully LogOut!");
    // console.log("error", error);
    window.location.href = "/index.html";
  });
}

// Modal
const postModal = document.getElementById("postModal");

// Open & Close Modal Button
const createPostBtn = document.getElementById("createPostBtn");
if (createPostBtn) {
  createPostBtn.addEventListener("click", function () {
    postModal.classList.remove("hidden");
  });
}

const cancelBtn = document.getElementById("cancelBtn");
if (cancelBtn) {
  cancelBtn.addEventListener("click", function () {
    postModal.classList.add("hidden");
  });
}

const savePost = document.getElementById("save");
if (savePost) {
  savePost.addEventListener("click", async function () {
    const postTitle = document.getElementById("postTitle").value;
    const imageFile = document.getElementById("postImage").files[0];

    if (!postTitle || !imageFile) {
      alert("⚠️ Title and Content are required!");
      return;
    }

    // console.log("Title:", postTitle);
    // console.log("Selected Image:", imageFile);

    // Upload image to Supabase storage
    const { data: imageData, error: imageError } = await supa_base?.storage
      .from("post_images")
      .upload(`${Date.now()}-${imageFile.name}`, imageFile, {
        contentType: "image/jpg",
      });

    if (imageError) {
      // console.error("Image upload failed:", imageError.message);
      return alert("Image upload failed!");
    }

    // console.log("Image Data:", imageData);

    if (!imageData?.path) {
      console.error("No path returned from image upload");
      return alert("Failed to upload image. No path returned.");
    }

    // Generate public URL image
    const { data: publicUrlData, error: publicUrlError } = supa_base.storage
      .from("post_images")
      .getPublicUrl(imageData.path);

    if (publicUrlError) {
      // console.error("Failed to generate public URL:", publicUrlError.message);
      return alert("Failed to generate public URL!");
    }

    if (!publicUrlData?.publicUrl) {
      // console.error("No public URL returned:", publicUrlData);
      return alert("Failed to get public URL for the image.");
    }

    const imageUrl = publicUrlData.publicUrl;
    // console.log("Image Public URL:", imageUrl);

    let {
      data: { user: currentUser },
    } = await supa_base.auth.getUser();

    // Insert blog data into Supabase table
    const { error: insertError } = await supa_base
      .from("insta_app")
      .insert([
        { user_id: currentUser?.id, name: postTitle, image_url: imageUrl },
      ]);

    if (insertError) {
      // console.error("Failed to insert blog:", insertError.message);
      return alert("Failed to create blog!");
    }

    alert("Blog created successfully!");
    postModal.classList.add("hidden");
    window.location.href = window.location.href;

    // Reset the form
    document.getElementById("postTitle").value = "";
    document.getElementById("postImage").value = "";
  });
}

// Posts
const allPost = document.getElementById("allPosts");

// Load Posts from Supabase
async function loadPosts() {
  const { data: posts, error } = await supa_base
    .from("insta_app")
    .select("user_id, name, image_url")
    .order("created_at", { ascending: false });

  if (error) return;

  displayPosts(posts);
}

// Display Posts
function displayPosts(posts) {
  if (!posts.length) {
    allPost.innerHTML =
      "<p class='text-white text-center text-xl mt-14'>No posts available.</p>";
    return;
  }

  allPost.innerHTML = posts
    .map(
      (post) => `

<div class="relative aspect-square bg-gray-800 group cursor-pointer">
    <img src="${post.image_url}" alt="${post.name}" class="w-full h-full object-cover border">

    <!-- Title on Hover -->
    <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-center p-1 opacity-100 transition-opacity duration-300">
        ${post.name}
    </div>
</div>

  `
    )
    .join("");
}

loadPosts();
