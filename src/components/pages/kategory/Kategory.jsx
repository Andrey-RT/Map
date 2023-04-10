import React from 'react';
import './Kategory.css'
import k4 from '../../../img/katalog/4.png'
import k3 from '../../../img/katalog/3.png'
import k2 from '../../../img/katalog/2.png'
import Callback from '../about/callback/Callback';
import { NavLink} from 'react-router-dom';



const Kategory = () => {
    return (
        <div className='katalog_container'>
            <div className="katalog_container_adp">
                <div className="about_background">
                    <p className="about_first_name">Категорії продукції</p>
                    <div className="about_first_line">
                        <p className="about_first_line_grey">Головна. </p>
                        <p className="about_first_line_color">Категорії</p>
                    </div>
                </div>
                <div className="katalog_name_container">
                <div className="blog_container_name">
                    <hr className="blog_container_name_line" />
                    <p className="blog_container_blok_name">Категорії</p>
                    <hr className="blog_container_name_line" />
                </div>
                </div>
                <div className="katalog_item_container">
                <NavLink  to="/items"  >
                <div className="katalog_item">
                        <img src={k2} alt="" />
                        <div className="katalog_item_name_container">
                        <p className="katalog_item_name">Одношарові мапи</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink  to="/items"  >
                <div className="katalog_item">
                        <img src={k3} alt="" />
                        <div className="katalog_item_name_container">
                        <p className="katalog_item_name">Коричнева з підсвідкою</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink  to="/items"  >
                <div className="katalog_item">
                        <img src={k2} alt="" />
                        <div id='katalog_item_name_container_id' className="katalog_item_name_container">
                        <p className="katalog_item_name">Перейти на сторінку 	&rarr;</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink  to="/items"  >
                <div className="katalog_item">
                        <img src={k4} alt="" />
                        <div  className="katalog_item_name_container">
                        <p className="katalog_item_name">Багатошарові мапи</p>
                        </div>
                    </div>
                </NavLink>
                   
                    
                    
                    
                </div>
                <Callback />
            </div>
        </div>
    );
};

export default Kategory;