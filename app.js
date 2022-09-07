// create if statemetns for hits and accuracy
// create loop for attacking at end of each iteration, prompt damage dealt or if hit at all
// prompt and console log history
// add retreat or keep going options

// create function for battle sequence to be called again for each battle
// dont do while loop
// 




let stats = document.querySelector('.playerStats')

let enemyStats = document.querySelector('.enemyStats')

// Ship Factory
class Ship {
    constructor(Hull, Firepower, Accuracy) {
        this.Hull = Hull,
        this.Firepower = Firepower,
        this.Accuracy = Accuracy
    }
}

let spaceship = new Ship(20, 5, .7)

let enemyship = new Ship(7, 3, .6)


// initial prompt when starting game for the first time
setTimeout(() => {
    let startMessage = window.confirm('Player is traveling...');
    if (startMessage) {
        startGame()
    }
}, '3000');

// function for the game logic
function startGame () {
    confirm('Enemy ship spotted!')
    
    // start battle function
    if (confirm('Do you want to attack?')) {
        battle()
    }

    // else when player runs from fight
    else {
        confirm('GG DIDNT EVEN FIGHT LMAO')
    }
}

// battle function
function battle () {
    while (enemyship.Hull > 0 || spaceship.Hull > 0) {

        // attacking enemy ship
        if (Math.random() < spaceship.Accuracy) {
            confirm(`You hit the enemy for ${spaceship.Firepower}!`)
            enemyship.Hull -= spaceship.Firepower
            updateE()
        }
        else {
            confirm('You missed!')
        }

        // enemy attacking our ship
        if (Math.random() < enemyship.Accuracy) {
            confirm(`You got hit for ${enemyship.Firepower}!`)
            spaceship.Hull -= enemyship.Firepower
            updateS()
        }
        else {
            confirm('Enemy missed!')
        }

        // if enemy ship or our ship has 0 health
        // force quit out of while loop
        if (enemyship.Hull <= 0) {
            enemyship.Hull = 0
            updateE()
            break
        } else if (spaceship.Hull <= 0) {
            spaceship.Hull = 0
            updateS()
            break
        }
    }

    // asking player if they want to continue traveling
    confirm("You won against the enemy.")
    if (confirm("Continue travel?")) {
        startGame()
    }

    // if not, then game stops at this point
    else {
        confirm('GG RUNNING AFTER FIGHT LMAO')
    }
}


// function to update enemy stats
function updateE () {
    enemyStats.textContent = `Hull: ${enemyship.Hull} Firepower: ${enemyship.Firepower} Accuracy: ${enemyship.Accuracy}`
}

// function to update player stats
function updateS () {
    stats.textContent = `Hull: ${spaceship.Hull} Firepower: ${spaceship.Firepower} Accuracy: ${spaceship.Accuracy}`
}