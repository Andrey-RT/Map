import React, { useState } from 'react';
import Callback from '../about/callback/Callback';
import './FAQ.css'
import more from '../../../img/faq/more.png'
import remove from '../../../img/faq/remove.png'

const FAQ = () => {

    const [faqItems, setFaqItems] = useState([
        { question: 'З якого матеріалу зроблена мапа?', answer: 'Мапа виготовлена з високоякісної березової фанери, яка покривається масло-воском.', showText: false },
        { question: 'Як можна оплатити товар?', answer: 'Оплатити товар можна за допомогою банківської карти або готівкою при отриманні.', showText: false },
        {
            question: 'Які умови доставки?', answer: 'Доставка здійснюється за допомогою курєрських служб, умови і вартість доставки залежать від обраного способу доставки та місця доставки.', showText: false
        },
        { question: 'Чи можна змінити адресу доставки після оформлення замовлення?', answer: 'Так, ви можете змінити адресу доставки, але тільки до моменту відправки замовлення.', showText: false },
        { question: 'Як дізнатися про наявність товару на складі?', answer: 'Інформацію про наявність товару на складі можна отримати у нашій службі підтримки або за допомогою онлайн-консультанта на сайті.', showText: false }
    ]);

    const handleButtonClick = (index) => {
        const updatedItems = [...faqItems];
        updatedItems[index].showText = !updatedItems[index].showText;
        setFaqItems(updatedItems);
    };

    return (
        <div className='kontact_container'>
            <div className="kontact_container_adp">
                <div className="about_background">
                    <p className="about_first_name">FAQ</p>
                    <div className="about_first_line">
                        <p className="about_first_line_grey">Головна. </p>
                        <p className="about_first_line_color">FAQ</p>
                    </div>
                </div>
                <div className="delivery_content">
                    <div className="faq_container_name">
                        <div className="blog_container_name">
                            <hr className="blog_container_name_line" />
                            <p className="blog_container_blok_name">FAQ</p>
                            <hr className="blog_container_name_line" />
                        </div>
                    </div>
                    {faqItems.map((item, index) => (
                        <div className="faq_content_container" key={index}>
                            <div className="faq_item_container">
                                <div className='faq_item_container_block'>
                                    <p className="faq_name">{item.question}</p>

                                    {item.showText && <p className="faq_text">{item.answer}</p>}
                                </div>
                                <div>
                                    <img src={item.showText ? remove : more} alt='more' onClick={() => handleButtonClick(index)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Callback />
            </div>
        </div>
    )
};

export default FAQ;
