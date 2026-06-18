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

const messages = [
    "I still remember when I first realized you were going to be important to me.",
    "Every time I see Snoopy I think of you.",
    "One of my favorite memories is simply laughing with you until neither of us could stay on topic.",
    "There are jokes that would make no sense to anyone else, and I treasure them.",
    "Your warmth makes distance feel smaller.",
    "I wouldn’t trade our silly talks for the world on a silver platter.",
    "Consider this birthday app part 2 hehehehe.",
    "Do you remember the first time we told each other 'I love you'?",
    "I remember being so happy the first time you called me Starlight.",
    "It's funny how a simple conversation can become a lasting memory.",
    "There are days I remember just because you were part of them.",
    "I'm glad we crossed paths when we did.",
    "Some moments become special simply because of who you shared them with.",
    "If memories were stars, we'd already have a sky full of them.",
    "I don't remember every conversation, but I remember how many of them made me smile.",
    "Every day is special as long as I get to share it with you.",
    "Thank you for listening to things I was convinced nobody would understand.",
    "You make me feel happy and loved.",
    "You are kinder than you give yourself credit for.",
    "Thank you for every time you stayed when it would've been easier not to.",
    "I admire how resilient you are.",
    "Thank you for every bit of patience, kindness, and understanding you've shared.",
    "The world is a little brighter because you're in it.",
    "Thank you for all the little things you do that often go unnoticed.",
    "I admire your willingness to keep going, even when things aren't easy.",
    "I love ya~",
    "There are people who are glad you exist. Don't forget that.",
    "You deserve kindness, including from yourself.",
    "This star is officially certified as extra shiny.",
    "Not every treasure is hidden. Some are simply appreciated.",
    "You found another star! I hope you're smiling.",
    "You are my favorite person to talk to.",
    "Somewhere, statistically, there is a star that looks exactly like this one. Trust me.",
    "This star was caught behaving suspiciously and has been sentenced to live in this bottle. (It knows what it did.)",
    "If you shake the star bottle hard enough, Karen will appear and tell you a fact about ants.",
    "Congratulations, you found a shiny limited edition gacha gold star.",
    "This star thinks you're pretty neat :D",
    "This star would like to formally wish you a fantastic birthday.",
    "Scientists agree that finding this star makes you at least 3% cooler.",
    "This star contains traces of happiness and absolutely no calories, I think.",
    "This star has no useful information, but it's happy to be here.",
    "This star thinks bananas with soup are yummy.",
    "Congratulations! This star has chosen you as its favorite human.",
    "This star was late because it got caught up looking at a pretty moth.",
    "Thank you for setting this star free, it would have never been able to pay bail.",
    "This star would like to remind you to drink some water.",
    "The odds of you finding this exact star were exactly 100%.",
    "This star spent years training for this moment.",
    "I hope this year surprises you in good ways.",
    "I hope you find yourself exactly where you're meant to be.",
    "I hope you keep making room for wonder.",
    "I hope future-you is proud of present-you.",
    "I hope life is gentler with you this year.",
    "I hope you can appreciate how amazing you are.",
    "I hope this year brings you more reasons to smile than to worry.",
    "I hope you keep finding new things to be excited about.",
    "I hope MaGOATo comes to Street Fighter 6 (cope).",
    "I hope the next chapter of your life is filled with opportunities worth taking.",
    "I hope this year gives you plenty of reasons to feel proud of yourself.",
    "I hope you always have something to look forward to.",
    "I hope something unexpectedly wonderful happens to you this year.",
    "If this star had a wish, it would wish you happiness.",
    "This star is proud of how far you've come.",
    "There is no hidden lesson in this star. It just hopes you're having a nice day.",
    "No matter how far apart people are, they can still matter deeply.",
    "Even when things are hard and scary, I love you all the same.",
    "You are one of my favorite people to exist at the same time as.",
    "Thank you for being part of my universe.",
    "This star exists because you do <3",
    "There are countless stars in the sky, but this one is here just for you.",
    "Thank you for existing exactly as you are.",
    "Wherever life takes us, I'll always be grateful our paths crossed.",
    "You matter more than you realize.",
    "Thank you for every memory, every laugh, and every conversation.",
    "The world feels a little less lonely when you're here.",
    "This star is a reminder that I was thinking of you.",
    "This star believes in you, and it has very high standards.",
    "Consider this star a tiny high-five.",
    "This star hopes you've remembered to eat something today.",
    "You have already made more of a difference than you know.",
    "You're doing better than you think, honey.",
    "One step at a time is still progress.",
    "Don't forget to give yourself credit for how far you've come.",
    "It's okay not to have everything figured out.",
    "You don't need to be perfect to be worthy of good things.",
    "Small victories count too, they go in the win book!",
    "Some days surviving is enough.",
    "Never underestimate the progress hidden inside persistence.",
    "You have survived every difficult day you've faced so far.",
    "This star wanted to thank you for sticking around this long.",
    "Some things are worth celebrating simply because they exist. You are one of them.",
    "Somewhere above us, the universe is quietly cheering you on.",
    "The night sky would be missing something without its stars, just like life would be missing something without you.",
    "This little star traveled a long way to reach you.",
    "Some stars shine brightest after the darkest nights.",
    "The universe is unimaginably large, and yet somehow you're still the best.",
    "Somewhere tonight, a star is shining just as brightly as you.",
    "Rare Star: This star traveled very far to tell you that you're appreciated.",
    "Rare Star: This one sparkles a little brighter than the others.",
    "Happy birthday, Darling <3"
];

