import {React ,useEffect} from 'react';
import './MainSekond.css'
import circle from '../../../../img/main/icon_kategory/circle.png'
import search from '../../../../img/main/icon_kategory/search.png'
import internier from '../../../../img/main/icon_kategory/internier.png'
import diamant from '../../../../img/main/icon_kategory/diamant.png'
import f1 from '../../../../img/main/kategory/first.png'
import f2 from '../../../../img/main/kategory/sekond.png'
import f3 from '../../../../img/main/kategory/third.png'
import f4 from '../../../../img/main/kategory/fourth.png'
import f5 from '../../../../img/main/kategory/fifth.png'
import f6 from '../../../../img/main/kategory/sixth.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const MainSekond = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="sekond_container_adp">
        <div className='sekond_container'>
            <div data-aos="fade-left" className="sekond_info">
                <div className='sekond_line_container' >
                    <div className="sekond_line"></div>
                    <p className="sekond_line_name">переваги</p>
                    </div>
            
            <p  className="sekond_name">Виготовлення виробів із фанери</p>
            <p className="sekond_text">Як тільки ви знайдете те, що шукаєте, ми гарантуємо швидке оформлення замовлення та доставку. Перевірте ваш вибір сьогодні!</p>
            </div>
            <div data-aos="fade-top" className="sekond_item_container">
                <div className="sekond_item">
                    <img src={circle} alt="" />
                    <p className="item_name">Персоналізація</p>
                    <p className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className="sekond_item">
                    <img src={search} alt="" />
                    <p className="item_name">Персоналізація</p>
                    <p className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className="sekond_item" id='sekond_item_id'>
                    <img src={internier} alt="" />
                    <p className="item_name">Персоналізація</p>
                    <p className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className="sekond_item" id='sekond_item_id'>
                    <img src={diamant} alt="" />
                    <p className="item_name">Персоналізація</p>
                    <p className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>
            <div className="third_container">
                <div data-aos="fade-down"  className="third_item">
                <p className="third_item_name">Одношарові мапи 	&#8594;</p>
                    <img src={f1} alt="" />
                   
                </div>
                <div data-aos="fade-down" className="third_item">
                <p className="third_item_name" id='third_item_name_id'>Ознайомтеся з нашими найкращими категоріями </p>
                    <img src={f5} alt="" />
                </div>
                <div data-aos="fade-down" className="third_item">
                <p className="third_item_name">Додатки до мап 	&#8594;</p>
                    <img src={f2} alt="" />
                </div>
                <div data-aos="fade-down" className="third_item">
                <p className="third_item_name">Багатошарові мапи	&#8594;</p>
                    <img src={f4} alt="" />
                </div>
                <div data-aos="fade-down" className="third_item">
                <p className="third_item_name">Перейти на сторінку	&#8594;</p>
                    <img src={f3} alt="" />
                </div>
                <div data-aos="fade-down" className="third_item">
                <p className="third_item_name">Додаткова категорія	&#8594;</p>
                    <img src={f6} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default MainSekond;