window.onload = function() {
  // obteniendo arreglo de celdas :
  var board = document.querySelector(".board-js");
  board.addEventListener('click', addX);
  var restartButton = document.querySelector(".restart")
  restartButton.addEventListener('click', restart);
/*
  var dataCell = document.getElementsByTagName("td");  //prueba
  dataCell.addEventListener('click',winnerX)
  var dataCell = document.getElementsByTagName("td");  //prueba
  dataCell.addEventListener('click',winnerO)
  var dataCell = document.getElementsByTagName("td");  //prueba
  dataCell.addEventListener('click',noWinner) */

}

var centinel = true;

function addX(event) {

  if (centinel) {
    event.target.textContent = "X";
    winnerX();
    centinel = false;
  } else if(centinel = !centinel) {
    event.target.textContent = "O";
    winnerO();
  } else {
    winnerMessage.textContent="Es un empate"
  }

}



var firstCell = document.querySelector(".first-cell");
var secondCell = document.querySelector(".second-cell");
var thirdCell = document.querySelector(".third-cell");
var fourthCell = document.querySelector(".fourth-cell");
var fifthCell = document.querySelector(".fifth-cell");
var sixthCell = document.querySelector(".sixth-cell");
var seventhCell = document.querySelector(".seventh-cell");
var eighthCell = document.querySelector(".eighth-cell");
var ninthCell = document.querySelector(".ninth-cell");
var winnerMessage= document.querySelector("#winner-message")

// casos en los que gana el jugador X:

function winnerX(){
  if ( (  (firstCell.textContent == "X") && (secondCell.textContent == "X") && (thirdCell.textContent == "X")     ||
           (fourthCell.textContent == "X")     && (fifthCell.textContent == "X") && (sixthCell.textContent == "X") ||
           (seventhCell.textContent == "X") && (eighthCell.textContent == "X") && (ninthCell.textContent == "X")   ||
           (firstCell.textContent == "X") && (fourthCell.textContent == "X") && (seventhCell.textContent == "X")   ||
           (secondCell.textContent == "X") && (fifthCell.textContent == "X") && (eighthCell.textContent == "X")    ||
           (thirdCell.textContent == "X") && (sixthCell.textContent == "X") && (ninthCell.textContent == "X")      ||
           (seventhCell.textContent == "X") && (fifthCell.textContent == "X") && (thirdCell.textContent == "X")    ||
           (firstCell.textContent == "X") && (fifthCell.textContent == "X") && (ninthCell.textContent == "X")  )
         ) {
      winnerMessage.textContent="Felicidades jugador X! ganaste esta partida!!"
      }
}

// casos en los que gana el jugador O :
function winnerO(){
  if ( ( (firstCell.textContent == "O") && (secondCell.textContent == "O") && (thirdCell.textContent == "O")     ||
           (fourthCell.textContent == "O")     && (fifthCell.textContent == "O") && (sixthCell.textContent == "O") ||
           (seventhCell.textContent == "O") && (eighthCell.textContent == "O") && (ninthCell.textContent == "O")   ||
           (firstCell.textContent == "O") && (fourthCell.textContent == "O") && (seventhCell.textContent == "O")   ||
           (secondCell.textContent == "O") && (fifthCell.textContent == "O") && (eighthCell.textContent == "O")    ||
           (thirdCell.textContent == "O") && (sixthCell.textContent == "O") && (ninthCell.textContent == "O")      ||
           (seventhCell.textContent == "O") && (fifthCell.textContent == "O") && (thirdCell.textContent == "O")    ||
           (firstCell.textContent == "O") && (fifthCell.textContent == "O") && (ninthCell.textContent == "O")
         )  ){
winnerMessage.textContent="Felicidades jugador O! ganaste esta partida!!"
      }

}

function restart (event){
  var cellsList = document.getElementsByTagName("td")
  for(var i =0; cellsList.length ; i++){
    cellsList[i].textContent ="";
    winnerMessage.textContent=""
  }
}
/*
function noWinner(){
  if (  (firstCell.textContent != " " && secondCell.textContent != " " && thirdCell.textContent != " " &&
  fourthCell.textContent!= " " &&  fifthCell.textContent != " " && sixthCell.textContent != " " &&
seventhCell.textContent != " " && eighthCell.textContent != " " && ninthCell.textContent != " ") {
  alert("empate")
}
} */
