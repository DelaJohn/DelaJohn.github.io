// Console test
console.log("Hello World");

// Alert Button
document.getElementById("alertMe").onclick = function() {
    alert("Hello world!");
};

// Hover Button
const hoverButton = document.getElementById("hoverButton");
hoverButton.onmouseover = function() {
    hoverButton.style.background = "lightblue";  // Changes color when hovered
};
hoverButton.onmouseleave = function() {
    hoverButton.style.background = "lightgray";  // Resets color when mouse leaves
};

// Incrementing Button with If-Else Condition
let count = 0;
document.getElementById("buttonCounter").onclick = function() {
    count++;
    const counterText = document.getElementById("counter");
    counterText.innerHTML = "Counter: " + count;
    
    // Change text color based on even or odd
    if (count % 2 === 0) {
        counterText.style.color = "blue";  // Color blue for even counts
    } else {
        counterText.style.color = "red";   // Color red for odd counts
    }
};

// For Loop - Printing messages inside container
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    for (let i = 0; i < 5; i++) {
        let message = document.createElement("p");
        message.textContent = "This is message number " + (i + 1);
        container.appendChild(message);  // Adds message to the container
    }
});
