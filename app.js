const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const ul = document.getElementById('phrase').firstElementChild;
const phrases = ['operate','super','dictator', 'god', 'crumpet'];




//START GAME BUTTON
startGame.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay')
    overlay.style.display = 'none';
});

// RANDOM SPLIT PHRASE GENERATOR 
function getRandomPhraseAsArray(arr) {
     const  randomPhrase = arr[Math.floor(Math.random() * arr.length)];
     let randomCharacters = randomPhrase.split('');
     return randomCharacters;
}

const splitPhrase = getRandomPhraseAsArray(phrases)

splitPhrase


// ADD RANDOM PHRASE TO DISPLAY
function addPhraseToDisplay(arr) {
        for (let i = 0; i < arr.length; i++) {
       const li = document.createElement('li');

       const letter = arr[i];
       li.textContent = letter;
       li.className = 'letter'
       ul.appendChild(li);

        }};

addPhraseToDisplay(splitPhrase)

//check if a letter is in phrase
//check if the game has been won or lost
//listen for the start game button to be pressed
//listen for the onscreen keyboard to be clicked