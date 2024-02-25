import React, { useState } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleNavLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop
      });
    }
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={`${styles.navbarList} ${showLinks ? styles.active : ''}`}>
        <li>
          <img src='./bluetick-consultants.png' alt='logo' />
        </li>
        <li>
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavLinkClick("hero") }}>Home</a>
        </li>
        <li>
          <a href="#what-we-offer" onClick={(e) => { e.preventDefault(); handleNavLinkClick("what-we-offer") }}>What We Offer</a>
        </li>
        <li>
          <a href="#blogs" onClick={(e) => { e.preventDefault(); handleNavLinkClick("blogs") }}>Blogs</a>
        </li>
        <li>
          <a href="#lets-connect" onClick={(e) => { e.preventDefault(); handleNavLinkClick("lets-connect") }}>Let’s Connect</a>
        </li>
      </ul>
      <div className={styles.navbarIcon} onClick={toggleLinks}>
        <i className="fa-solid fa-list-ul"></i>
      </div>
    </nav>
  );
}

export default Navbar;
