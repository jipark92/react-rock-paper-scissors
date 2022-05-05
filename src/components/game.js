import {useState} from 'react'
//bootstrap
import 'bootstrap/dist/css/bootstrap.css' 
import { Modal, Button } from 'react-bootstrap';
// images
import rockImg from '../images/rock.png'
import paperImg from '../images/paper.png'
import scissorsImg from '../images/scissors.png'

export default function Game() {
    //game useState
    const [playerChoice, setPlayerChoice] = useState()
    const [computerChoice, setComputerChoice] = useState()
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [result, setResult] = useState()
    const [showImg, setShowImg] = useState(false)
    //bootstrap useState
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //choice array
    const hands = ["rock", "paper", "scissors"]
    //player rock button function
    const choseRock = () => {
        setPlayerChoice(rockImg)
        setShowImg(true)
        let computerSelection = computerChose()
        if(hands[0] && computerSelection === hands[0]){
            setResult("Draw")
        } else if (hands[0] && computerSelection === hands[1]){
            setResult('Computer Win!')
            setComputerScore(computerScore=>computerScore+1)
        } else {
            setResult('Player Win')
            setPlayerScore(playerScore=>playerScore+1)
        }
    }
    //player paper button function
    const chosePaper = () => {
        setPlayerChoice(paperImg)
        let computerSelection = computerChose()
        if(hands[1] && computerSelection === hands[1]){
            setResult("Draw")
        } else if (hands[1] && computerSelection === hands[2]){
            setResult('Computer Win!')
            setComputerScore(computerScore=>computerScore+1)
        } else {
            setResult('Player Win')
            setPlayerScore(playerScore=>playerScore+1)
        }
    }
    //player scissorsk button function
    const choseScissors = () => {
        setPlayerChoice(scissorsImg)
        let computerSelection = computerChose()
        if(hands[2] && computerSelection === hands[2]){
            setResult("Draw")
        } else if (hands[2] && computerSelection === hands[0]){
            setResult('Computer Win!')
            setComputerScore(computerScore=>computerScore+1)
        } else {
            setResult('Player Win')
            setPlayerScore(playerScore=>playerScore+1)
        }
    }
    //random number generator
    const randomNumberGenerator = () => {
        return Math.floor(Math.random()* 3)
    }
    //computer random choice
    const computerChose = () => {
        //random number variable
        let randomNumber = randomNumberGenerator()
        //computer choice
        if (hands[randomNumber] === hands[0]){
            setComputerChoice(rockImg)
            return hands[0]
        } 
        else if (hands[randomNumber] === hands[1]){
            setComputerChoice(paperImg)
            return hands[1]
        } 
        else if (hands[randomNumber] === hands[2] ){
            setComputerChoice(scissorsImg)
            return hands[2]
        }
    }

    return (
        <div className="game-container">
            <div className='score-container'>
                <div className='player-score'>
                    <h2>Player</h2>
                    <h2>{playerScore}</h2>
                    <div>
                        {showImg && <img src={playerChoice} alt="player-choice-img"/>}
                    </div>
                </div>
                <div className='computer-score'>
                    <h2>Computer</h2>
                    <h2>{computerScore}</h2>
                    <div>
                        {showImg && <img src={computerChoice} alt="computer-choice-img"/>}
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

            <div className='reset-container'>
                {/* <button className='reset-btn'>RESET SCORE</button> */}
                <Button variant="danger" onClick={handleShow}>Reset Score</Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                <Modal.Header closeButton>
                <Modal.Title>Restart Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Do You Really Want To Reset?</p>
                    <p>All Scores will reset to 0</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={()=>{window.location.reload()}}>Understood</Button>
                </Modal.Footer>
                </Modal>
            </div>

            {/* <div className='rules-container'>
                <h1><u>Rules</u></h1>
                <h2>First to 10 Win</h2>
            </div> */}
        </div>
    )
}
