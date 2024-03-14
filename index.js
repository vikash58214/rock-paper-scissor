const arr = [
  document.getElementById("comp-rock"),
  document.getElementById("comp-paper"),
  document.getElementById("comp-scissor"),
];
var myTrun = "";
var comTurn = "";
let randomNumber = Math.floor(Math.random() * 3);
let myScore = parseInt(localStorage.getItem("myscore")) || 0;
document.getElementById("my-score").innerHTML = myScore;

function updateScore() {
  document.getElementById("my-score").innerHTML = myScore;
}

let comScore = parseInt(localStorage.getItem("comScore")) || 0;
document.getElementById("com-score").innerHTML = comScore;

function updateComScore() {
  document.getElementById("com-score").innerHTML = comScore;
}

const openPopup = () => {
  document.getElementById("popup").style.display = "block";
};

const closePopup = () => {
  document.getElementById("popup").style.display = "None";
};

document.getElementById("popupButton").addEventListener("click", openPopup);
document.getElementById("closePopup").addEventListener("click", closePopup);

const playAgain = () => {
  window.location.reload();
};

document.getElementById("playAgain").addEventListener("click", playAgain);
const play = () => {
  document.getElementById("object").style.display = "None";
  document.getElementById("your-rock").style.display = "block";

  myTrun = document.getElementById("your-rock").className;
  setTimeout(computerMove, 1000);
};
const paper = () => {
  document.getElementById("object").style.display = "None";
  document.getElementById("your-paper").style.display = "block";

  myTrun = document.getElementById("your-paper").className;
  setTimeout(computerMove, 1000);
};
document.getElementById("paper-btn").addEventListener("click", paper);

const scissor = () => {
  document.getElementById("object").style.display = "None";
  document.getElementById("your-scissor").style.display = "block";

  myTrun = document.getElementById("your-scissor").className;
  setTimeout(computerMove, 1000);
};
document.getElementById("scissor-btn").addEventListener("click", scissor);

//------------computer-move-----------------
const computerMove = async () => {
  arr[randomNumber].style.display = "block";
  var comTurn = arr[randomNumber].className;

  if (myTrun == "my-move-rock" && comTurn == "comp-scissor") {
    document.getElementById("end-title").style.display = "block";
    document.getElementById("next").style.display = "block";
    myScore++;
    localStorage.setItem("myscore", myScore);
    updateScore();
  } else if (myTrun == "my-move-rock" && comTurn == "comp-paper") {
    document.getElementById("end-title").style.display = "block";
    document.getElementById("end-h3").innerHTML = "YOU LOST";
    comScore++;
    localStorage.setItem("comScore", comScore);
    updateComScore();
  } else if (myTrun == "my-move-rock" && comTurn == "comp-rock") {
    document.getElementById("end-title").style.display = "block";
    document.getElementById("end-h3").innerHTML = "TIE UP";
    console.log("tie");
  } else if (myTrun == "my-move-paper" && comTurn == "comp-paper") {
    document.getElementById("end-title").style.display = "block";
    document.getElementById("end-h3").innerHTML = "TIE UP";
    console.log("tie");
  } else if (myTrun == "my-move-scissor" && comTurn == "comp-scissor") {
    document.getElementById("end-title").style.display = "block";
    document.getElementById("end-h3").innerHTML = "TIE UP";
    console.log("tie");
  } else if (myTrun == "my-move-paper" && comTurn == "comp-rock") {
    document.getElementById("end-title").style.display = "block";
    document.getElementById("next").style.display = "block";
    myScore++;
    localStorage.setItem("myscore", myScore);
    updateScore();
  } else if (myTrun == "my-move-paper" && comTurn == "comp-scissor") {
    document.getElementById("end-title").style.display = "block";
    document.getElementById("end-h3").innerHTML = "YOU LOST";
    comScore++;
    localStorage.setItem("comScore", comScore);
    updateComScore();
  } else if (myTrun == "my-move-scissor" && comTurn == "comp-rock") {
    document.getElementById("end-title").style.display = "block";
    document.getElementById("end-h3").innerHTML = "YOU LOST";
    comScore++;
    localStorage.setItem("comScore", comScore);
    updateComScore();
  } else if (myTrun == "my-move-scissor" && comTurn == "comp-paper") {
    document.getElementById("end-title").style.display = "block";
    document.getElementById("next").style.display = "block";
    myScore++;
    localStorage.setItem("myscore", myScore);
    updateScore();
  }
};

const won = () => {
  window.location.href = "win.html";
};
document.getElementById("next").addEventListener("click", won);
