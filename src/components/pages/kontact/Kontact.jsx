import {React ,useEffect} from 'react';
import Callback from '../about/callback/Callback';
import './Kontact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Kontact = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='kontact_container'>
             <div className="kontact_container_adp">
             <div data-aos="fade-right" className="about_background">
                    <p className="about_first_name">Контакти</p>
                    <div className="about_first_line">
                        <p className="about_first_line_grey">Головна. </p>
                        <p className="about_first_line_color">Контакти</p>
                    </div>
                </div>
                <div className="kontact_callback">
                <Callback />
                </div>
             </div>
           
        </div>
    );
};

export default Kontact;