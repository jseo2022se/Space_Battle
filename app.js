//create if statements for hits and accuracy
//create a loop for attacking, at end of each itireation, prompt damage dealt or if hit at all.
//prompt and console log history
//add retreat or keep going options

//create a function for battle sequence to be called again for each battle
//dont do while loop
//use nested if statements to have messages appear and update numbers over time
//think about code for multiple ships (enemyship )



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

let enemyship2 = new Ship(8, 4, .5)

let enemies = [enemyship, enemyship2]


// Setting the initial stats for player ship and first enemy ship


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

        // if else checking how many enemies left?
        
        battle(enemies)
        // confirm('Escaped from battle') 
    }

    // else when player runs from fight
    else {
        confirm('GG DIDNT EVEN FIGHT LMAO')
    }
    // confirm('What next?')
}


// function to update enemy stats
function updateE (invader) {
    enemyStats.textContent = `Hull: ${invader.Hull} Firepower: ${invader.Firepower} Accuracy: ${invader.Accuracy}`
}

// function to update player stats
function updateS () {
    stats.textContent = `Hull: ${spaceship.Hull} Firepower: ${spaceship.Firepower} Accuracy: ${spaceship.Accuracy}`
}

// battle function
function battle (ships) {
    
    ourAttack(ships[0])
}

function newBattle () {

    if (enemies.length != 0) {
        updateE(enemies[0])
        setTimeout(() => {
            if (confirm('Another ship is in the distance. Attack again?')) {
            battle(enemies)
        } else {
            confirm('Retreated. Game Over')
        }}, '500')
    } else {
        confirm('You Win! GG EZ')
    }
}


// Player's attack function
function ourAttack (invader) {

    if(Math.random() < spaceship.Accuracy){
        invader.Hull -= spaceship.Firepower
        updateE(invader) 

        if (invader.Hull <= 0) {
            invader.Hull = 0
            updateE(invader)
            setTimeout(() => {
                if(confirm(`You dealt ${spaceship.Firepower}. You win!`)) {
                    enemies.shift()
                    newBattle(enemies)
                } else {
                    enemies.shift()
                    newBattle(enemies)
                }
            }, '1000')

        }  else {

            setTimeout (() => {
                if (confirm(`Direct hit, you dealt ${spaceship.Firepower} damage`)){
                    enemyAttack(invader)
                } else {
                    enemyAttack(invader)
                }
            }, '1000')
        }
        
    } else {
        setTimeout (() => {
            if (confirm('You missed!')){
                enemyAttack(invader)
            } else {
                enemyAttack(invader)
            }}, '1000')
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
            setTimeout(() => {
                if (confirm(`Enemy dealt ${invader.Firepower}. You lose!`)) {
                    return
                } else {
                    return
                }
            }, '1000')

            }  else {

            setTimeout (() => {
                if (confirm(`Direct hit, enemy dealt ${invader.Firepower} damage`)){
                    ourAttack(invader)
                } else {
                    ourAttack(invader)
                }
            }, '1000')
        }
        
    } else {
        setTimeout (() => {
            if (confirm('Enemy missed!')){
                ourAttack(invader)
            } else {
                ourAttack(invader)
            }}, '1000')
    }

}
