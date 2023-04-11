import React from 'react';

const SubTotal = ({price}) => {
    let discount = 0

    if( price > 499){
      discount = -50
    }
    return (
        <div className="busket_total_container">
                    <p className="busket_line_name">До сплати</p>
                    <div className="sybtotal_container">
                        <div className="sybtotal_main">
                            <p className="sybtotal_name">Сума сплати</p>
                            <p className="sybtotal_price">{price + discount} $</p>
                        </div>
                        <div className="discount_container">
                            <p className="name_discount">Скидка <br />(при замовленні <br /> від 500$)</p>
                            <p className="price_discount">{discount} $</p>
                        </div>
                        
                        <div className="sybtotal_delivery_container">
                            <p className="sybtotal_delivery_name">Доставка:</p>
                            <p className="sybtotal_delivery_link">Вибрати адрес доставки</p>
                        </div>
                        <div className="sybtotal_btn_container">
                            <button className="sybtotal_btn">Замовити</button>
                        </div>
                        <div className="sybtotal_radio">
                            
                                <input type="checkbox"  
                                    value="dewey" />
                                <label className='radio_text' >Согласен с условиями Правил пользования торговой площадкой и правилами возврата</label>
                           
                        </div>
                    </div>
                </div>
    );
};

export default SubTotal;