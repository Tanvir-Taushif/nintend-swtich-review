import React from 'react';
import './HomeReviews.css';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

const HomeReviews = () => {
    const [reviews,setReviews]= useReviews();
    return (
        <div>
            <h1 className='home-review-title text-center my-3'>Top Reviews</h1>
            <div className="container overflow-hidden">
                <div className="row g-5">
                   {
                       reviews.slice(0,3).map(review=>
                        <Review key={review.id} review={review}></Review>
                       )
                   }
                </div>
            </div> <br /><br></br>
            <div className=' text-end'><Link className='button' to="/reviews">Show All <ArrowNarrowRightIcon heigth={25} width={25}></ArrowNarrowRightIcon></Link></div>
        </div>
    );
};

export default HomeReviews;