function saveNames() {
    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;

    document.cookie = "player1=" + player1Name;
    document.cookie = "player2=" + player2Name;


}


function saveScore1() {
    var score = document.getElementById("score").innerText;
    document.cookie = "score1=" + score;
}

function saveScore2() {
    var score = document.getElementById("score").innerText;
    document.cookie = "score2=" + score;
}

function readCookieValue(cookieName) {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + "=")) {
        var cookieValue = cookie.substring(cookieName.length + 1);
        return cookieValue;
      }
    }

    return "";
  }

function compareScores() {
    var score1 = readCookieValue("score1");
    var score2 = readCookieValue("score2");
    
    var player1 = readCookieValue("player1")
    var player2 = readCookieValue("player2")

    var resultElement = document.getElementById("result");
    
    if (isNaN(score1) || isNaN(score2)) {
      resultElement.textContent = "Scores not available.";
    } else if (score1 > score2) {
        resultElement.textContent = player1 + " won!";
    } else if (score2 > score1) {
        resultElement.textContent = player2 + " won!";
    } else {
      resultElement.textContent = "It's a tie!";
    }
  }