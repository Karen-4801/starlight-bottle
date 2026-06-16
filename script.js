const messages = Array.from(
    { length: 100 },
    (_, i) => `Star ${i + 1}`
);

const openButton = document.getElementById("openBottle");
const starField = document.getElementById("starField");

const modal = document.getElementById("messageModal");
const starNumber = document.getElementById("starNumber");
const starMessage = document.getElementById("starMessage");
const bottleStars =
    document.getElementById("bottleStars");

for(let i = 0; i < 100; i++) {

    const star =
        document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 160 + "px";

    star.style.top =
        Math.random() * 200 + "px";

    bottleStars.appendChild(star);

}

document.getElementById("closeModal")
.addEventListener("click", () => {
    modal.classList.add("hidden");
});

openButton.addEventListener("click", () => {

    document.getElementById("intro").style.display = "none";

 let discovered = 0;
const openedStars = new Set();

   for(let i = 0; i < messages.length; i++) {

    const star = document.createElement("div");
    star.className = "star";

    const startX = window.innerWidth / 2;
    const startY = 250;

    star.style.left = startX + "px";
    star.style.top = startY + "px";

    starField.appendChild(star);

    const x = (Math.random() - 0.5) * window.innerWidth;
    const y = (Math.random() - 0.5) * window.innerHeight;

    star.animate(
        [
            { transform: "translate(0,0)" },
            { transform: `translate(${x}px, ${y}px)` }
        ],
        {
            duration: 2000,
            fill: "forwards"
        }
    );

    star.addEventListener("click", () => {

        starNumber.textContent = `Star ${i + 1}`;
        starMessage.textContent = messages[i];

        modal.classList.remove("hidden");

      if (!openedStars.has(i)) {

    openedStars.add(i);
    discovered++;

    document.getElementById("counter")
        .textContent =
        `${discovered} / ${messages.length} Stars Found`;
}

    });

}

});
