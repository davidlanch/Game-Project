let originalCards = [
  {
    id: "1",
    name: "marie",
    genre: "women",
    hairColor: "brown",
    colorSkin: "white",
    colorEyes: "brown",
    typeOfHair: "long",
    img: "marie.png",
  },

  {
    id: "2",
    name: "florian",
    genre: "male",
    hairColor: "brown",
    colorSkin: "white",
    colorEyes: "blue",
    typeOfHair: "short",
    facialHair: "beard",
    img: "florian.png",
  },

  {
    id: "3",
    name: "lola",
    genre: "women",
    hairColor: "brown",
    colorSkin: "brown",
    colorEyes: "brown",
    typeOfHair: "short",
    accesories: "glasses",
    img: "lola.png",
  },

  {
    id: "4",
    name: "constance",
    genre: "women",
    hairColor: "blond",
    colorSkin: "brown",
    colorEyes: "brown",
    typeOfHair: "short",
    accesories: "earings",
    img: "constance.png",
  },

  {
    id: "5",
    name: "priscilla",
    genre: "women",
    hairColor: "white",
    colorSkin: "white",
    colorEyes: "blue",
    typeOfHair: "short",
    accesories: "earings",
    img: "priscilla.png",
  },

  {
    id: "6",
    name: "sandra",
    genre: "women",
    hairColor: "white",
    colorSkin: "white",
    colorEyes: "brown",
    typeOfHair: "short",
    accesories: "necklace",
    img: "sandra.png",
  },

  {
    id: "7",
    name: "pedro",
    genre: "male",
    hairColor: "black",
    colorSkin: "brown",
    colorEyes: "brown",
    typeOfHair: "short",
    facialHair: "beard",
    img: "pedro.png",
  },

  {
    id: "8",
    name: "jeremie",
    genre: "male",
    hairColor: "black",
    colorSkin: "brown",
    colorEyes: "green",
    typeOfHair: "short",
    facialHair: "beard",
    img: "jeremie.png",
  },

  {
    id: "9",
    name: "marc",
    genre: "male",
    hairColor: "black",
    colorSkin: "brown",
    colorEyes: "brown",
    typeOfHair: "short",
    facialHair: "beard",
    accesories: "glasses",
    img: "marc.png",
  },

  {
    id: "10",
    name: "max",
    genre: "male",
    colorSkin: "white",
    colorEyes: "blue",
    typeOfHair: "bold",
    facialHair: "beard",
    img: "max.png",
  },

  {
    id: "11",
    name: "laura",
    genre: "women",
    hairColor: "blond",
    colorSkin: "white",
    colorEyes: "blue",
    typeOfHair: "long",
    img: "laura.png",
  },

  {
    id: "12",
    name: "guillaume",
    genre: "male",
    hairColor: "black",
    colorSkin: "white",
    colorEyes: "brown",
    typeOfHair: "short",
    facialHair: "beard",
    img: "guillaume.png",
  },

  {
    id: "13",
    name: "paul",
    genre: "male",
    colorSkin: "white",
    colorEyes: "green",
    typeOfHair: "bold",
    facialHair: "beard",
    accesories: "glasses",
    img: "paul.png",
  },

  {
    id: "14",
    name: "clara",
    genre: "women",
    hairColor: "black",
    colorSkin: "brown",
    colorEyes: "brown",
    typeOfHair: "long",
    img: "clara.png",
  },

  {
    id: "15",
    name: "hugo",
    genre: "male",
    hairColor: "white",
    colorSkin: "white",
    colorEyes: "brown",
    typeOfHair: "short",
    facialHair: "beard",
    accesories: "glasses",
    img: "hugo.png",
  },

];



const score = document.querySelector("#score span");
console.log(score);

//This function is going to create the gamepad and this gamepad is going to change everytime that the play is advanced.

function createTable(table) {
  let html = "";
  table.forEach((pic) => {
    html += `
          <div class="photos" data-card-name="${pic.name}">
            <div class="front character" style="background-image: url(./img/${pic.img}); background-size: cover; background-position: center;  width: 150px" ></div>
          </div>
        `;
  });
  const photo = document.querySelector("#board");
  photo.innerHTML = html;

  // the alert is going to show if the user win if the table.length is equal to 1
  if (table.length <= 1) {
    alert("you won bravo!");
    setTimeout(function(){ restartGame() }, 5000);
  }
}

createTable(originalCards)

let cards = [...originalCards]

//This function is going to restart the game 

function restartGame(){
  totalClicks = 0;
  totalClicksDom.textContent = totalClicks;
  totalScore = 0;
  score.textContent = totalScore;
  cards = [...originalCards]
  createTable(cards);
}

