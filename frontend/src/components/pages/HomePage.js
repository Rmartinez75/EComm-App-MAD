
import React from 'react'
import HeaderNav from '../HeaderNav'
import MainBackground from '../MainBackground'
import MobileBackground from '../MobileBackground'
import Vest from '../Vest'
import Footer from '../Footer'
import ScrollToTopButton from '../ScrollToTopButton'


function HomePage() {
  return (
    <div>
        <HeaderNav />
        <MainBackground />
        <MobileBackground />
        <Vest />
        <ScrollToTopButton />
        <Footer />      
    </div>
  )
}

export default HomePage
