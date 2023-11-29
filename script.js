// WEEK ONE - TASK ONE
// Button one

// Find and store a reference to the class "toggle_button" in the html document
const button = document.querySelector(".toggle_button");

function themeToggle() {
    // Find and store a reference to the class "body" in the html document
    const body = document.querySelector("body");

    // Toggle the class "red_mode" on the class "body"
    body.classList.toggle("christmas_mode");
}    

// Eventlistener, listening for a "click" event, and preforming the function when clicked
button.addEventListener("click", themeToggle);

// TASK TWO
// Button two

const button_1 = document.querySelector(".toggle");

function themeToggle() {
    const body = document.querySelector("body");
    body.classList.toggle("christmas_mode");
}    

button_1.addEventListener("click", themeToggle);



// TASK THREE
// Part one

// Find and store a reference to the class in the html document
const image = document.querySelector(".task_one_image");

// Function that toggles the class
function imageSize() {
    image.classList.toggle("task_one_image_big");
}

image.addEventListener("click", imageSize);

// TASK FOUR
// Part two

let photo = document.querySelectorAll(".image_one");
// Loop through each element using a for loop
for (let index = 0; index < photo.length; index++) {
	let photoImage = photo[index];

	// Adding event listener with an arrow function to activate
	photoImage.addEventListener("click", () => {
		// Making the clicked image bigger
		photoImage.classList.toggle("image_one_big");
	});
}

let photo_two = document.querySelectorAll(".task_two_image");

for (let index = 0; index < photo_two.length; index++) {
	let photo = photo_two[index];

	photo.addEventListener("click", () => {
		
		photo.classList.toggle("task_two_image_big");
	});
}



// WEEK TWO - TASK ONE
// Part one

// Find and store a reference to the class in the html document
const infoForm = document.querySelector("#info_form");
const username = document.querySelector("#name");
const infoList = document.querySelector("#info_list");
const buttonAdd = document.querySelector(".button_add");

// Function that adds new information as a paragraph
function addInput() {
    if (username.value) {
        const newInfo = document.createElement("p");
        
        newInfo.textContent = username.value;

        // Adds the element we have created to the website
        infoList.appendChild(newInfo);

    } else {
        alert("Skriv inn navn");
    }
}

buttonAdd.addEventListener("click", addInput);

//Prevents typical form submission behavior and listening to addInput()
infoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addInput();
});