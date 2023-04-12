import React, { useState } from 'react';
import facebook from '../../img/main/icon_link/facebook.png'
import instagram from '../../img/main/icon_link/instagram.png'
import babi from '../../img/main/icon_link/babi.png'
import linkedin from '../../img/main/icon_link/linkedin.png'

import cl from './HeaderNav.module.css'
import logo from '../../img/main/logo.png'
import heart from '../../img/main/icon_link/heart.png'
import acount from '../../img/main/icon_link/acount.png'
import basket from '../../img/main/icon_link/busket.png'
import { NavLink } from 'react-router-dom';
import face from '../../img/main/icon_kategory/face.png'
import insta from '../../img/main/icon_kategory/insta.png'
import twitter from '../../img/main/icon_kategory/twitter.png'

import './header.css'

const setActive = ({ isActive }) => isActive ? 'active_header_link' : '';





const HeaderNav = ({ setShow, size }) => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className={cl.header_nav_container} >
            <div className={cl.header_nav}>
                <div className={cl.header_nav_adp}>
                    <div className={cl.header_icon_container}>
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />
                      
                        <img src={babi} alt="" />
                    </div>
                    <div>
                        <p className={cl.header_phone}>+380 (97) 17 033 21</p>
                        <p className={cl.header_phone_text}>Натисніть, щоб скопіювати</p>
                    </div>
                </div>
            </div>
            <div className={cl.header_handler_container}>
                <div className={cl.header_handler_container_adp}>
                    <div className={cl.header_up_line}>
                        <NavLink className={cl.logo_link} to="/"  >
                            <img src={logo} alt="" onClick={() => setShow(true)} />
                        </NavLink>
                        <div className="header_burger">


                            <nav>
                                <div className="burger-menu" onClick={updateMenu}>
                                    <div className={burger_class} ></div>
                                    <div className={burger_class} ></div>
                                    <div className={burger_class} ></div>
                                </div>
                            </nav>
                            <div className={menu_class}>


                                <div className={cl.header_down_line} onClick={() => setShow(true)}>
                                    <div className={cl.header_link_container} onClick={updateMenu} >
                                        <NavLink className={setActive} to="/"  >Головна</NavLink>
                                        <NavLink className={setActive} to="/about"  >Про нас</NavLink>
                                        <NavLink className={setActive} to="/kontact"  >Контакти</NavLink>
                                        <NavLink className={setActive} to="/blog"  >Блог</NavLink>
                                        <NavLink className={setActive} to="/kategory"  >Каталог</NavLink>
                                    </div>
                                    <div className={cl.header_link_grey_container}>
                                        <NavLink className={setActive} to="/ofetra"  >Оферта</NavLink>
                                        <NavLink className={setActive} to="/delivery"  >Доставка</NavLink>
                                        <NavLink className={setActive} to="/faq"  >FAQ</NavLink>
                                    </div>
                                </div>
                                <div className={cl.footer_adp_container}>
                                    <img src={face} alt="" />
                                    <img src={insta} alt="" />
                                    <img src={twitter} alt="" />
                                </div>
                                <p className={cl.footer_copiraty}>©2022, Magic Wood Map</p>
                            </div>

                        </div>



                        <div className={cl.header_btn_container}>
                            <div className={cl.header_btn} >
                                <img src={acount} alt="" />
                            
                            </div>
                            <div className={cl.header_btn} id={cl.header_btn_id} onClick={() => setShow(false)}>
                                <img src={basket} alt="" /><span>{size}</span>
                               
                            </div>
                            <div className={cl.header_btn}>
                                <img src={heart} alt="" />
                                
                            </div>
                        </div>
                    </div>
                    <div className={cl.header_down_line_no_adp}>
                        <div className={cl.header_down_line}>
                            <div className={cl.header_link_container} onClick={() => setShow(true)}>
                                <NavLink className={setActive} to="/"  >Головна</NavLink>
                                <NavLink className={setActive} to="/about"  >Про нас</NavLink>
                                <NavLink className={setActive} to="/kontact"  >Контакти</NavLink>
                                <NavLink className={setActive} to="/blog"  >Блог</NavLink>
                                <NavLink className={setActive} to="/kategory"  >Каталог</NavLink>
                            </div>
                            <div className={cl.header_link_grey_container}>
                                <NavLink className={setActive} to="/ofetra"  >Оферта</NavLink>
                                <NavLink className={setActive} to="/delivery"  >Доставка</NavLink>
                                <NavLink className={setActive} to="/faq"  >FAQ</NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HeaderNav;