const argv = require('yargs').argv
class Move {
    constructor(name, winsAgainst, losesAgainst){
        this.name = name
        this.winsAgainst = winsAgainst
        this.losesAgainst = losesAgainst
    }
}

const rock = new Move('rock', 'scissors', 'paper')
const paper = new Move('paper', 'rock', 'scissors')
const scissors = new Move('scissors', 'paper', 'rock')


class Player {
    constructor(name){
        this.name = name
        this.moves = [rock, paper, scissors]
    }

    makeMove(choice){
        if(!choice){
            return this.moves[Math.floor( Math.random() * 3 )]
        }
        else{
            for(let move of this.moves){
                if (move.name === choice) return move
            }
        }
    }
}

const computer = new Player('computer')
const user = new Player('user')

class Game {
    constructor(){}

    decide(move1, move2){
        let result
        if(move1.name === move2.name) result = '~Tie game.~'
        else if(move1.winsAgainst === move2.name) result = `~Player wins.~`
        else result = `~Computer wins.~`

        return `Playing a game of Roshambo against the computer \n
                Player plays ${move1.name}! \n
                Computer plays ${move2.name}! \n
                ${result}
            `

    }
}

if(argv.move === 'rock'){
     const result = new Game
    console.log(result.decide(user.makeMove('rock'), computer.makeMove()))
}
else if (argv.move === 'paper'){
    const result = new Game
    console.log( result.decide(user.makeMove('paper'), computer.makeMove()) )
} 
else{
    console.log(argv, argv.move)
    const result = new Game
    console.log(result.decide(user.makeMove('scissors'), computer.makeMove()) )
}
Z   