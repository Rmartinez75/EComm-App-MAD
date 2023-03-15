
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Col, Row, Card } from 'react-bootstrap'
import './vest-css/vestMobile.css'
import '../../css/vest.css'

function VestMobile() {
  return (

    <div className='mobile-view'>
        <div className='mobile-page'>
            <br />
            <Row className='container img-row'>
                <br />
                <Col className='card first-img' xs={4}><img src='backVestBrown.jpg' /></Col>
                <Col className='card' xs={4}><img src='frontVestBlue.jpg' /></Col>
                <Col className='card'>
                  <Carousel className='carousel-style'>
                    <Carousel.Item>
                        <a to=''><img
                            className="d-block w-100"
                            src="frontVestTan.jpg"
                            alt="First slide"
                        /></a>
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
          <br/>
          <Card.Body className='mobile-vest-desc'>
              <Card.Title className='vest-title'>VR: Air Vest</Card.Title>
              <Card.Text>
              The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
              </Card.Text>
          </Card.Body>
        </Card>
        <img src="schematicsMobile.png" alt="" className="col-12" />
    </div>
    
  )
}

export default VestMobile
