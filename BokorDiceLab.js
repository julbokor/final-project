// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();
var player1WinCount = 0; 
var player2WinCount = 0;      
var numDraws = 0;

// player 2 is the computer
//declaring the images as objects


function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;
    

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    //assembles the string, tells which image were going to access
    die2Image.setAttribute("src", die2Name);
}


function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      player2WinCount += 1; // computer win
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      player1WinCount += 1;   // human win
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
      numDraws += 1;
    }
  }


function numberRolls () {
  let number = prompt ("How many times would you like to play?");
 

  for (let i = 0; i < number; i += 1) {
      rollDice();
      whoWon();
  }

  banner1 = "Your total balance is " + balance;
  banner2 = "You played " + number + " rounds.";
  document.querySelector(".totals").innerHTML = banner1 + "<br>" + banner2;
  
  banner = "You won " + player1WinCount + " rounds and you lost " + player2WinCount + " rounds, with " + numDraws + " draw(s) <br>";
  document.querySelector(".details").innerHTML = banner;
}
