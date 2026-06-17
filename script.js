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
    
const star =
    document.createElementNS(svgNS, "path");

star.setAttribute(
    "d",
    "m40.3 23.6-8.3-19.5-8.2 19.6c-8.7 3.5-20.2 8.3-20.1 8.3l20.1 8.2 8.2 19.7 8.3-19.7 19.9-8.2-19.9-8.4z"
);

star.setAttribute("fill", "#FFCD1F");

star.setAttribute("stroke", "#CB9302");

star.setAttribute("stroke-width", "1.5");

star.setAttribute("stroke-linecap", "round");

star.setAttribute("stroke-linejoin", "round");

star.setAttribute(
    "transform",
    "translate(90,120) scale(1)"
);

starLayer.appendChild(star);

}, 14000);


