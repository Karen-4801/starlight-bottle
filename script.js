const messages = [
  "Message 1",
  "Message 2",
  "Message 3"
];

const openButton = document.getElementById("openBottle");
const starField = document.getElementById("starField");

const modal = document.getElementById("messageModal");
const starNumber = document.getElementById("starNumber");
const starMessage = document.getElementById("starMessage");

document.getElementById("closeModal")
.addEventListener("click", () => {
    modal.classList.add("hidden");
});

openButton.addEventListener("click", () => {

    document.getElementById("intro").style.display = "none";

    for(let i = 0; i < messages.length; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * window.innerWidth + "px";

        star.style.top =
            Math.random() * window.innerHeight + "px";

        star.addEventListener("click", () => {

            starNumber.textContent =
                `Star ${i + 1}`;

            starMessage.textContent =
                messages[i];

            modal.classList.remove("hidden");

        });

        starField.appendChild(star);
    }
});
