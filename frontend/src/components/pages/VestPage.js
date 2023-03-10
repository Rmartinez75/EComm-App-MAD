
import React from 'react'
import HeaderNav from '../HeaderNav'
import Vest from '../Vest'
import ScrollToTopButton from '../ScrollToTopButton'
import Footer from '../Footer'


function VestPage() {
  return (
    <div className='vest-page'>
        <HeaderNav />
        <br />
        <br />
        <br />
        <Vest />
        <ScrollToTopButton />
        <Footer />      
    </div>
  )
}

export default VestPage
