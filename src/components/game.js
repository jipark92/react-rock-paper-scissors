import {useState} from 'react'

import rockImg from '../images/rock.png'
import paperImg from '../images/paper.png'
import scissorsImg from '../images/scissors.png'

export default function Game() {

    const [playerChoice, setPlayerChoice] = useState()
    const [computerChoice, setComputerChoice] = useState()
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [result, setResult] = useState("You Win!")

    //player button functions
    const choseRock = () => {
        setPlayerChoice(rockImg)
        computerChose()
    }

    const chosePaper = () => {
        setPlayerChoice(paperImg)
        computerChose()
    }

    const choseScissors = () => {
        setPlayerChoice(scissorsImg)
        computerChose()
    }

    //computer random choice
    const computerChose = () => {

        const computerHand = [rockImg, paperImg, scissorsImg]
        
        const randomNumberGenerator = () => {
            return Math.floor(Math.random()* 3)
        }

        setComputerChoice(computerHand[randomNumberGenerator()])
    }

    return (
        <div className="game-container">
            {/* <div className='rules-container'>
                <h2></h2>
                <h2>First to 5 Win</h2>
            </div> */}
            <div className='score-container'>
                <div className='player-score'>
                    <h2>Player</h2>
                    <h2>{playerScore}</h2>
                    <div>
                        <img src={playerChoice}/>
                    </div>
                </div>
                <div className='computer-score'>
                    <h2>Computer</h2>
                    <h2>{computerScore}</h2>
                    <div>
                        <img src={computerChoice}/>
                    </div>
                </div>
            </div>

            <div className='result-container'>
                <h1>{result}</h1>
            </div>

            <div className='btns-container'>
                <button onClick={choseRock}>Rock</button>
                <button onClick={chosePaper}>Paper</button>
                <button onClick={choseScissors}>Scissors</button>
            </div>
        </div>
    )
}
