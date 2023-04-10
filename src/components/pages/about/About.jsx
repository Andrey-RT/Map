import React from 'react';
import './About.css'
import map from '../../../img/main/about_img.png'
import face from '../../../img/main/icon_kategory/face.png'
import insta from '../../../img/main/icon_kategory/insta.png'
import twitter from '../../../img/main/icon_kategory/twitter.png'
import maps from '../../../img/main/icon_kategory/map.png'
import tel from '../../../img/main/icon_kategory/tel.png'
import Callback from './callback/Callback';

const About = () => {
    return (
        <div className='about_container'>
            <div className="about_container_adp">
                <div className="about_background">
                    <p className="about_first_name">Про нашу команду</p>
                    <div className="about_first_line">
                        <p className="about_first_line_grey">Головна. </p>
                        <p className="about_first_line_color">Про нас</p>
                    </div>
                </div>
                <div className="about_main_container">
                    <div>
                            <p className="about_main_container_name">Magic Wood Maps</p>
                            <p className="about_main_container_text">
                            Різні види карт з натурального дерева та додатківдля них щоб відповідати потребам наших клієнтів. Для того, щоб наш декор був найкращим, ми співпрацюємо з кращими виробниками сировини та фарб у галузі
                            </p>
                    </div>
                    <img src={map} alt="" />
                </div>
                <div className="about_link_line">
                    <div className="about_link_line_blok">
                    <p className="about_link_line_name">Підписуйся на нас</p>
                    <div className="about_link_container">
                        <img src={face} alt="" />
                        <img src={insta} alt="" />
                        <img src={twitter} alt="" />
                        <img src={insta} alt="" />
                    </div>
                    </div>
                    <div className="about_link_container_block">
                        <img src={tel} alt="" />
                        <p>+38 (098) 66 03 20</p>
                    </div>
                    <div className="about_link_container_block">
                        <img src={maps} alt="" />
                        <p>м. Львів,<br /> вул. Шевченка, 31а</p>
                    </div>
                </div>
                
                <Callback />
                
            </div>
            
        </div>
    );
};

export default About;