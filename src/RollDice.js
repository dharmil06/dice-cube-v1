import React, { useState } from 'react'
import './RollDice.css'
import DiceResult from './DiceResult'

import { Container, Col, Row, Button } from 'react-bootstrap'

function RollDice() {
    const [sides, setSides] = useState([1, 2, 3, 4, 5, 6])
    const [rolling, setRolling] = useState(false)
    const [die, setDie] = useState(0)
    const [selectedNumber, setNumber] = useState(0)
    const [rollDicebtn, setRollDicebtn] = useState(true)

    function roll() {

        setRolling(true)
        setDie(Math.floor(Math.random() * sides.length) + 1)
 
        // Start timer of one sec when rolling start
        setTimeout(() => {
            // Set rolling to false again when time over
            setRollDicebtn(false)
            setRolling(true)
            setDie(0)
            setNumber(0)
        }, 2000)
    }

    function selection(value){
        setNumber(value)
        setRollDicebtn(false)
    }

    return (
        <>
            <div className='RollDice-container'>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <h2>Dice Roller Game</h2>
                            <DiceResult face={die} rolling={rolling} selectednumber={selectedNumber} />
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-2" >
                        {sides.map(item => (
                            <Button variant="outline-info" key={item} onClick={()=>selection(item)} >{item}</Button>
                        ))}
                    </Row>

                    <Row className="justify-content-center my-4" >
                        <Button variant="dark" disabled={rollDicebtn} onClick={() => roll()}>Roll Dice</Button>
                    </Row>

                    <Row className="justify-content-center my-2" >
                        {
                            selectedNumber === 0 ? <span>Select any number to star a game</span> :
                                <span>You have selected {selectedNumber}.</span>
                        }
                    </Row>

                </Container>
            </div>

        </>
    );
}

export default RollDice;