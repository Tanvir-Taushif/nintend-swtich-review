import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[]);
    return (
        <div>
            <h1 className=' text-center'>Review</h1>
            <div className="container overflow-hidden">
                <div className="row g-5">
                   {
                       reviews.map(review=>
                        <Review key={review.id} review={review}></Review>
                       )
                   }
                </div>
            </div>
        </div>
    );
};

export default Reviews;