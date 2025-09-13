/* =====================
   Part 2: Functions
===================== */

// Global variable
let globalFactor = 5;

// Function with parameters & return value
function multiply(a, b) {
  return a * b;
}

// Function demonstrating scope
function calculateWithGlobal(num) {
  // Uses globalFactor inside local scope
  return multiply(num, globalFactor);
}

// Function to show result in DOM
function showCalculation() {
  let localValue = 10;
  let result = calculateWithGlobal(localValue);
  document.getElementById("math-result").textContent = 
    `Calculated: ${localValue} × ${globalFactor} = ${result}`;
}

/* =====================
   Part 3: CSS + JS
===================== */

const animateBtn = document.getElementById("animateBtn");
const targetBox = document.querySelector(".animate-target");

animateBtn.addEventListener("click", () => {
  // Toggle class to trigger CSS animation
  targetBox.classList.toggle("active");
});
