import React from 'react';
import Callback from '../about/callback/Callback';
import './Blog.css'

import BlogItem from './BlogItem';



const Blog = () => {
   

    return (
        <div className='about_container'>
            <div className="about_container_adp">
                <div className="about_background">
                    <p className="about_first_name">Наш блог</p>
                    <div className="about_first_line">
                        <p className="about_first_line_grey">Головна. </p>
                        <p className="about_first_line_color">Блог</p>
                    </div>
                </div>
                <div className="blog_container">
                    <div className="blog_container_name">
                        <hr className="blog_container_name_line" />
                        <p className="blog_container_blok_name">Новини</p>
                        <hr className="blog_container_name_line" />
                    </div>
                    <div className="item_container">
                    <BlogItem />
                    </div>
                </div>


                <Callback />

            </div>

        </div>
    );
};

export default Blog;