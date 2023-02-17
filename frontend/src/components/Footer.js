
import React from 'react';
import '../css/footer.css'


function Footer() {
  return (
    <div className='footer'>
        <footer>
            <div className="footer-info">
            {/* <p className="footer-tagline"><img className="svg" src="logo5.png" alt=""/> Virtual Reflection   </p> */}
            </div>            
            <div className="footer-container-background">               
            <div className="footer-container">                  
                <div className="footer-section-wrapper">
                    <div className="footer-section">
                        <p className="footer-category">COMMUNITY</p>
                        <nav className="footer-list">                          
                        <li className="foot-list">
                            <a href="" className="footer-link">Link</a>
                        </li>
                        <li className="foot-list">
                            <a href="" className="footer-link">Link</a>
                        </li>
                        </nav>
                    </div>
                    <div className="footer-section">
                        <p className="footer-category">HISTORY</p>
                        <nav className="footer-list">                          
                        <li className="foot-list">
                            <a href="" className="footer-link">Link</a>
                        </li>
                        <li className="foot-list">
                            <a href="" className="footer-link">Link</a>
                        </li>
                        </nav>
                    </div>
                    <div className="footer-section">
                        <p className="footer-category">CONTACT</p>
                        <nav className="footer-list">                          
                        <li className="foot-list">
                            <a href="" className="footer-link">Link</a>
                        </li>
                        <li className="foot-list">
                            <a href="" className="footer-link">Link</a>
                        </li>
                        </nav>
                    </div>        
                </div>                  
            </div>               
            </div>
            <div className="footer-bottom">
            <div className="footer-bottom-container">
                <p className="footer-copyright">&copy;Copyright Metaphysical Abstract Design</p>                  
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
