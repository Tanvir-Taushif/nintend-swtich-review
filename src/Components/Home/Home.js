import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeReviews from '../HomeReviews/HomeReviews';
import TopSegment from '../TopSegment/TopSegment';
import './Home.css';

const Home = () => {
    return (
        <div className=' container my-5'>
            <TopSegment></TopSegment>
            <HomeReviews></HomeReviews>
        </div>
    );
};

export default Home;