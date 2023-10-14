import React, { useState } from 'react';

function Nav() {
  const [status, setStatus] = useState(false);

  const toggleMenu = () => {
    setStatus(!status);
  };

  const closeMenu = () => {
    setStatus(false);
  };

  const menuWidth = status ? '70%' : '0';
  const boxShadoww = status ? '0 0 0 999px rgba(0,0,0,.6)' : '0 0 0 rgba(0,0,0,0)';

  return (
    <>
      <nav>
        <div className="icon"></div>
        <div className="bars_cont">
          <i
            className="fa fa-bars"
            onClick={toggleMenu}
            aria-expanded={status ? 'true' : 'false'}
            aria-label="Toggle Menu"
          ></i>
        </div>
        <ul id="menu">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
      <ul id="menu_mobile" style={{ width: menuWidth, boxShadow: boxShadoww }}>
        <li onClick={closeMenu}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
        </li>
        <li>
          <i className="fa fa-home" aria-hidden="true"></i> Home
        </li>
        <li>
          <i className="fa fa-user-circle" aria-hidden="true"></i> Contact
        </li>
        <li>
          <i className="fa fa-info-circle" aria-hidden="true"></i> About
        </li>
      </ul>
    </>
  );
}

export default Nav;
