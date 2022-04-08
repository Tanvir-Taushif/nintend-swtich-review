import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
   const [reviews,setReviews]=useReviews(); //Custom Hook
    return (
        <div>
            <h1 className='review-title fw-bold text-center'>Reviews</h1>
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