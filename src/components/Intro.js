import {Link} from 'react-router-dom'

export default function Intro() {
    return (
        <div className="intro-container">
            <Link to="/game">
                <button>PLAY GAME</button>
            </Link>
        </div>
    )
}