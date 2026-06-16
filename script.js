console.log("Script loaded!");

const openButton = document.getElementById("openBottle");

console.log("Button found:", openButton);

if (openButton) {
    openButton.addEventListener("click", () => {
        console.log("Button clicked!");
        alert("Bottle opened!");
    });
}
