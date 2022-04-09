import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='my-5 text-center fw-bold'>Nintendo Blogspot</h2>
            <div className="blog-box">
                <div className='p-2'>
                    <h4 className='fw-bold'>What is Context API?</h4>
                    <p>A React app can use the React Context API to generate global variables that can be passed around. It allows you to share unique information and aids in the resolution of prop-drilling issues at all levels of your application. It lets you to easily and lightly communicate state across the entire program (or a portion of it). We can define numerous unconnected contexts (stores) and use each in its own area in the program using the Context API. Context allows components to communicate values without having to pass a prop through each level of the tree directly.</p>
                </div>
            </div>
            <div className="blog-box">
                <div className='p-2'>
                    <h4 className='fw-bold'>What is Semantic Tag?</h4>
                    <p>Semantic HTML elements are those that express their meaning in a way that is both human and machine readable. &lt;header&gt; , &lt;footer&gt;, and &lt;article&gt; elements are all deemed semantic since they accurately explain the element's purpose and the sort of material it contains. It's a lot simpler to read now. It is more easily accessible. Additionally, semantic aspects contribute to more consistent code.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;