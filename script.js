const box1 = document.getElementById("1");
const box2 = document.getElementById("2");
const box3 = document.getElementById("3");
const box4 = document.getElementById("4");
const box5 = document.getElementById("5");
const box6 = document.getElementById("6");
const box7 = document.getElementById("7");
const box8 = document.getElementById("8");
const box9 = document.getElementById("9");
const square = document.querySelectorAll(".square");
const allSqure = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
let declareWinner = document.getElementById("Winner")
let playerText = "X";
let gameStillOn = true;
let winner = "";
let level = 0

//get id of the block user clicks
square.forEach((elem) => {
      elem.addEventListener("click", () => {
            if (gameStillOn === true) {
                  if (!elem.textContent) {
                        elem.textContent = playerText;
                        checkWinner();
                        if (gameStillOn) {
                              computerTurn();
                        }
                  }
            }
            declareWinner.innerText = `${winner}`
      });
});

function computerTurn() {
      let emptySquare = allSqure.filter((elem) => !elem.textContent);
      let randCompTurn = Math.floor(Math.random() * emptySquare.length);
      if (emptySquare.length > 0) {
            emptySquare[randCompTurn].textContent = "O";
            checkWinner();
      }
}

function checkWinner() {
      if (
            box1.textContent === "X" &&
            box2.textContent === "X" &&
            box3.textContent === "X"
      ) {
            winner = "Player Wins!";
            gameStillOn = false;
      } else if (
            box4.textContent === "X" &&
            box5.textContent === "X" &&
            box6.textContent === "X"
      ) {
            winner = "Player Wins!";
            gameStillOn = false;
      } else if (
            box7.textContent === "X" &&
            box8.textContent === "X" &&
            box9.textContent === "X"
      ) {
            winner = "Player Wins!";
            gameStillOn = false;
      } else if (
            box1.textContent === "X" &&
            box4.textContent === "X" &&
            box7.textContent === "X"
      ) {
            winner = "Player Wins!";
            gameStillOn = false;
      } else if (
            box2.textContent === "X" &&
            box5.textContent === "X" &&
            box8.textContent === "X"
      ) {
            winner = "Player Wins!";
            gameStillOn = false;
      } else if (
            box3.textContent === "X" &&
            box6.textContent === "X" &&
            box9.textContent === "X"
      ) {
            winner = "Player Wins!";
            gameStillOn = false;
      } else if (
            box1.textContent === "X" &&
            box5.textContent === "X" &&
            box9.textContent === "X"
      ) {
            winner = "Player Wins!";
            gameStillOn = false;
      } else if (
            box3.textContent === "X" &&
            box5.textContent === "X" &&
            box7.textContent === "X"
      ) {
            winner = "Player Wins!";
            gameStillOn = false;
      } else if (
            box1.textContent === "O" &&
            box2.textContent === "O" &&
            box3.textContent === "O"
      ) {
            winner = "Computer Wins!";
            gameStillOn = false;
      } else if (
            box4.textContent === "O" &&
            box5.textContent === "O" &&
            box6.textContent === "O"
      ) {
            winner = "Computer Wins!";
            gameStillOn = false;
      } else if (
            box7.textContent === "O" &&
            box8.textContent === "O" &&
            box9.textContent === "O"
      ) {
            winner = "Computer Wins!";
            gameStillOn = false;
      } else if (
            box1.textContent === "O" &&
            box4.textContent === "O" &&
            box7.textContent === "O"
      ) {
            winner = "Computer Wins!";
            gameStillOn = false;
      } else if (
            box2.textContent === "O" &&
            box5.textContent === "O" &&
            box8.textContent === "O"
      ) {
            winner = "Computer Wins!";
            gameStillOn = false;
      } else if (
            box3.textContent === "O" &&
            box6.textContent === "O" &&
            box9.textContent === "O"
      ) {
            winner = "Computer Wins!";
            gameStillOn = false;
      } else if (
            box1.textContent === "O" &&
            box5.textContent === "O" &&
            box9.textContent === "O"
      ) {
            winner = "Computer Wins!";
            gameStillOn = false;
      } else if (
            box3.textContent === "O" &&
            box5.textContent === "O" &&
            box7.textContent === "O"
      ) {
            winner = "Computer Wins!";
            gameStillOn = false;
      }
}

console.log(square);

// -------------------------------JS For popup ----------------------------------------

const popup = document.querySelectorAll(".lvl")
popup.forEach((elem)=>{
      elem.addEventListener("click",()=>{
            
      })
})



