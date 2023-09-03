function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function playGame() {
    var dice1 = document.querySelector(".img1");
    var dice2 = document.querySelector(".img2");
    var player1Score = generateRandomNumber();
    var player2Score = generateRandomNumber();

    dice1.src = "images/dice" + player1Score + ".png";
    dice2.src = "images/dice" + player2Score + ".png";

    var resultText = "Refresh Me";
    if (player1Score > player2Score) {
      resultText = "Player 1 WINS";
    } else if (player1Score < player2Score) {
      resultText = "Player 2 WINS";
    } else {
      resultText = "It's a DRAW";
    }

    document.querySelector("h1").textContent = resultText;
  }

  // Call the function when the page loads
  playGame();