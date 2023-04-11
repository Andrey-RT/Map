import React, { useState, useEffect } from 'react';
import './Busket.css'
import arrow from '../../img/katalog/removed.jpg'
import SubTotal from './SubTotal'
import Modals from './Modals';

const Busket = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0)

    const handeleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id)
        setCart(arr)
        handlePrice()
    }
    const handlePrice = () => {
        let ans = 0
        cart.map((item) => (ans += item.amount * item.price))
        setPrice(ans)
    }
    useEffect(() => {
        handlePrice()
    })
    
   
  

    return (
        <div>
            <div>
                <div className="about_background">
                    <p className="about_first_name">Корзина</p>
                    <div className="about_first_line">
                        <p className="about_first_line_grey">Головна. </p>
                        <p className="about_first_line_color">Корзина</p>
                    </div>
                </div>
            </div>
            <div className="busket_main_container">
                <div className="busket_contant">
                   
                    <article className='busket_item_container'>
                    <div className="busket_content">
                        <div className="busket_line">
                            <p className="busket_line_name">Назва товару</p>
                            <p className="busket_line_name">Ціна</p>
                            <p className="busket_line_name">Кількість</p>
                            <p className="busket_line_name">Видалити</p>
                        </div>
                    </div>
                    {cart.length > 0 ?(
                        <div>
                        {cart.map((item) => (
                            <div>
                                
                                <div key={item.id} className="cart_box">
                                    <div className="cart_img">
                                        <img src={item.img} alt="" />
                                        <p className='busket_item_name'>{item.name}</p>
                                    </div>
                                    <span className='busket_item_price' >{item.price} $</span>
                                    <div className='counter_container' >
                                        <button className='counter' onClick={() => handleChange(item, 1)} >+</button>
                                        <button className='counter'>{item.amount}</button>
                                        <button className='counter' onClick={() => handleChange(item, -1)} >-</button>
                                    </div>
                                    <div>

                                        <div className='remove_line_container' >
                                            <img onClick={() => handeleRemove(item.id)} src={arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="busket_hr" />
                            </div>

                        )
                        )

                        }</div>):
                        (
                            <p className='no_results'>Корзина пуста ...</p>
                          )}
                        
                    </article>
                    <Modals />
                </div>
                <SubTotal price={price}  />
               
            </div>
        </div>
    );
};

export default Busket;