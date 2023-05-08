import {React ,useEffect} from 'react';
import Callback from '../about/callback/Callback';
import './Katalog.css'
import KatalogItem from './KatalogItem';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Katalog = ({handle}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='about_container'>
            <div className="about_container_adp">
            <div data-aos="fade-right"  className="about_background">
                    <p className="about_first_name">Категорії продукції</p>
                    <div className="about_first_line">
                        <p className="about_first_line_grey">Головна. </p>
                        <p className="about_first_line_color">Категорії</p>
                    </div>
                </div>
                <div className="blog_container">
                <div className="katalog_name_container">
                <div className="blog_container_name">
                    <hr className="blog_container_name_line" />
                    <p className="blog_container_blok_name">Каталог</p>
                    <hr className="blog_container_name_line" />
                </div>
                </div>
                    <div className="item_container">
       
                        <KatalogItem handle={handle}  />
                    </div>
                </div>
                
                
                <Callback />
                
            </div>
            
        </div>
    );
};

export default Katalog;