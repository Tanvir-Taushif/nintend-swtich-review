import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
   const [reviews,setReviews]=useReviews(); //Custom Hook
    return (
        <div>
            <h2 className='review-title fw-bold text-center my-5'>Reviews of Our Customers</h2>
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