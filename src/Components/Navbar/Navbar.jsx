import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  useEffect(() => {
    // ensure menu starts hidden on mount
    if (menuRef.current) menuRef.current.style.right = '-320px';
  }, []);

  const openMenu = () => {
    if (menuRef.current) menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.style.right = '-320px';
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='nav-logo' />
      <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="open menu" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt="close menu" />

        {["home", "about", "services", "projects", "gallery", "contact"].map((item, i) => (
          <li key={i}>
            <AnchorLink href={`#${item}`} onClick={() => { setMenu(item); closeMenu(); }}>
              <p>{item === 'projects' ? 'Projects' : item.charAt(0).toUpperCase() + item.slice(1)}</p>
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
