import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
   const [reviews,setReviews]=useReviews(); //Custom Hook
   const toggleSpinner=displayStyle=>{
       document.getElementById('spinners').style.display=displayStyle;
   };
    return (
        <div>
            <h2 className='review-title fw-bold text-center my-5'>Reviews of Our Customers</h2>
            <div className='d-flex justify-content-center container'>
                <div id='spinners'>
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                </div>
            </div>
            <div className="container overflow-hidden">
                <div className="row g-5">
                   {
                       reviews.map(review=>
                        <Review key={review.id} review={review}></Review>
                       )
                   }
                </div>
            </div> <br />
        </div>
    );
};

export default Reviews;