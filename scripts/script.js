const generateBtn = document.getElementById("generate");
const gradientOutput = document.getElementById("gradient-output");
const orientationButtons = document.getElementById("orientation-buttons");

let currentDirection = "to right";

// Generate random hex color
function getRandomHexColor() {
  let hex = "#";
  const hexChars = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    hex += hexChars[Math.floor(Math.random() * 16)];
  }
  return hex;
}

// Apply gradient and save to localStorage
function setGradientBackground(gradientValue) {
  document.body.style.background = gradientValue;
  localStorage.setItem("gradientBackground", gradientValue);
  if (gradientOutput)
    gradientOutput.textContent = `background: ${gradientValue};`;
}

// Update background and output code
function updateGradient() {
  const color1 = getRandomHexColor();
  const color2 = getRandomHexColor();

  let gradientStyle = "";

  if (currentDirection === "radial") {
    gradientStyle = `radial-gradient(circle, ${color1}, ${color2})`;
  } else {
    gradientStyle = `linear-gradient(${currentDirection}, ${color1}, ${color2})`;
  }

  setGradientBackground(gradientStyle);
}

// On orientation button click
if (orientationButtons) {
  orientationButtons.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      currentDirection = e.target.getAttribute("data-direction");
      updateGradient();
    }
  });
}

// On generate button click
if (generateBtn) {
  generateBtn.addEventListener("click", updateGradient);
}

// Copy gradient CSS on click
if (gradientOutput) {
  gradientOutput.addEventListener("click", () => {
    navigator.clipboard.writeText(gradientOutput.textContent);
    alert("Gradient CSS copied to clipboard!");
  });
}

// Load saved gradient on page load (all pages)
window.addEventListener("DOMContentLoaded", () => {
  const savedGradient = localStorage.getItem("gradientBackground");
  if (savedGradient) {
    document.body.style.background = savedGradient;
    if (gradientOutput)
      gradientOutput.textContent = `background: ${savedGradient};`;
  }
});

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");
toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
