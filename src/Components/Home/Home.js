import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div className=' container my-5'>
            <Row>
                <Col sm={12} lg={5} >
                    <div className=' m-2'>
                        <h3 className=' fw-bold'><span className='blue-part'>Play!</span>  Simulate!<span className='red-part'> Explore!</span></h3>
                        <h1 className=' fw-bold'>Nintendo Switch</h1><br></br>
                        <p className=' text-start'>Nintendo presents you with its latest technology Nintendo Switch.It will change your thoughts and reniew your experience in RPG Gaming with games like Pokemon,Castelvenia and many more.</p><br></br>
                        <button></button>
                    </div>
                </Col>
                <Col sm={12} lg={7}>
                    <div className="m-2">
                      <img className=' img-fluid' src="https://assets.nintendo.com/image/upload/ncom/en_US/switch/split-cta-system-mobile" alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;