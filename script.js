
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

}, 14000);

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
