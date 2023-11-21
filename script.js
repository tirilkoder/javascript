// Task one

// Button one

// Find and store a reference to the class "toggle_button" in the html document
const button = document.querySelector(".toggle_button");

function themeToggle() {
    // Find and store a reference to the class "body" in the html document
    const body = document.querySelector("body");

    // Toggle the class "red_mode" on the class "body"
    body.classList.toggle("christmas_mode");
}    

// Add an event listener to the div class, listening for a "click" event, and preforming the function when activated
button.addEventListener("click", themeToggle);

//Button two

// Find and store a reference to the class "toggle_button" in the html document
const button_1 = document.querySelector(".toggle");

function themeToggle() {
    // Find and store a reference to the class "body" in the html document
    const body = document.querySelector("body");

    // Toggle the class "red_mode" on the class "body"
    body.classList.toggle("christmas_mode");
}    

// Add an event listener to the div class, listening for a "click" event, and preforming the function when activated
button_1.addEventListener("click", themeToggle);