(function () {
  let flipButton = document.getElementById("flip");
  let forwardButton = document.getElementById("goForward");
  let backButton = document.getElementById("goBack");
  let indexDisplay = document.getElementById("index");
  let categoryButtons = document
    .getElementById("subNavBarButtons")
    .querySelectorAll(".CategoryButton");

  let card = document.querySelector("#card");
  let showingAwnser =
    getComputedStyle(card).getPropertyValue("--showingAwnser");

  categoryButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
      categoryButtons.forEach((element) => {
        element.classList.remove("selectedSub");
      });
      element.classList.toggle("selectedSub");
      switch (element.id) {
        case "SWEA":
          currentList = swea;
          break;
        case "HCIA":
          currentList = hciA;
          break;
        case "HCIB":
          currentList = hciB;
          break;
        case "ISS":
          currentList = iss;
          break;
      }
      index = 0;
      card.innerHTML = currentList[index];
      updateIdexDisplay();
    });
  });

  // listerne kommer til at have både spørgsmål og svar
  // spørgsmål er 2*i
  // svar er 2*i + 1

  // og index er en value mellem 0 og 1/2 af listens længde

  const swea = ["hi", "hi back", "bye", "bye back"];

  const hciA = ["hello A", "hello back A"];

  const hciB = ["hello B", "hello back B"];

  const iss = ["hola", "hola de nuevo"];

  let index = 0;
  let currentList = swea;

  card.innerText = currentList[index];

  flipButton.onclick = function () {
    if (showingAwnser == 0) {
      showingAwnser = 1;
    } else {
      showingAwnser = 0;
    }
    card.innerHTML = currentList[index + showingAwnser];
    updateIdexDisplay();
  };

  forwardButton.onclick = function () {
    showingAwnser = 0;
    if (index == currentList.length - 2) {
      index = 0;
    } else {
      index = index + 2;
    }
    card.innerHTML = currentList[index];
    updateIdexDisplay();
  };

  backButton.onclick = function () {
    showingAwnser = 0;
    if (index == 0) {
      index = currentList.length - 2;
    } else {
      index = index - 2;
    }
    card.innerHTML = currentList[index];
    updateIdexDisplay();
  };

  updateIdexDisplay = function () {
    indexDisplay.innerHTML = index / 2 + 1 + "/" + currentList.length / 2;
  };

  updateIdexDisplay();
})();
