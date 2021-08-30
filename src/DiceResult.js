import Die from './Die'
import { useState } from 'react'
import {Row, Button} from 'react-bootstrap'

function DiceResult(props) {
    //console.log(props)

    return(<div>  {
        (() => {
          if (props.rolling===true || props.selectednumber===0) {
            return (  
               <>
               {
                (props.face ===props.selectednumber && props.face!==0) ? <Button variant="success" className="my-2">Yeyy, You won</Button> :
                (props.face!==0) ? <Button variant="warning" className="my-2">Better luck next time</Button>: null
                
               }            
                <Die face={props.face} rolling={props.rolling} /> 
               </>               
            )
          }else {
            return ( 
                <Row className="justify-content-center" style={{ height: '145px', marginTop:'80px' }}>
              <h3>Click on Roll Dice button</h3>
          </Row>
             )
          }
        })()
      }
      
      </div>);
}

export default DiceResult;