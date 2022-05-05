import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header className='title-container'>
            <Link to='/game'>
                <h1>React - Rock Paper Scissors</h1>
            </Link>
            <Link to='/about'>
                <p>About</p>
            </Link>
            
        </header>
    )
}