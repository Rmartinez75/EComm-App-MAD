import React, { useState } from 'react'
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";


function Counter() {

  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(0);

  return (
    <div className='counter' style={{display: 'flex'}}>
      <div className='count-up' style={{paddingLeft: '25px'}}>
        <text style={{paddingLeft: '10px'}}>{countUp}</text> 
        <span onClick={() => setCountUp(countUp + 1)} style={{paddingLeft: '10px'}}><AiFillCaretUp style={{color: 'red', fontSize: '150%', cursor: 'pointer'}} /></span>
        <text style={{paddingLeft: '10px'}}>Up Vote</text>
      </div>
      <div className='count-down'>
        <text style={{paddingLeft: '45px'}}>{countDown}</text>
        <span onClick={() => setCountDown(countDown + 1)} style={{paddingLeft: '10px', cursor: 'pointer'}}><AiFillCaretDown style={{color: 'red', fontSize: '150%'}} /></span>
        <text style={{paddingLeft: '10px'}}>Down Vote</text>
      </div>
    </div>
  )
}

export default Counter
