
import React, { useEffect } from 'react';
import { Carousel, Col, Row, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './vest-css/vestMobile.css'
import '../../css/vest.css'
import HeaderNav from '../HeaderNav';
import ScrollToTopButton from '../ScrollToTopButton';
import Counter from '../Counter';
import Footer from '../Footer';


function VestPageMobile() {

    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])

  return (
    <div>
        <HeaderNav />
        <br />
        <br />
        <div className='mobile-view' data-aos="fade-up">
            <div className='mobile-page'>
                <br />
                <Row className='container img-row'>
                    <br />
                    <Col className='card first-img' xs={4}><NavLink to='/vest'><Card.Img src='backVestBrown.jpg' /></NavLink></Col>
                    <Col className='card' xs={4}><Card.Img src='frontVestBlue.jpg' /></Col>
                    <Col className='card'>
                    <Carousel className='carousel-style'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="frontVestTan.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="backVestBrown.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="frontVestBlue.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </div>
            <Card>
            <br className='breaks'/>
            <Card.Body className='mobile-vest-desc'>
                <Card.Title className='vest-title'>VR: Air Vest</Card.Title>
                <Card.Text>
                The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
                </Card.Text>
            </Card.Body>          
            </Card>
            <br className='breaks'/>
            <br className='breaks'/>
            <Counter />
            <br/>
            <img src="schematicsMobile.png" alt="" className="col-12" />
        </div>
        <ScrollToTopButton />
        <Footer />
    </div>
  )
}

export default VestPageMobile
