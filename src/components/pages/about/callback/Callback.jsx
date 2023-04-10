import React from 'react';
import './Callback.css'


const Callback = () => {
    return (
        <div className='callback_container'>
            <div className='callback_container_width'>
            <p className="callback_name">Зворотній дзвінок</p>
            <p className="callback_text">Залиште контакти і ми передвзонимо вам найближчим часом</p>
            <form className='callback_form' >
                <div class="input-group">
                    <label class="label">Ім'я*</label>
                    <input autocomplete="off" name="Email" id="Email" class="input" type="email" />
                    <div></div></div>
                <div class="input-group">
                    <label class="label">Номер телефону*</label>
                    <input autocomplete="off" name="Email" id="Email" class="input" type="email" />
                    <div></div></div>

            </form>
            <div class="input-group">
                <label class="label" >Електронна адреса</label>
                <input autocomplete="off" name="Email" id='label_email' class="input" type="email" />
                <div></div></div>
            <div class="input-group">
                <label class="label" >Повідомлення </label>
                <input autocomplete="off" name="Email" id='label_message' class="input" type="email" />
                <div></div></div>
                <div className="callback_btn_container">
            <button className="callback_btn">Надіслати</button></div>
        </div>
        </div>
    );
};

export default Callback;