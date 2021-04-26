function displayWordSoFar(word, guesses) {

  //declareer string met streepjes
  let wordPlaces = "";

  //itereer wordlengte  en log "_ "
  for (let i = 0; i < word.length; i++) {
    //als de i'de letter van het woord voorkomt in de guesses, toon dan de letter op de i'de positie
    if (guesses.includes(word[i])) {
      wordPlaces += word[i]+" ";
      //plaats op de overige i's van het woord een underscore en een spatie
    } else {
      wordPlaces += "_ ";
    }
  }
  return wordPlaces;
}


function isGameWon(word, guesses) {
  return word.split("").every((c) => guesses.includes(c));

}

function isGameLost(word, guesses) {
  return guesses.length - guesses.includes(word) >= 8;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};