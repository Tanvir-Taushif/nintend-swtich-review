import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TopSegment from '../TopSegment/TopSegment';
import './Home.css';

const Home = () => {
    return (
        <div className=' container my-5'>
            <TopSegment></TopSegment>
        </div>
    );
};

export default Home;