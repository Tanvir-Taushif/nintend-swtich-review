import React from 'react';
import './Review.css';
import { StarIcon } from '@heroicons/react/solid';
const Review = (props) => {
    const {img,name,review,rating}=props.review;
    return (
        <div className="col-12 col-lg-4">
         <div className="review-card">
             <div className='items text-center'>
                 <img className=' image' src={img} alt="" />
             </div>
             <div className='items'>
                 <h4 className='fw-bold'>{name}</h4>
                 <p><span className='fw-bold'>Review:</span> "{review}"</p>
                 <p><span className='fw-bold'>Rating:</span> {rating}<StarIcon height={20} width={20}></StarIcon></p>
             </div>
         </div>
       </div>
    );
};

export default Review;