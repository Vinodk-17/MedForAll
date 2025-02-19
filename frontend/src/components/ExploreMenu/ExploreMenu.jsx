import React from 'react'
import './ExploreMenu.css'
import { brand_list, menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      {/* <h1>Explore our menu</h1>
      <p className='explore-menu-text'> Choose from diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meet at a time. </p> */}
      <h1>Shop by health concerns</h1>
<p className='explore-menu-text'>
  Browse a wide range of medicines and healthcare products, carefully sourced to ensure quality and reliability. Our mission is to make healthcare accessible and convenient, delivering trusted medicines right to your doorstep.
</p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
        <br />
        <hr />
        

      
      </div>

      <hr />


    </div>
  )
}

export default ExploreMenu
