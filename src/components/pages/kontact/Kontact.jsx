import React from 'react';
import Callback from '../about/callback/Callback';
import './Kontact.css'
const Kontact = () => {
    return (
        <div className='kontact_container'>
             <div className="kontact_container_adp">
             <div className="about_background">
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