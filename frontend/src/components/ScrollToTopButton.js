
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import '../css/scrollToTop.css'

function ScrollToTopButton() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      }

  return (
    <div className='button-div' id='progress'>
      <NavLink to='/' onClick={scrollToTop} style={{textDecoration: 'none'}}><span className='button' onClick={scrollToTop}><FaRegArrowAltCircleUp /></span></NavLink>
      
    </div>
  )
}

export default ScrollToTopButton
