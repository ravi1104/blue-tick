import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Bluetick Consultants. All rights reserved.</p>
      <img src='./glassdoor.webp' alt='rating'></img>
      <div className={styles.social}>
        <span><i className="fab fa-facebook-f"></i></span>
        <span><i className="fab fa-instagram"></i></span>
        <span><i className="fab fa-linkedin-in"></i></span>
        <span><i className="fab fa-twitter"></i></span>
        <span><i className="fab fa-reddit"></i></span>
      </div>
    </footer>
  );
}

export default Footer;
