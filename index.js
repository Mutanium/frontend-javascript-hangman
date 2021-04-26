const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  console.log(displayWordSoFar(word, guesses));
  console.log("Dit heb je tot nu toe geraden: ", ...guesses);
  //winconditie
  if (isGameLost(word, guesses)) {
    console.log("Helaas je hebt verloren")
    { return; }
  }
  if (isGameWon(word, guesses)) {
    console.log("Hoera!, je hebt gewonnen en het woord in  " + guesses.length + " keer geraden.");
    { return; }
  }
  //einde winconditie

  const letter = question("Raad een letter: ");

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // volgende ronde! we roepen game nog een keer aan


  game(word, guesses);


}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);

const playAgain = question("Nog een keer spelen? (y/n) ");
if (playAgain === "y") {
  game("javascript", []);

} else{
  { return; }
}

