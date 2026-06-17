for(let i = 0; i < 80; i++) {

    const star =
        document.createElement("div");

    star.className = "bgStar";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top =
        Math.random() * window.innerHeight + "px";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    document.body.appendChild(star);

}
const lines =
    document.querySelectorAll(".storyLine");

lines.forEach((line, index) => {

    setTimeout(() => {

        line.animate(
            [
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ],
            {
                duration: 1500,
                fill: "forwards"
            }
        );

    }, index * 2000);

});

setTimeout(() => {

    document
        .getElementById("introScene")
        .animate(
            [
                { opacity: 1 },
                { opacity: 0 }
            ],
            {
                duration: 2000,
                fill: "forwards"
            }
        );

}, 12000);

setTimeout(() => {

    const bottleScene =
        document.getElementById("bottleScene");

    bottleScene.style.visibility =
        "visible";

    bottleScene.animate(
        [
            {
                opacity: 0,
                transform: "scale(.8)"
            },
            {
                opacity: 1,
                transform: "scale(1)"
            }
        ],
        {
            duration: 2500,
            fill: "forwards"
        }
    );

const svgNS =
    "http://www.w3.org/2000/svg";

const starLayer =
    document.getElementById("starLayer");
    
const bottleStars =
    document.getElementById("bottleStars");

for(let i = 0; i < 40; i++) {

    const star =
        document.createElementNS(
            svgNS,
            "text"
        );

    star.textContent = "✦";

    const x =
        40 + Math.random() * 100;

    const y =
        75 + Math.random() * 110;

    star.setAttribute("x", x);
    star.setAttribute("y", y);

    star.setAttribute("fill", "#FFD700");

    star.setAttribute(
        "font-size",
        6 + Math.random() * 4
    );

    star.style.opacity =
        0.4 + Math.random() * 0.6;

    star.classList.add("bottleStar");
    
    starLayer.appendChild(star);

}

}}, 14000);


