
import React, { useState } from 'react'
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";


function Counter() {

  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(0);

  return (
    <div className='counter' style={{display: 'flex', backgroundColor: '#FFF3F3', justifyContent: 'center'}}>
      <div className='count-up' style={{paddingRight: '3%'}}>
        <span onClick={() => setCountUp(countUp + 1)} style={{paddingLeft: '5px'}}>{countUp}<AiFillCaretUp style={{marginLeft: '5px', marginRight: '5px', color: 'red', fontSize: '150%', cursor: 'pointer'}} />Up Vote</span>        
      </div>
      <div className='count-down'>        
        <span onClick={() => setCountDown(countDown + 1)} style={{paddingLeft: '5px', cursor: 'pointer'}}>{countDown}<AiFillCaretDown style={{marginLeft: '5px', marginRight: '5px', color: 'red', fontSize: '150%'}} />Down Vote</span>        
      </div>
    </div>
  )
}

export default Counter
