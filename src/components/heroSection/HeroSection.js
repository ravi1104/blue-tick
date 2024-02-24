import React from 'react';
import styles from './hero.module.css'; // Correct file name and import statement

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Interviewgpt</h1>
        <h1>Founded in 2017, Bluetick Consultants</h1>
        <p>
          is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.
        </p>
        <p>Transforming Enterprises with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
        <a href="https://www.bluetickconsultants.com/generative-ai.html" className={styles.btn}>To know more about us</a>
      </div>
      <div className={styles.heroImage}>
        <img src='./interviewgpt.webp' alt='hero'></img>
      </div>
    </section>
  );
}

export default HeroSection;
