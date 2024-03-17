let Randnum = parseInt(Math.round(Math.random()*100 + 1))
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const pervRest = document.querySelector('.lastResult')
const looHi = document.querySelector('.lowOrHi')
const hide = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuss = []
let numGuss = 0

let palyGame = true

if(palyGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        console.log(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter Valid Number')
    }
    else if(guess < 1){
        alert('Number is less than 0, Enter Valid Number')
    }
    else if(guess > 100){
        alert('Number is greater than 100, Enter Valid Number')
    }
    else{
        prevGuss.push(guess)
        if(numGuss === 11){
            guessDisplay(guess)
            displayMessage(`Game Over ! Random Number Was : ${Randnum}`)
            endGame()
        }
        else{
            guessDisplay(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === Randnum){
        displayMessage('You Win!!!')
        endGame()
    }
    else if(guess < Randnum){
        displayMessage('Number too Low')
    }
    else if(guess > Randnum){
        displayMessage('Number too High')
    }
}

function displayMessage(message){
    looHi.innerHTML = `<h2>${message}</h2>` 
}

function guessDisplay(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuss++
    pervRest.innerHTML = `${10-numGuss}`
}

function endGame(guess){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="startGame">Start New Game</h2>`
    hide.appendChild(p)
    palyGame=false
    startGame()
}

function startGame(guess){
    const statGam = document.querySelector('#startGame')
    statGam.addEventListener("click", function(e){
        const ranNum = parseInt(Math.round(Math.random()*100 + 1))
        prevGuss = []
        numGuss = 0
        guessSlot.innerHTML = ''
        prevGuss.innerHTML = `${10-numGuss}`
        userInput.removeAttribute('disabled')
        hide.removeChild(p)
        palyGame = true
    })
}