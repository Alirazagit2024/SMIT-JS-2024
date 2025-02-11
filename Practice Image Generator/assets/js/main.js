const images = document.querySelectorAll(".gallery-img");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const close = document.getElementById("close");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const src = image.src;
    popupImage.src = src; 
    popup.style.display = "block"; 
  });
});

close.addEventListener("click", () => {
  popup.style.display = "none"; 
});

popup.onclick = function (event) {
  if (event.target === popup) {
    popup.style.display = "none"; 
  }
};

import Together from "https://cdn.jsdelivr.net/npm/together-ai/+esm";

const API_KEY =
  "your_api_key";

// List of banned words to prevent inappropriate content
const bannedWords = [
  // Sexual Content
  "nude",
  "naked",
  "sex",
  "porn",
  "xxx",
  "explicit",
  "genital",
  "penis",
  "vagina",
  "breast",
  "orgasm",
  "bdsm",
  "fetish",
  "incest",
  "pedo",
  "child porn",
  "underage",
  "hentai",
  "erotic",
  "masturbation",
  "prostitute",
  "escort",
  "swinger",
  "orgy",

  // Violence & Harm
  "violence",
  "blood",
  "gore",
  "murder",
  "kill",
  "suicide",
  "self-harm",
  "torture",
  "decapitation",
  "amputation",
  "abortion",
  "euthanasia",
  "execution",
  "lynching",
  "massacre",
  "genocide",
  "war crime",
  "abuse",
  "rape",
  "molest",
  "human trafficking",

  // Illegal Activities
  "drug",
  "cocaine",
  "heroin",
  "meth",
  "opioid",
  "weed",
  "ecstasy",
  "lsd",
  "human trafficking",
  "scam",
  "fraud",
  "counterfeit",
  "pirated",
  "theft",
  "robbery",
  "cybercrime",
  "hack",
  "phishing",
  "exploit",
  "blackmail",

  // Controversial/Terrorism
  "terrorist",
  "isis",
  "al-qaeda",
  "taliban",
  "bomb",
  "explosive",
  "hijack",
  "jihad",
  "fatwa",
  "extremist",
  "anthrax",
  "sarin",
  "chemical weapon",

  // Modern Issues
  "deepfake",
  "revenge porn",
  "doxxing",
  "cyberbullying",
  "misinformation",
  "conspiracy theory",
  "flat earth",
  "anti-vax",
  "hate speech",
  "fake news",

  // Child Exploitation
  "child abuse",
  "csam",
  "child grooming",
  "infant",
  "toddler",
  "minor",
  "underage sex",
  "child marriage",
  "pedophilia",
  "kindergarten",

  // Evasion Attempts
  "nude",
  "boobs",
  "porn",
  "sex",
  "v14gr4",
  "cl!t",
  "fuck",
  "bitch",
  "dick",
  "without clothes",
  "no clothes",

  // Cultural Sensitivities
  "sati pratha",
  "love jihad",
  "cow lynching",
  "pakistan hate",
  "khalistan",
  "holocaust denial",
  "9/11 attack",
  "surgical strike",
  "caste slur",
];

function isPromptSafe(prompt) {
  const lowerCasePrompt = prompt.toLowerCase();
  return !bannedWords.some((word) => lowerCasePrompt.includes(word));
}

async function generateImage() {
  const prompt = document.getElementById("promptInput").value;
  const loading = document.getElementById("loading");
  const imageContainer = document.getElementById("imageContainer");
  const errorMessage = document.getElementById("errorMessage");
  const generatedImage = document.getElementById("generatedImage");

  if (!prompt.trim()) {
    showError("Please enter a valid prompt.");
    return;
  }

  if (!isPromptSafe(prompt)) {
    showError(
      "⚠️ This prompt contains restricted content. Please enter a safer prompt."
    );
    return;
  }

  try {
    loading.classList.remove("hidden");
    imageContainer.classList.add("hidden");
    errorMessage.classList.add("hidden");

    const together = new Together({ apiKey: API_KEY });
    const response = await together.images.create({
      model: "black-forest-labs/FLUX.1-schnell-Free",
      prompt: prompt,
      width: 1440,
      height: 1440,
      steps: 4,
      cfg_scale: 7.5,
      n: 1,
      response_format: "b64_json",
    });

    if (
      !response ||
      !response.data ||
      !response.data.length ||
      !response.data[0].b64_json
    ) {
      throw new Error("Invalid response from API.");
    }

    const imageUrl = `data:image/png;base64,${response.data[0].b64_json}`;
    generatedImage.src = imageUrl;
    imageContainer.classList.remove("hidden");
  } catch (error) {
    showError(error.message);
  } finally {
    loading.classList.add("hidden");
  }
}

function downloadImage() {
  const image = document.getElementById("generatedImage");
  if (!image.src || !image.src.startsWith("data:image/png;base64,")) {
    showError("No image available for download.");
    return;
  }
  const link = document.createElement("a");
  link.download = "generated-image.png";
  link.href = image.src;
  link.click();
}

function showError(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
  setTimeout(() => errorMessage.classList.add("hidden"), 5000);
}

window.generateImage = generateImage;
window.downloadImage = downloadImage;
