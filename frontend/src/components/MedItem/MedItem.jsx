import React, { useContext } from 'react';
import './MedItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/StoreContext';

const MedItem = ({ id, name, price, description, image }) => {
 
  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className='Med-item'>
      <div className='Med-item-img-container'>
        <img src={url+"/images/"+image} alt='' className='Med-item-image' />
        {!cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
        :<div className='Med-item-counter'>
          <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
          <p>{cartItems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>

        }
      </div>
      <div className='Med-item-info'>
        <div className='Med-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />
        </div>
        <p className='Med-item-desc'>{description}</p>
        <p className='Med-item-price'>₹ {price}</p>
      </div>
    </div>
  );
};

export default MedItem;
