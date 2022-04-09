import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col sm={12} lg={6}>
                        <div className='my-2'>
                            <h5 className='fw-bold text-center'>Providing the best Gaming Experience</h5>
                            <img className='about-img' src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/UpSwitch.jpeg" alt="" />
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className='my-2'>
                            <h5 className='fw-bold text-center'>Portable & Dynamic</h5>
                            <img className='about-img' src="https://www.nintendo.com/sg/switch/index/img/hero_top_sp.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default About;