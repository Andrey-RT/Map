import React from 'react';
import Callback from '../about/callback/Callback';
import './Delivery.css'
const Delivery = () => {
    return (
        <div className='kontact_container'>
            <div className="kontact_container_adp">
                <div className="about_background">
                    <p className="about_first_name">Оплата й доставка</p>
                    <div className="about_first_line">
                        <p className="about_first_line_grey">Головна. </p>
                        <p className="about_first_line_color">Оплата й доставка</p>
                    </div>
                </div>
                <div className="delivery_content">  

                <div className="blog_container_name">
                        <hr className="blog_container_name_line" />
                        <p className="blog_container_blok_name">Доставка</p>
                        <hr className="blog_container_name_line" />
                    </div>
                    <div className='delivery_info_container_'>
                    <div className="delivery_info_container_block">
                        <p className="delivery_info_name">Виготовлення виробів із фанери</p>
                        <p className="delivery_info_text">Як тільки ви знайдете те, що шукаєте, ми гарантуємо швидке оформлення замовлення та доставку. Перевірте ваш вибір сьогодні!</p>
                    </div>
                    <div className="delivery_info_container_block">
                        <p id='delivery_info_name_id' className="delivery_info_name">Входимо у топ компаній по продажам карт</p>
                        <p id='delivery_info_text_id' className="delivery_info_text">Дерев'яна карта світу здатна гармонійно вписатися в дизайн вашої кімнати і стати тим самим елементом, що бракує, у створенні унікального стилю. Залиште свій номер телефону і ми передзвонимо Вам найближчим часом</p>
                    </div>
                    </div>

                    <div className="blog_container_name">
                        <hr className="blog_container_name_line" />
                        <p className="blog_container_blok_name">Оплата</p>
                        <hr className="blog_container_name_line" />
                    </div>
                    <div className='delivery_info_container_'>
                    <div className="delivery_info_container_block">
                        <p className="delivery_info_name">Виготовлення виробів із фанери</p>
                        <p className="delivery_info_text">Як тільки ви знайдете те, що шукаєте, ми гарантуємо швидке оформлення замовлення та доставку. Перевірте ваш вибір сьогодні!</p>
                    </div>
                    <div className="delivery_info_container_block">
                        <p id='delivery_info_name_id' className="delivery_info_name">Входимо у топ компаній по продажам карт</p>
                        <p id='delivery_info_text_id' className="delivery_info_text">Дерев'яна карта світу здатна гармонійно вписатися в дизайн вашої кімнати і стати тим самим елементом, що бракує, у створенні унікального стилю. Залиште свій номер телефону і ми передзвонимо Вам найближчим часом</p>
                    </div>
                    </div>
                    
                </div>
                <div className="kontact_callback">
                    <Callback />
                </div>
            </div>

        </div>
    );
};

export default Delivery;