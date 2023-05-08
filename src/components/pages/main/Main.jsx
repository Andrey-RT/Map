import {React ,useEffect} from 'react';
import './Main.css'
import MainSekond from './mainSekond/MainSekond';

import Slider from '../../sliderBtn/SliderBtn';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Main = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='main_container'>
          
            <div className='firts_container_adp'>
                <div className='first_container_blok' >
                    <div data-aos="fade-right" >
                <Slider /></div>
                <MainSekond />
                
                </div>
            
            </div>
        </div>
    );
};

export default Main;