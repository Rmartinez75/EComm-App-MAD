import React from 'react'
import { Nav } from 'react-bootstrap'
import '../css/footer.css'

function Footer() {
  return (
    <div className='footer' expand='lg'>
      <Nav className="justify-content-center top-footer" activeKey="/home">
        <Nav.Item className="footer-category">
            <p className='footer-titles'>COMMUNITY</p>
            <Nav.Link className='footer-links' eventKey="link-2">Link</Nav.Link>
            <Nav.Link className='footer-links' eventKey="link-2">Link</Nav.Link>
            <Nav.Link className='footer-links' eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item className="footer-category">
            <p className='footer-titles'>HISTORY</p>
            <Nav.Link className='footer-links' eventKey="link-1">Link</Nav.Link>
            <Nav.Link className='footer-links' eventKey="link-1">Link</Nav.Link>
            <Nav.Link className='footer-links' eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item className="footer-category">
            <p className='footer-titles'>CONTACT</p>
            <Nav.Link className='footer-links' eventKey="link-2">Link</Nav.Link>
            <Nav.Link className='footer-links' eventKey="link-2">Link</Nav.Link>
            <Nav.Link className='footer-links' eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>      
      <Nav className="justify-content-center footer-copyright" activeKey="/home">
        <p className="text-center mt-4 mb-4 copyright">&copy;Copyright Metaphysical Abstract Design</p>
      </Nav>
    </div>
  )
}

export default Footer
