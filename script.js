// Digital Clock

function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // Call once to avoid delay

// Random Number Generator
function generateNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random-number").innerText = `Random Number: ${randomNum}`;
}

// Background Color Changer
function changeColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

// Greet User
function greetUser() {
    const name = document.getElementById("username").value;
    if (name) {
        document.getElementById("greeting").innerText = `Hello, ${name}!`;
    } else {
        alert("Please enter your name.");
    }
}
