import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper';
import 'swiper/css';
import button_arrow from '../../img/main/icon_link/button_arrow.png'
import main_background from '../../img/main/main_background.png'
import { NavLink } from 'react-router-dom';
import 'swiper/css/pagination';



const Slider = () => {
    return (
        <div className='slider'>
             <Swiper
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
     
      pagination={{ clickable: true } }
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="main_slider_content">
      
                <div className="main_content">
                    <div className="main_container_info">
                        <p className='main_name'>Унікальне ТП</p>
                        <p className='main_text'>Різні види карт з натурального дерева та додатків для них щоб відповідати потребам наших клієнтів. Для того, щоб наш декор був найкращим, ми співпрацюємо з кращими виробниками сировини та фарб у галузі</p>
                    </div>
                    <NavLink to="/blog" className="main_btn">
                    

                        <button> Читати ще</button>
                        <img src={button_arrow} alt="" />
                        
                    </NavLink>
                   
                    <div className="main_slider">
                    
                    </div>
                </div>
                <div className="main_background">
                    <img src={main_background} alt="" />
                </div>
                </div>
            
      </SwiperSlide>
      <SwiperSlide><div className="main_slider_content">
      
      <div className="main_content">
          <div className="main_container_info">
              <p className='main_name'>Унікальне ТП</p>
              <p className='main_text'>Різні види карт з натурального дерева та додатків для них щоб відповідати потребам наших клієнтів. Для того, щоб наш декор був найкращим, ми співпрацюємо з кращими виробниками сировини та фарб у галузі</p>
          </div>
          <NavLink to="/blog" className="main_btn">
                    

                        <button> Читати ще</button>
                        <img src={button_arrow} alt="" />
                        
                    </NavLink>
         
          <div className="main_slider">
          
          </div>
      </div>
      <div className="main_background">
          <img src={main_background} alt="" />
      </div>
      </div></SwiperSlide>
      <SwiperSlide><div className="main_slider_content">
      
      <div className="main_content">
          <div className="main_container_info">
              <p className='main_name'>Унікальне ТП</p>
              <p className='main_text'>Різні види карт з натурального дерева та додатків для них щоб відповідати потребам наших клієнтів. Для того, щоб наш декор був найкращим, ми співпрацюємо з кращими виробниками сировини та фарб у галузі</p>
          </div>
          <NavLink to="/blog" className="main_btn">
                    

                        <button> Читати ще</button>
                        <img src={button_arrow} alt="" />
                        
                    </NavLink>
         
          <div className="main_slider">
          
          </div>
      </div>
      <div className="main_background">
          <img src={main_background} alt="" />
      </div>
      </div></SwiperSlide>
      <SwiperSlide><div className="main_slider_content">
      
      <div className="main_content">
          <div className="main_container_info">
              <p className='main_name'>Унікальне ТП</p>
              <p className='main_text'>Різні види карт з натурального дерева та додатків для них щоб відповідати потребам наших клієнтів. Для того, щоб наш декор був найкращим, ми співпрацюємо з кращими виробниками сировини та фарб у галузі</p>
          </div>
          <NavLink to="/blog" className="main_btn">
                    

                    <button> Читати ще</button>
                    <img src={button_arrow} alt="" />
                    
                </NavLink>
         
          <div className="main_slider">
          
          </div>
      </div>
      <div className="main_background">
          <img src={main_background} alt="" />
      </div>
      </div></SwiperSlide>
     
    </Swiper>
          
        </div>
    );
};

export default Slider;