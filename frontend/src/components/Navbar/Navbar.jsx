import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = ()=>{
       localStorage.removeItem("token");
       setToken("");
       navigate("/");
  }
  return (
    <div className='navbar'>
      <Link to='/'> <img className='logo' src={assets.logo} alt="" /></Link><h2 className='WebName'>MED FOR ALL</h2>
      <ul className="navbar-menu" style={{justifyContent:'flex-end'}}>
        <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? 'active' : ''}>Medicines</a>
        {/* <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? 'active' : ''}>mobile app</a> */}
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</a>
      </ul>

      <div className="navbar-right">
       {/* only show search icons */}
        {/* <img src={assets.search_icon} alt="" /> */}
        <div className="navbar-search-icon">
          <Link to='/cart'> <img id="cart" width="27" height="27" src="https://img.icons8.com/material-outlined/96/shopping-cart--v1.png" alt="shopping-cart--v1" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li>
                <img src={assets.logout_icon} alt="" />
                <p onClick={logout}>Logout</p>
              </li>
            </ul>
          </div>}


      </div>
    </div>
  )
}

export default Navbar
