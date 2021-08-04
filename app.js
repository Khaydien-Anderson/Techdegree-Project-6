const qwerty = document.querySelector('#qwerty');
const phrase = document.getElementById('phrase');
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
addPhraseToDisplay(splitPhrase)
//


//check if a letter is in phrase

const checkLetter = button => {
    const letters =  document.querySelectorAll('[class="letter"]')// newly created classes from line 34
    const buttons = document.querySelectorAll('[class="keyrow"] button')
    
for (let i = 0; i < letters.length; i++ ) {
    const correctAnswer = letters[i].textContent
    console.log(correctAnswer) // logs all correct LETTERS that are hidden
    
   
        if (button === correctAnswer) {

            for (let x = 0; x < button.length; x++) {
                const li = ul.querySelectorAll('li');
                li[x].className = "show" // shows all correct guesses
                
            }

        }
    


}};

const checkWin = () => {


}

qwerty.addEventListener('click', e => {
  

});
   







//check if the game has been won or lost
//listen for the start game button to be pressed
//listen for the onscreen keyboard to be clicked