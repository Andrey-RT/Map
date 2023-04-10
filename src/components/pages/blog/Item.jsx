import React from 'react';

const Item = ({item,handle}) => {
  const {name,data,img,price} = item;
  return (
    <div >
      <div className='items_blok'>
        <div className="image_box">
          <img src={img} alt="" />
        </div>
        <div className="details">
         
          <p className='item_blog_data'>{data}</p>
          <p className='item_blog_name'>{name}</p>
          <p className='item_blog_name'>{price}</p>
        </div>
        <hr className="item_line" />
        <button  className="item_btn">Читати 	&rarr;</button>
       
      </div>
    </div>
  );
};

export default Item;