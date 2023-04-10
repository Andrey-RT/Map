import React from 'react';
import './Footer.css'
import face from '../../img/main/icon_kategory/face.png'
import insta from '../../img/main/icon_kategory/insta.png'
import twitter from '../../img/main/icon_kategory/twitter.png'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className="footer_container_adp">
                <div className="footer_input_container">
                    <p className="footer_name">Magic Wood Map</p>
                    <div className="footer_input">
                        <input type="text" placeholder='Ваш email'/>
                        <button>Надіслати</button>
                    </div>
                    <div className="footer_icon_container">
                        <img src={face} alt="" />
                        <img src={insta} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                    <p className="footer_copiraty">©2022, Magic Wood Map</p>
                </div>
                <div className="footer_link_container">
                    <div className="footer_link_block">
                        <p className="footer_link_name">Меню</p>
                        <p className="footer_link_link">Головна</p>
                        <p className="footer_link_link">Про нас</p>
                        <p className="footer_link_link">Контакти</p>
                        <p className="footer_link_link">Блог</p>
                    </div>
                    <div className="footer_link_block">
                        <p className="footer_link_name">Контакти</p>
                        <p className="footer_link_link">Головна</p>
                        <p className="footer_link_link">Про нас</p>
                        <p className="footer_link_link">Контакти</p>
                        <p className="footer_link_link">Блог</p>
                    </div>
                    <div className="footer_link_block">
                        <p className="footer_link_name">Сторінки</p>
                        <p className="footer_link_link">Оферта</p>
                        <p className="footer_link_link">Доставка</p>
                        <p className="footer_link_link">FAQ</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;