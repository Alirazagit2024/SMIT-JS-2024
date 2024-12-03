let theme = document.getElementById('theme');
// let card = document.getElementsByClassName('plan-card');

let istheme = 0;
theme.addEventListener("click", function () {
if (istheme == 1) {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  theme.innerHTML = '<i class="fa-solid fa-sun"></i>'
  // card.style.borderColor = "black";
  // card.style.backgroundColor = "black";
  // card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.7)';
  // image.style.borderColor = "black";
  // text.style.color = "black";
  istheme = 0;
} else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    theme.innerHTML = '<i class="fa-solid fa-moon"></i>'
    // card.style.borderColor = "white";
    // card.style.backgroundColor = "black";
    // card.style.boxShadow = ' 0 4px 12px rgba(255, 255, 255, 0.7)';
// image.style.borderColor = "red";
// text.style.color = "white";
istheme = 1;
}
});

// Step 1: Constructor Function
function GamingPlan(name, price, features, games, support, benefits) {
  this.name = name;
  this.price = price;
  this.features = features;
  this.games = games; // Array of games (name + image)
  this.support = support;
  this.benefits = benefits; // Special benefits
}

// Step 2: Add Game Data for Each Plan
const basicPlan = new GamingPlan(
  "Basic Plan",
  "$5/month",
  [
    "10GB Storage",
    "Access to 10 Games",
    "Single Device"
  ],
  [
    { name: "Max Payne 3", image: "assets/images/maxpayne3-p.jpg" },
    { name: "Minecraft", image: "assets/images/minecraft-p.jpg" }
  ],
  "Email Support",
  "Perfect for casual gamers!"
);

const proPlan = new GamingPlan(
  "Pro Plan",
  "$15/month",
  [
    "50GB Storage",
    "Access to 50 Games",
    "Multi-Device Access"
  ],
  [
    { name: "Sniper Elite 3", image: "assets/images/sniperelite3-p.jpg" },
    { name: "Call of Duty", image: "assets/images/cod-p.jpg" },
    { name: "GTA V", image: "assets/images/gtav-p.png" },
    { name: "Forza Horizon", image: "assets/images/forzahorizon-p.jpg" }
  ],
  "Email + Phone Support",
  "Great for competitive gamers!"
);

const businessPlan = new GamingPlan(
  "Business Plan",
  "$25/month",
  [
    "Unlimited Storage",
    "Unlimited Games",
    "Multi-Device Premium Access"
  ],
  [
    { name: "Cricket 24", image: "assets/images/cricket24-p.jpg" },
    { name: "GTA VI", image: "assets/images/gtavi-p.jfif" },
    { name: "Watch Dogs 2", image: "assets/images/watchdogs2-p.jfif" },
    { name: "Far Cry", image: "assets/images/farcry-p.jpg" },
    { name: "Uncharted 4", image: "assets/images/uncharted4-p.jpg" }
  ],
  "24/7 Support",
  "Best choice for pro gamers and streamers!"
);

// Step 3: Store All Plans in Array
const gamingPlans = [basicPlan, proPlan, businessPlan];

// Step 4: Dynamically Render Plans
const plansContainer = document.getElementById("plans");

gamingPlans.forEach((plan) => {
  // Create a card
  const card = document.createElement("div");
  card.className = "plan-card";

  // Plan details
  card.innerHTML = `
    <h2>${plan.name}</h2>
    <p><strong>Price:</strong> ${plan.price}</p>
    <div class="features">
      <strong>Features:</strong>
      <ul>
        ${plan.features
          .map(
            (feature) => `<li><i class="fa-solid fa-check"></i> ${feature}</li>`
          )
          .join("")}
      </ul>
    </div>
    <div class="games">
      <strong>Games Available:</strong>
      <div>
        ${plan.games
          .map(
            (game) => `<img src="${game.image}" alt="${game.name}" title="${game.name}">`
          )
          .join("")}
      </div>
    </div>
    <p><strong>Benefits:</strong> ${plan.benefits}</p>
    <p><strong>Support:</strong> ${plan.support}</p>
    <button onclick="buyPlan('${plan.name}', '${plan.price}')">Buy Now</button>
  `;

  plansContainer.appendChild(card);
});

// Step 5: Buy Now Logic
function buyPlan(name, price) {
  alert(`Congratulations! You selected the ${name} for ${price}.`);
}
