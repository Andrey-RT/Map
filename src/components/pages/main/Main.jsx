import React from 'react';
import './Main.css'
import MainSekond from './mainSekond/MainSekond';

import Slider from '../../sliderBtn/SliderBtn';



const Main = () => {
    return (
        <div className='main_container'>
          
            <div className='firts_container_adp'>
                <div className='first_container_blok' >
                <Slider />
                <MainSekond />
                
                </div>
            
            </div>
        </div>
    );
};

export default Main;