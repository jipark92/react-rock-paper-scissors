import 'bootstrap/dist/css/bootstrap.css' 
import { Accordion } from 'react-bootstrap';

export default function About() {
    return (
        <div className='about-container'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tools Used To Make This</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Who Made This?</Accordion.Header>
                    <Accordion.Body>
                        <p>Ji Park</p>
                        <a href="https://github.com/norfkorean/react-rock-paper-scissors" target="_blank">GitHub</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Game Rules</Accordion.Header>
                    <Accordion.Body>
                        <p>Rock crushes the scissor.</p>
                        <p>Paper covers the rock.</p>
                        <p>Scissor cuts the paper.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}