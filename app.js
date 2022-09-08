//create if statements for hits and accuracy
//create a loop for attacking, at end of each itireation, prompt damage dealt or if hit at all.
//prompt and console log history
//add retreat or keep going options

//create a function for battle sequence to be called again for each battle
//dont do while loop
//use nested if statements to have messages appear and update numbers over time
//think about code for multiple ships (enemyship )


// selecting playerStats HTML element
let stats = document.querySelector('.playerStats')

// selecting enemyStats HTML element
let enemyStats = document.querySelector('.enemyStats')

let playerImg = document.querySelector('.playerImage')

let enemyImg = document.querySelector('.enemyImage')


// Space Ship class with constructor
class Ship {
    constructor(Hull, Firepower, Accuracy) {
        this.Hull = Hull,
        this.Firepower = Firepower,
        this.Accuracy = Accuracy
    }
}



let spaceship = new Ship(20, 5, .7)

let enemyship = new Ship(7, 99, 1)

let enemyship2 = new Ship(8, 4, .5)

let enemyship3 = new Ship(6, 2, .4)

let enemyship4 = new Ship(5, 3, .4)

let enemyship5 = new Ship(3, 6, .2)

let enemyship6 = new Ship(2, 10, .1)

let enemies = [enemyship, enemyship2, enemyship3, enemyship4, enemyship5, enemyship6]




// initial prompt when starting game for the first time
setTimeout(() => {
    let startMessage = window.confirm('Player is traveling...');
    if (startMessage) {
        startGame()
    }
}, '3000');

// function for the game logic
function startGame () {
    alert('Enemy ship spotted!')
    
    // start battle function
    if (confirm('Do you want to attack?')) {
        
        battle(enemies)
    
    }

    else {
        alert('GG RAN BEFORE FIGHT STARTED')
    }
}


// function to update enemy stats
function updateE (invader) {
    enemyStats.innerHTML = `Hull: ${invader.Hull}<br> Firepower: ${invader.Firepower}<br> Accuracy: ${invader.Accuracy}<br>`
}

// function to update player stats
function updateS () {
    stats.innerHTML = `Hull: ${spaceship.Hull}<br> Firepower: ${spaceship.Firepower}<br> Accuracy: ${spaceship.Accuracy}<br>`
}

// battle function
function battle (ships) {
    
    ourAttack(ships[0])
}

// new battle function that asks player if they want to continue attacking
function newBattle () {

    if (enemies.length != 0) {
        updateE(enemies[0])
        setTimeout(() => {
            if (confirm('Another ship is in the distance. Attack again?')) {
                battle(enemies)
            } else {
                alert('Retreated. Game Over')

            }}, '800')
    } else {
        alert('You Win! GG EZ')
        if(confirm('Would you like to try again?')) {
            location.reload()
        } else {
            alert('Thanks for playing. Closing browser window now.')
            window.close()
        }

    }

}


// Player's attack function
function ourAttack (invader) {

    if(Math.random() < spaceship.Accuracy){
        invader.Hull -= spaceship.Firepower
        updateE(invader) 

        if (invader.Hull <= 0) {
            invader.Hull = 0
            enemyImg.classList.add('shake')
            updateE(invader)

            setTimeout(() => {
                alert(`You dealt ${spaceship.Firepower}. You win!`) 
                enemies.shift()
                newBattle(enemies)
            }, '800')

            setTimeout(() => enemyImg.classList.remove('shake'), '750')

        }  else {
            enemyImg.classList.add('shake')
            
            setTimeout (() => {
                alert(`Direct hit, you dealt ${spaceship.Firepower} damage`)
                enemyAttack(invader)
            }, '800')

            setTimeout(() => enemyImg.classList.remove('shake'), '750')
        }
        
    } else {

        setTimeout (() => {
            alert('You missed!')
            enemyAttack(invader)
        }, '800')
    }

}

// Enemy's attack function
function enemyAttack (invader) {

    if(Math.random() < invader.Accuracy){
        spaceship.Hull -= invader.Firepower
        updateS() 

        if (spaceship.Hull <= 0) {
            spaceship.Hull = 0
            updateS()
            playerImg.classList.add('shake')

            setTimeout(() => {
                alert(`Enemy dealt ${invader.Firepower}. You lose!`)
                if (confirm('Would you like to try again?')) {
                    alert('Restarting game...')
                    location.reload()
                } else {
                    alert('Rest in pizzerino.')
                    window.close()
                }
            }, '800')

            setTimeout(() => playerImg.classList.remove('shake'), '750')
            
        }  else {

            playerImg.classList.add('shake')

            setTimeout (() => {
                alert(`Direct hit, enemy dealt ${invader.Firepower} damage`)
                playerImg.classList.add('shake')
                ourAttack(invader)
            }, '800')

            setTimeout(() => playerImg.classList.remove('shake'), '750')
        }
        
    } else {
        setTimeout (() => {
            alert('Enemy missed!')
                ourAttack(invader)
            }, '800')
    }
    
}

