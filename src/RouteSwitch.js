import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Intro from './components/Intro'
import Game from './components/Game'
import About from './components/About'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Intro/>}/>
                <Route path='/game' element={<Game/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}