import React from 'react';

const Modals = () => {
    return (
        <div className='modal_container'>
            <div className="modals">
                <p className="modal_name">Спосіб оплати</p>
                <p className="modal_text">Картою</p>
                <p className="modal_text">Наложений платіж</p>
            </div>
            <div className="modals">
            <p className="modal_name">Ваші дані</p>
            <div class="input-group">
    <label class="modal-label">Ім’я*</label>
    <input autocomplete="off" name="Email" id="Email" class="modal-input" type="email"/>
    <div></div></div>
    <div class="input-group">
    <label class="modal-label">Контактний телефон*</label>
    <input autocomplete="off" name="Email" id="Email" class="modal-input" type="email"/>
    <div></div></div>
    <div class="input-group">
    <label class="modal-label">Електронна пошта</label>
    <input autocomplete="off" name="Email" id="Email" class="modal-input" type="email"/>
    <div></div></div>
    <div className="modal_radio">
                            
                            <input type="checkbox"  
                                value="dewey" />
                            <label className='radio_text' >Согласен с условиями Правил пользования торговой площадкой и правилами возврата</label>
                       
                    </div>
            </div>
        </div>
    );
};

export default Modals;