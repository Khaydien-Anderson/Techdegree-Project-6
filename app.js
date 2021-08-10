const qwerty = document.querySelector('#qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const ul = document.getElementById('phrase').firstElementChild;
const phrases = ['JAVA SCRIPT','HT ML','TREE HOUSE', 'REA CT', 'PRO GRAMMING'];

// RANDOM SPLIT PHRASE GENERATOR 
const getRandomPhraseAsArray = arr => {
    const  randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    let randomCharacters = randomPhrase.split('');
    return randomCharacters;
}

// ADD RANDOM PHRASE TO DISPLAY
const addPhraseToDisplay = arr => {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        
        li.textContent = arr[i]
        // li.classList.add('letter')
        
        
        
        
        if ( arr[i] !== ' ') {
            li.classList.add("letter");
            
        } else {
            li.classList.add("space");
        }
        ul.appendChild(li);
    }};

    //check if a letter is in phrase

const checkLetter = buttonClicked => {
    const letters =  document.querySelectorAll('.letter')// newly created classes from line 34
    let match = null;
for (let i = 0; i < letters.length; i++ ) { // loops through li items
    
    
    console.log(letters[i].textContent); // logs all correct LETTERS that are hidden
    
   
        if (buttonClicked === letters[i].textContent.toLowerCase()) {
                const li = ul.querySelectorAll('li')[i];
                li.classList.add("show"); // shows all correct guesses
                li.style.transition = '0.3s ease-in'
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
    const splitPhrase = getRandomPhraseAsArray(phrases)
    addPhraseToDisplay(splitPhrase)
    if (overlay.className === 'lose' || overlay.className ==='win') {

      const reset = overlay.querySelector('a').innerHTML = `<a>Reset Game</a>`
        missed = 0;
        const resetPhrase = document.querySelector('#phrase ul')
        resetPhrase.innerHTML = ''
        const buttons = document.querySelectorAll('#qwerty button');
        const hearts = document.querySelectorAll('.tries img');
        
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = '';
            buttons[i].removeAttribute('disabled');
    }
        for (let i = 0; i< 5; i++) {
            hearts[i].src = 'images/liveHeart.png'; 
        }
    
        
        const splitPhrase = getRandomPhraseAsArray(phrases)
        addPhraseToDisplay(splitPhrase)
        overlay.style.display = 'none'; 
    }
});


//listen for the onscreen keyboard to be clicked

qwerty.addEventListener('click', buttonClicked => {
    const letters =  document.querySelectorAll('.letter');
    const buttons = document.querySelectorAll('#qwerty button');
    const overlay = document.querySelector('#overlay');
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
                    
    }

}
     
});

