document.getElementById('homeButton').addEventListener('click', function(){
    window.location.href = 'https://cshark.dk/';
});

let table = document.querySelector("#box-wrapper");

const messages  = [
    "Apple mentioned",
    "Clemens mentions one of his devices",
    "Video games mentioned",
    "Steve Jobs mentioned",
    "Lecturer gets eye contact with C-Shark",
    "AI generated image",
    "'Look at what you can do with AI!'",
    "'Uuuhhhh'",
    "Lecturer yaps about something irrelevant to the topic",
    "Both lecturers speaks at the lecture",
    "Student goes on an irrelevant tangent",
    "Clemens wears his white glasses",
    "A student falls asleep",
    "Someone leaves during the lecture",
    "Someone is gaming in the audience",
    "Dat6 does loldle.net",
    "Notification sound",
    "Disagreement between lecturer and audience",
    "'what?'",
    "Awkward silence after lecturer asks question",
    "Someone drops something",
    "Shows a video",
    "Useless slides (Just pictures)",
    "Lecturer adjusts microphone"
];


shuffleArray(messages);
messages.splice(12, 0, "The lecture takes too long");
for (let i = 0; i < 25; i++) {
    const box = document.createElement("button");
    box.className = "box";

    const boxText = document.createElement("p");
    boxText.innerText = messages[i];

    if (i == 12) box.classList.toggle("pressed");

    box.appendChild(boxText);
    table.appendChild(box);

    box.addEventListener("click", e => {
        console.log(e);
        e.target.classList.toggle("pressed");
    })
}



// https://www.geeksforgeeks.org/javascript/how-to-shuffle-the-elements-of-an-array-in-javascript/
function shuffleArray(arr) {
    arr.sort(function (a, b) {
        return Math.random() - 0.5;
    });
}