const modal =
    document.getElementById("messageModal");

const closeModal =
    document.getElementById("closeModal");

closeModal.addEventListener("click", () => {

    modal.classList.add("hidden");

});

const starNumber =
    document.getElementById("starNumber");

const starMessage =
    document.getElementById("starMessage");

const lines =
    document.querySelectorAll(".storyLine");

const bottle =
    document.getElementById("bottle");

console.log("Bottle:", bottle);

const cork =
    document.getElementById("cork");

const bottleStars = [];

bottle.addEventListener("click", () => {
    console.log("BOTTLE CLICKED");
    openBottle();
});

let bottleOpened = false;

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
    

    
 for(let i = 0; i < 100; i++) {   
     
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

star.style.filter =
    `drop-shadow(0 0 ${2 + Math.random()*4}px gold)`;

star.style.animation =
    `twinkle ${2 + Math.random()*3}s ease-in-out infinite`;

star.style.animationDelay =
    `${Math.random()*3}s`;

const x =
        30 + Math.random() * 120;

    const y =
        80 + Math.random() * 110;

    const scale =
        0.18 + Math.random() * 0.15;

    const rotation =
        Math.random() * 360;

    star.setAttribute(
        "transform",
        `translate(${x},${y}) scale(${scale}) rotate(${rotation})`
    );

starLayer.appendChild(star);
bottleStars.push(star);     
 }
}, 14000);

function openBottle() {

    if(bottleOpened)
        return;

    bottleOpened = true;
    
    wiggleCork();
}

function wiggleCork() {

    cork.animate(
        [
            { transform: "rotate(-5deg)" },
            { transform: "rotate(5deg)" }
        ],
        {
            duration: 120,
            iterations: 6
        }
    );


    setTimeout(
        popCork,
        750
    );

}

function popCork() {

    cork.animate(
        [
            {
                transform:
                    "translateY(0)"
            },
            {
                transform:
                    "translateY(-100px) rotate(20deg)"
            }
        ],
        {
            duration: 800,
            fill: "forwards"
        }
    );

    releaseStars();

}

function releaseStars() {

    document.getElementById("bottleSvg")
.animate(
[
    {
        filter:
            "drop-shadow(0 0 0 gold)"
    },
    {
        filter:
            "drop-shadow(0 0 40px gold)"
    }
],
{
    duration: 400
}
);
    
   document
        .getElementById("bottle")
        .animate(
            [
                { opacity: 1 },
                { opacity: 0 }
            ],
            {
                duration: 1500,
                fill: "forwards"
            }
        );

    setTimeout(() => {

        document.getElementById("bottleScene")
            .style.display = "none";

        showStarField();

    }, 1500);

}

function showStarField() {

    createStarField();

    document.body.animate(
[
    {
        filter: "brightness(1)"
    },
    {
        filter: "brightness(2)"
    },
    {
        filter: "brightness(1)"
    }
],
{
    duration: 800
}
);

    starField.style.opacity = "1";

    starField.style.pointerEvents =
        "auto";

}

function createStarField() {

    starField.innerHTML = "";

    for(let i = 0; i < messages.length; i++) {

        const star =
            document.createElement("div");

        star.className = "messageStar";

        star.innerHTML = "⭐";

        star.style.left =
            Math.random() *
            window.innerWidth + "px";

        star.style.top =
            Math.random() *
            window.innerHeight + "px";

        star.addEventListener("click", () => {

    star.classList.add("opened");

    starNumber.textContent =
        `Star ${i + 1}`;

    starMessage.textContent =
        messages[i];

    modal.classList.remove("hidden");

    updateCounter();

});

        starField.appendChild(star);

    }

}

function updateCounter() {

    const opened =
        document.querySelectorAll(
            ".messageStar.opened"
        ).length;

    document.getElementById("counter")
        .textContent =
        `⭐ ${opened} / ${messages.length} Stars Found`;

    if(opened === messages.length) {

    setTimeout(() => {

        alert(
            "✨ You found every star in the bottle. Happy Birthday, Hugo. ✨"
        );

    }, 500);

}

}
