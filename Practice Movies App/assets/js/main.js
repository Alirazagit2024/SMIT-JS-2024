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
    alert(`Welcome, ${userName}! Redirecting you to Movies Hub...`);
    if (window.location.pathname !== "/assets/html/movieshub.html") {
      window.location.href = "/assets/html/movieshub.html";
    }
  } else if (error) {
    console.error("Error fetching session:", error);
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
      window.location.href = "/assets/html/movieshub.html";
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
      window.location.href = "/assets/html/movieshub.html";
    }else{
      alert("Your password is invalid");
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
    const { data, error } = await supa_base.auth.resetPasswordForEmail(
      forgetEmail,
      {
        redirectTo: "confirmpass.html",
      }
    );

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
    window.location.href = "/index.html";
  });
}


// Fetch movies
const apiKey = "3fa046dac49591ef05c47e27d5ddd6d6";

async function getMovie(
  pageNum = 1,
  categoryChange = "Bollywood",
  searchQuery = ""
) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${pageNum}&query=${
    searchQuery || categoryChange
  }`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Movies not found!");

    const data = await response.json();
    // console.log(data);

    const movieDetails = document.getElementById("movies");
    movieDetails.innerHTML = "";

    if (data.results.length === 0) {
      let searchQuery = document.getElementById("searchInput").value.trim();

      if (searchQuery === "") {
        // Load "Action Movies" if input is empty
        getMovie(1, "action");
        return;
      }

      movieDetails.className =
        "text-4xl text-white flex justify-center items-center gap-4 flex-wrap";
      movieDetails.innerHTML = "Movies not available.";
      return;
    }

    // Render movies
    data.results.forEach((movie) => {
      if (!movie.poster_path || !movie.title) return;

      const movieCard = document.createElement("div");
      movieCard.innerHTML = `
      <div class=" details relative bg-black cursor-pointer border border-white rounded-lg">
            <div class="absolute left-0 top-0 flex bg-black text-white text-[11px]">
            <img rel="preload" class="w-6 h-4" src="/assets/images/imdb.png" alt="Rating!" />
            <p class="px-2">${Math.round(movie.vote_average) || "N/A"}</p>
            </div>
                <img class="mx-auto w-40 h-62 rounded-lg object-cover" src="https://image.tmdb.org/t/p/w500${
                  movie.poster_path
                }" alt="${movie.title}" />
                </div>
            `;
      movieCard.addEventListener("click", () => openModal(movie));
      movieDetails.appendChild(movieCard);
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
    alert("Error fetching movies!");
  }
}

// Open Modal
async function openModal(movie) {
  const modal = document.getElementById("movieModal");
  const modalContent = document.getElementById("modalContent");

  // Fetch trailer
  const trailerUrl = await getTrailer(movie.id);

  // Add content to modal
  modalContent.innerHTML = `
        <!-- Left: Movie Poster -->
        <div class="w-full sm:w-1/3">
            <img class="w-full h-auto rounded-lg object-cover" src="https://image.tmdb.org/t/p/w500${
              movie.poster_path
            }" alt="${movie.title}" />
        </div>
        
        <!-- Right: Movie Details -->
        <div class="w-full sm:w-2/3 flex flex-col gap-2 text-sm text-gray-600 sm:text-left">
            <h2 class="text-2xl font-bold text-gray-800">${movie.title}</h2>
            <p><strong class="text-black">Rating:</strong> ${
              movie.vote_average || "N/A"
            }/10</p>
            <p><strong class="text-black">Release Date:</strong> ${
              movie.release_date || "N/A"
            }</p>
            <p><strong class="text-black">Storyline</strong></p>
           <p>${movie.overview || "N/A"}</p>
           <p><strong class="text-black text-xl my-2">Trailer</strong></p>
            <div>
                ${
                  trailerUrl
                    ? `<iframe class="rounded-xl" src="${trailerUrl}" width="100%" height="250" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                    : `<p class="text-4xl text-black text-center">Trailer not available.</p>`
                }
            </div>
            <p><strong class="text-black text-xl my-2">Movie</strong></p>
            <iframe 
    class="rounded-xl" 
    src="https://vidsrc.xyz/embed/movie/${movie.id}" 
    width="100%" 
    height="250" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    
    allowfullscreen>
</iframe>

        </div>
    `;

  // Show modal
  modal.classList.remove("hidden");
}

// Fetch Trailer
async function getTrailer(movieId) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Trailer not found!");

    const data = await response.json();
    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
}

// Close Modal
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("movieModal").classList.add("hidden");
});

// Load Movies Initially
getMovie(1);

// Page Change (Event Delegation)
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("num")) {
    let pageNum = event.target.value;
    let categoryChange =
      document.querySelector(".category.active")?.value || "";
    let searchQuery = document.querySelector(".searchInput").value || "";
    getMovie(pageNum, categoryChange, searchQuery);
  }
});

// Search Category Change (Event Delegation)
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("category")) {
    let categoryChange = event.target.value;

    // Remove "active" class from all categories
    document.querySelectorAll(".category").forEach((cat) => {
      cat.classList.remove("active");
    });

    // Add "active" class to the clicked category
    event.target.classList.add("active");

    // Fetch movies with updated category and search query
    let searchQuery = document.querySelector(".searchInput").value || "";
    getMovie(1, categoryChange, searchQuery);
  }
});

// Input Search (Multiple Inputs Handled)
let searchInputs = document.querySelectorAll(".searchInput");
searchInputs.forEach((input) => {
  input.addEventListener("input", function () {
    let searchQuery = input.value;
    let categoryChange =
      document.querySelector(".category.active")?.value || "";
    getMovie(1, categoryChange, searchQuery);
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      let searchQuery = input.value;
      let categoryChange =
        document.querySelector(".category.active")?.value || "";
      getMovie(1, categoryChange, searchQuery);

      input.value = ""; // Clear the input field
    }
  });
});
