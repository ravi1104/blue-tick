import React from 'react';
import styles from './navbar.module.css'; // Import CSS module for styling

const Navbar = () => {
  const handleNavLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
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
    </nav>
  );
}

export default Navbar;
