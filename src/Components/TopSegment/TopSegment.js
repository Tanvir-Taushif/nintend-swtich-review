import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './TopSegment.css';

const TopSegment = () => {
    return (
        <div>
            <Row>
                <Col sm={12} lg={5} >
                    <div className=' m-2 my-3'>
                        <h3 className=' fw-bold'><span className='blue-part'>Play!</span>  Simulate!<span className='red-part'> Explore!</span></h3>
                        <h1 className=' fw-bold'>Nintendo Switch</h1><br></br>
                        <p className=' text-start'>Nintendo presents you with its latest technology Nintendo Switch.It will change your thoughts and reniew your experience in RPG Gaming with games like Pokemon,Castelvenia and many more.</p><br></br>
                        <a className=' text-start button' href='https://www.nintendo.com/switch/' target={'_blank'}>Live Review</a>
                    </div>
                </Col>
                <Col sm={12} lg={7}>
                    <div className="m-2 my-3">
                      <img className=' img-fluid' src="https://assets.nintendo.com/image/upload/ncom/en_US/switch/split-cta-system-mobile" alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default TopSegment;