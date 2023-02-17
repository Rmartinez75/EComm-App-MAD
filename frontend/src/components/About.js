import * as React from "react"
import Card from 'react-bootstrap/Card';
import { Container, Col, Row } from 'react-bootstrap';    


function About() {
  return (

    <div style={{backgroundColor: '#FFF3F3'}}>        
        <Container className="d-flex vh-100 ">
            <Row className="m-auto align-self-center">
                <Col>
                    <Card style={{ width: '25rem', backgroundColor: '#FFF3F3', textAlign: 'center', alignItems: 'center', border: 'none'}}>
                    <Card.Img style={{width: 100, height: 66}} src="g42.png" />
                    <Card.Body>                    
                        <Card.Text style={{fontSize: 15}}>
                        Virtual Reflection (VR) originated as an idea of developing a coherent tool that would bridge the gap between our physical and virtual realities. This tool progressively became a soft and flexible technology through integrating techniques using textiles as its bases. The finish products are a unique and balanced blend of intricate sewing and methodic technology placements, transparency being the key. 
                        </Card.Text>                    
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default About;
