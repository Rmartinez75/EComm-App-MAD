
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Carousel, Col} from 'react-bootstrap';
import VestMobile from './vest-comps/VestMobile';
import '../css/vest.css';
import Counter from './Counter';
import AOS from 'aos';
import 'aos/dist/aos.css'


function Vest() {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])

  return (
    <div id='vest-section'>
        {/* DESKTOP VIEW */}
        <div className='desktop-view' data-aos="fade-up">            
            <div className='vest-both-rows'>
                <br/>
                <br/> 
                <br/>                               
                <div className='vest-column vest-left-side'>
                    <div className='card-display'>
                        <div className='card-style'>
                            <Card className='cards' >
                                <NavLink to='/vest'><Card.Img variant="top" src="frontVestTan.jpg" /></NavLink>
                            </Card>
                        </div>
                        <div className='card-style'>
                            <Card className='cards' >
                                <NavLink to='/vest'><Card.Img variant="top" src="backVestBrown.jpg" /></NavLink>
                            </Card>
                        </div>
                        <div className='card-style'>
                            <Card style={{fontSize: '10px' }} className='cards'>
                            5 Sec Video / Video SlideShow             
                                <Carousel className='carousel-style'>                                
                                    <Carousel.Item>
                                        <NavLink to='/vest'><img
                                            className="d-block w-100"
                                            src="frontVestTan.jpg"
                                            alt="First slide"
                                        /></NavLink>
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
                            </Card>   
                        </div>                        
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <NavLink className='download-text'>DOWNLOAD PDF: AVAILABLE AFTER LOGIN</NavLink>
                    <img src="schematicsDesk.png" alt="" className="vest-specs" />
                    
                </div>
                
                <div className='vest-colum vest-right-side'>
                    <div className='desc-card-style'>  
                        <br/>   
                        <Card className='description'> 
                            <Card.Body>
                                <Card.Title className='vest-title'>VR: Air Vest</Card.Title>
                                <Card.Text className='vest-text'>
                                The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Counter />   
                    </div> 
                </div>         
                <br/>
                <br/>
            </div>
        </div>

        {/* TABLET VIEW */}
        <div className='tablet-view' data-aos="fade-up">            
            <div className='tablet-div'>
            <br data-aos="fade-up"/>
                <Col className='tablet-card-display'>
                    <div className='card-style'>
                        <Card style={{ width: '16rem' }} className='cards'>
                            <NavLink to='/vest'><Card.Img variant="top" src="frontVestTan.jpg" /></NavLink>
                        </Card>
                    </div>
                    <div className='card-style'>
                        <Card style={{ width: '16rem' }} className='cards'>
                            <NavLink to='/vest'><Card.Img variant="top" src="backVestBrown.jpg" /></NavLink>
                        </Card>
                    </div>
                    <div className='card-style' style={{ width: '16rem' }} >
                        <Card className='cards'>
                            <Carousel className='carousel-style'>
                                <Carousel.Item>
                                    <NavLink to='/vest'><img
                                        className="d-block w-100"
                                        src="frontVestTan.jpg"
                                        alt="First slide"
                                    /></NavLink>
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
                        </Card>   
                    </div>                
                </Col>
                <div>
                    <Card style={{ width: '20rem' }} className='cards description-tablet'>
                        <br/>
                        <Card.Body>
                            <Card.Title className='vest-title'>VR: Air Vest</Card.Title>
                            <Card.Text className='vest-text'>
                            The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <img src="schematicsMobile.png" alt="" className="vest-specs col-12" ></img>
                <br/>
                <br/>
            </div>
        </div>
        
        {/* MOBILE VIEW */}
        <VestMobile />
    </div>
  )
}

export default Vest