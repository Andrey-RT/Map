import React from 'react';
import facebook from '../../img/main/icon_link/facebook.png'
import instagram from '../../img/main/icon_link/instagram.png'
import babi from '../../img/main/icon_link/babi.png'
import linkedin from '../../img/main/icon_link/linkedin.png'
import twitter from '../../img/main/icon_link/twitter.png'
import cl from './HeaderNav.module.css'
import logo from '../../img/main/logo.png'
import heart from '../../img/main/icon_link/heart.png'
import acount from '../../img/main/icon_link/acount.png'
import basket from '../../img/main/icon_link/busket.png'
import { NavLink} from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active_header_link' :'';




const HeaderNav = ({setShow,size}) => {
    return (
        <div className={cl.header_nav_container} >
        <div className={cl.header_nav}>
            <div className={cl.header_nav_adp}>
            <div className={cl.header_icon_container}>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
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
                <NavLink to="/"  >
                    <img src={logo} alt="" onClick={()=>setShow(true)}  />
                    </NavLink>
                    
                    <input type="text" placeholder='Знайти...'/>
                    <div className={cl.header_btn_container}>
                        <div className={cl.header_btn} >
                            <img src={acount} alt="" />
                            <p className={cl.header_btn_name} onClick={()=>setShow(true)}>акаунт</p>
                        </div>
                        <div className={cl.header_btn} id={cl.header_btn_id}>
                            <img src={basket} alt="" />
                            <p onClick={()=>setShow(false)} className={cl.header_btn_name}>корзина <span>{size}</span></p>
                        </div>
                        <div className={cl.header_btn}>
                            <img src={heart} alt="" />
                            <p className={cl.header_btn_name} onClick={()=>setShow(true)}>вибране</p>
                        </div>
                    </div>
                </div>
                <div className={cl.header_down_line}>
                    <div className={cl.header_link_container } onClick={()=>setShow(true)}>
                    <NavLink className={setActive} to="/"  >Головна</NavLink>
                    <NavLink className={setActive} to="/about"  >Про нас</NavLink>
                    <NavLink className={setActive} to="/kontacts"  >Контакти</NavLink>
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
    );
};

export default HeaderNav;