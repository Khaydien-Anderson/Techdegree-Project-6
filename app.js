const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');

const phrases = ['operate','super','dictator', 'god', 'crumpet'];




//START GAME BUTTON
startGame.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay')
    overlay.style.display = 'none';
});

// RANDOM SPLIT PHRASE GENERATOR 
function getRandomPhraseAsArray(arr) {
     const  randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
     let randomCharacters = randomPhrase.split('');
     return randomCharacters;
}




// // ADD RANDOM PHRASE TO DISPLAY
// function addPhraseToDisplay(randomPhrase) {
//         for (let i = 0; i < randomPhrase.length; i++) {
//        randomPhrase.join()

//         }



//check if a letter is in phrase
//check if the game has been won or lost
//listen for the start game button to be pressed
//listen for the onscreen keyboard to be clicked