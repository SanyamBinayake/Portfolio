import React, { useState, useRef } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='logo' />
      <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="open menu" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt="close menu" />

        {["home", "about", "services", "work", "gallery", "contact"].map((item, i) => (
          <li key={i}>
            <AnchorLink href={`#${item}`} onClick={() => { setMenu(item); closeMenu(); }}>
              <p>{item.charAt(0).toUpperCase() + item.slice(1).replace("work", "Portfolio")}</p>
            </AnchorLink>
            {menu === item && <img src={underline} alt="underline" />}
          </li>
        ))}
      </ul>

      <div className="nav-connect">
        <AnchorLink href="#contact" onClick={() => setMenu("contact")}>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
