import {React ,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Item = ({item,handle}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  const {name,data,img,price} = item;
  return (
    <div >
      <div data-aos="fade-down" className='items_blok'>
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