
import React from 'react'
import Header from '../HeaderNav'
import About from '../About'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'
import ScrollToTopButton from '../ScrollToTopButton'


function AboutPage() {
  return (
    <div>
        <ScrollToTop />
        <Header />
        <About />
        <ScrollToTopButton />
        <Footer />      
    </div>
  )
}

export default AboutPage
