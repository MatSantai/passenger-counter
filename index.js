let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let total = 0; // This stores the cumulative total

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    total += count; // Add the current count to the cumulative total
    count = 0; // Reset the current count
    countEl.textContent = count; // Update the display
}

function updateTotalDisplay() {
    totalEl.textContent = "Total: " + total; // Display the updated total
}