(function () {
    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }

    function newBingoCard(text, active) {
        let newBingoCard = document.createElement("div");
        if (active) {
            newBingoCard.setAttribute("class", "bingoCell activeCell");
        } else {
            newBingoCard.setAttribute("class", "bingoCell");
        }
        newBingoCard.innerText = text;
        document.getElementById("bingoBody").append(newBingoCard);
    }

    // Bingo Cards
    const bingoCards = [
        "Apple mentioned",
        "Niklas mentions one of his devices",
        "Video games mentioned",
        "Steve Jobs mentioned",
        "Lecturer gets eye contact with C-Shark",
        "AI generated image",
        "'Look at what you can do with AI!'",
        "'Uuuhhhh'",
        "Lecturer yaps about something irrelevant to the topic",
        "Both lecturers speaks at the lecture",
        "Student goes on an irrelevant tangent",
        "Niklas wears his white glasses",
        "A student falls asleep",
        "Someone leaves during the lecture",
        "Someone is gaming in the audience",
        "Dat6 does loldle.net",
        "Notification sound",
        "Disagreement between lecturer and audience",
        "'What?'",
        "Awkward silence after lecturer asks question",
        "Someone drops something",
        "Shows a video",
        "Useless slides (Just pictures)",
        "Lecturer adjusts microphone",
        "Clemens starts casually talking to Niklas during the lecture",
        "Clemens scratches his beard",
        "Someone answers a question with an annoying british accent",
        "Picture of a Cow",
        "'here is a paper I/We worked on'",
        "No one raises thier hand when lecturer asks a question",
        "Someone has their head on the table",
        "The same student answers three questions in a row",
        "Name-drops",
        "There is only one lecturer present",
        "PowerPoint with 30+ slides",
        "He hints that a student should stop talking",
        "Bloons/Snake is being played",
        "He elaborates on something he’s already elaborated on in three previous lectures",
        "discuss for N minutes",
        "Meme on slides"
    ];

    const centerBingo = "The lecturer speaks for too long";

    shuffle(bingoCards);

    bingoCards.splice(12, 0, centerBingo);
    
    for (let i = 0; i < 25; i++) {
        let isCenterSquare = (i == 12);
        newBingoCard(bingoCards[i], isCenterSquare);
    }

    // Grab the container div
    const bingoBody = document.getElementById("bingoBody");

    // Add event listener for click events
    bingoBody.addEventListener("click", (event) => {
        // Find the clicked child element (only if it's a direct child of bingoBody)
        const clickedElement = event.target.closest("#bingoBody > *");

        if (clickedElement && bingoBody.contains(clickedElement)) {
            // Get the index of the clicked child
            const children = Array.from(bingoBody.children);
            const index = children.indexOf(clickedElement);

            if (index != 12) clickedElement.classList.toggle("activeCell");
        }
    });
})();