const qwerty = document.querySelector('#qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const ul = document.getElementById('phrase').firstElementChild;
const phrases = ['operate','super','dictator', 'god', 'crumpet'];


// RANDOM SPLIT PHRASE GENERATOR 
const getRandomPhraseAsArray = arr => {
     const  randomPhrase = arr[Math.floor(Math.random() * arr.length)];
     let randomCharacters = randomPhrase.split('');
     return randomCharacters;
}

const splitPhrase = getRandomPhraseAsArray(phrases)


//^^ phrase now split up into variable///



// ADD RANDOM PHRASE TO DISPLAY
const addPhraseToDisplay = arr => {
        for (let i = 0; i < arr.length; i++) {
            const li = document.createElement('li');

            const letter = arr[i];
            li.textContent = letter;
            li.className = 'letter'
            ul.appendChild(li);
        }};


//adds phrase to display //        

//


//check if a letter is in phrase

const checkLetter = buttonClicked => {
    const letters =  document.querySelectorAll('.letter')// newly created classes from line 34
    let match = null;
for (let i = 0; i < letters.length; i++ ) { // loops through li items
    
    
    console.log(letters[i].textContent); // logs all correct LETTERS that are hidden
    
   
        if (buttonClicked === letters[i].textContent.toLowerCase()) {
                const li = ul.querySelectorAll('li')[i];
                li.classList.add("show"); // shows all correct guesses
                match = true;
        
        } 
    

}
return match;

};


//check if the game has been won or lost
const checkWin = () => {
    let hiddenLI = document.querySelectorAll('.letter')
    let shownLI = document.querySelectorAll('.show')

    console.log(hiddenLI.length, 'hidden')
    console.log(shownLI.length, 'shown')

    if (hiddenLI.length === shownLI.length) {
        const overlay = document.querySelector('#overlay');
        
        overlay.style.display = 'flex';
        overlay.className = 'win'
        overlay.firstElementChild.innerHTML =`<h2>you win</h2> `
        startGame.innerHTML = '<a>Reset Game</a>'
    }
     if (missed > 4) {
        overlay.style.display = 'flex';
        overlay.className = 'lose'
        overlay.firstElementChild.innerHTML =`<h2>you lose</h2> `
        startGame.innerHTML = '<a>Reset Game</a>'
    }
};

//START GAME BUTTON
startGame.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    if (startGame.className === 'lose' || startGame.className ==='win') {

      const reset = overlay.querySelector('a').innerHTML = `<a>Reset Game</a>`
    }
});

//listen for the onscreen keyboard to be clicked

qwerty.addEventListener('click', buttonClicked => {
    const letters =  document.querySelectorAll('.letter');
    const buttons = document.querySelectorAll('#qwerty button');
    let buttonFunction = checkLetter(buttonClicked.target.textContent.toLowerCase()); //letter user has clicked
    // document.querySelector('.keyrow').disabled = 'true';
   for (let i = 0; i < buttons.length; i++) {
        if (buttonClicked.target === buttons[i]) {
            buttons[i].className = 'chosen';
            buttons[i].disabled = 'true'// keyboard turns dark when button pressed
            checkWin()
        } 
        if (buttonFunction === null && buttonClicked.target === buttons[i]) {
                    
                    const hearts = document.querySelectorAll('.tries img');
                    hearts[missed].src = 'images/lostHeart.png';     
                    missed ++   
                    console.log('no match')
                    checkWin()
    }}
     
});

document.addEventListener('DOMContentLoaded', () => {
    startGame
    addPhraseToDisplay(splitPhrase)
    
}) 