// This function is going to choose a randome character that we are going to need to find
function selectRandom(character) {
  let randomCharacter = character[Math.floor(Math.random() * character.length)];
  return randomCharacter;
}

let guess = selectRandom(cards);
console.log(guess);

//Select all the buttons of the document
const allButtons = document.querySelectorAll(".buttons > button");

//for each button we are going to add and event listener when we click and we are going to call a function (handleClick)
allButtons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
  btn.addEventListener("click", countClicks);
});

// count the clicks

const totalClicksDom = document.querySelector("#count-clicks span");
let totalClicks = 0;

function countClicks() {
  totalClicks++;
  totalClicksDom.textContent = totalClicks ;
  if (totalClicks >= 11) {
    alert("sorry you lost why-boy / why-girl");
    restartGame();
  }
}


let totalScore = 0;

//this function is going to search the information of the attributes in the html document thanks to the click event and after is going to introduce the values in the condition.
function handleClick(e) {
  const searchType = e.target.getAttribute("data-search-type");
  const searchValue = e.target.getAttribute("data-search-value");

  // Condition that are going to search if the genre that the user choose are the good
  if (searchType === "genre") {
    if (searchValue === guess.genre) {
      // Create a system of points
      totalScore+= 10;
      score.textContent = totalScore;
      console.log(totalScore);
      cards = filterGenre(cards);
      // create a new table with the cards that have this characteristics 
      createTable(cards);
    } else {
      alert("is the other genre daaaa!");
    }
  } else if (searchType === "hairColor") {
    if (searchValue === guess.hairColor) {
      totalScore+= 10;
      score.textContent = totalScore;
      cards = filterHairColor(cards);
      createTable(cards);
    } else {
      alert("is not that color hahaha");
    }
  } else if (searchType === "colorSkin") {
    if (searchValue === guess.colorSkin) {
      totalScore+= 10;
      score.textContent = totalScore;
      cards = filterSkinColor(cards);
      createTable(cards);
    } else {
      alert("try again !!!");
    }
  } else if (searchType === "colorEyes") {
    if (searchValue === guess.colorEyes) {
      totalScore+= 10;
      score.textContent = totalScore;
      cards = filterEyesColor(cards);
      createTable(cards);
    } else {
      alert("i know is difficult to see the color but try again");
    }
  } else if (searchType === "typeOfHair") {
    if (searchValue === guess.typeOfHair) {
      totalScore+= 10;
      score.textContent = totalScore;
      cards = filterHairType(cards);
      createTable(cards);
    } else {
      alert("is not the type of hair ");
    }
  } else if (searchType === "facialHair") {
    if (searchValue === guess.facialHair) {
      totalScore+= 10;
      score.textContent = totalScore;
      cards = filterFacialHair(cards);
      createTable(cards);
    } else {
      alert("This character doesnt have a beard");
    }
  } else if (searchType === "accesories") {
    if (searchValue === guess.accesories) {
      totalScore+= 10;
      score.textContent = totalScore;
      cards = filterAccesories(cards);
      createTable(cards);
    } else {
      alert(`This character doesnt have this accesory`);
    }
  }
}

// function that is going to filter the genre of the characters

function filterGenre(gamePad) {
  let foundGenre = gamePad.filter((card) => card.genre === guess.genre);
  return foundGenre;
}
// function that is going to filter the color hair of the characters

function filterHairColor(gamePad) {
  let foundHairColor = gamePad.filter(
    (hair) => hair.hairColor === guess.hairColor
  );
  return foundHairColor;
}

// function that is going to filter the skin color of the characters

function filterSkinColor(gamePad) {
  let foundSkinColor = gamePad.filter(
    (skin) => skin.colorSkin === guess.colorSkin
  );
  return foundSkinColor;
}

// function that is going to filter the eyes color of the characters

function filterEyesColor(gamePad) {
  let foundEyesColor = gamePad.filter(
    (eyes) => eyes.colorEyes === guess.colorEyes
  );
  return foundEyesColor;
}

// function that is going to filter the type of hair of the characters

function filterHairType(gamePad) {
  let foundHairType = gamePad.filter(
    (hair) => hair.typeOfHair === guess.typeOfHair
  );
  return foundHairType;
}

// function that is going to filter if the character has facial hair

function filterFacialHair(gamePad) {
  let foundFacialHair = gamePad.filter(
    (faceHair) => faceHair.facialHair === guess.typeOfHair
  );
  return foundFacialHair;
}

// function that is going to filter if the character has accesories

function filterAccesories(gamePad) {
  let foundAccesories = gamePad.filter(
    (accesory) => accesory.accesories === guess.accesories
  );
  return foundAccesories;
}
