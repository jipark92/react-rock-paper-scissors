import {useState} from 'react'

import rockImg from '../images/rock.png'
import paperImg from '../images/paper.png'
import scissorsImg from '../images/scissors.png'



export default function Game() {

    const [playerChoice, setPlayerChoice] = useState("")
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)

    return (
        <div className="game-container">

            <div className='score-container'>
                <div className='player-score'>
                    <h2>Player</h2>
                    <h2>{playerScore}</h2>
                    <div></div>
                </div>
                <div className='computer-score'>
                    <h2>Computer</h2>
                    <h2>{computerScore}</h2>
                    <div></div>
                </div>
            </div>

            <div className='btns-container'>
                <button>Rock</button>
                <button>Paper</button>
                <button>Scissors</button>
            </div>
        </div>
    )
}
