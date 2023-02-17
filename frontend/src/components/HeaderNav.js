
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import '../css/headerNav.css'


function Header() {

  const top = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    })
  }

  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className='head-nav' variant="dark" fixed='top'>
      
      <Navbar.Brand><NavLink to='/' className='company-name' onClick={top} style={{textDecoration: 'none'}}><img src='logo5.png' href='' alt='logo' className='logo-nav' />Metaphysical Abstract Design</NavLink></Navbar.Brand>
        <div className='hamburger'><Navbar.Toggle aria-controls="responsive-navbar-nav" /></div>
        <Navbar.Collapse id="responsive-navbar-nav" className='collapsed-nav'>
          <Nav className="me-auto"></Nav>
          <Nav className='right-side-nav'>
          <NavDropdown title="Firm-Wears" id="collasible-nav-dropdown" className='firm-wears'>
              <NavLink to='/vest' style={{textDecoration: 'none', color: 'black', paddingLeft: '15px',fontSize: 13}}>Vest</NavLink>
              <br/>
              <br/>
              <NavLink to='/pants' style={{textDecoration: 'none', color: 'black', paddingLeft: '15px',fontSize: 13}}>Pants</NavLink>
              <br/>
              <br/>
              <NavLink to='/shorts' style={{textDecoration: 'none', color: 'black', paddingLeft: '15px',fontSize: 13}}>Shorts</NavLink>
              <br/>
              <br/>
              <NavDropdown.Divider />
              <NavLink to='/database' style={{textDecoration: 'none', color: 'black', paddingLeft: '15px',fontSize: 13}}>DataBase</NavLink>
            </NavDropdown>
            <NavLink to='/about' className='right-side-nav' style={{textDecoration: 'none'}}>About</NavLink>
            <span className='vertical-divider'>|</span>
            <hr></hr>
            <NavLink to='/about' className='right-side-nav' style={{textDecoration: 'none'}}>Cart <FaShoppingCart /></NavLink>
            <NavLink to='/about' className='right-side-nav' style={{textDecoration: 'none'}}>Login <FaUserCircle /></NavLink>                       
          </Nav>          
        </Navbar.Collapse>
             
      </Navbar>
      </div>
  );
}

export default Header;
