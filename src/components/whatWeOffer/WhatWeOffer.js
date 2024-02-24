import React from 'react';
import styles from './whatWeOffer.module.css';

const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className={styles.whatWeOffer}>
      <div className={styles.offerItem}>
        <h2>Explore AI Opportunities for Your Enterprise</h2>
        <p>Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.</p>
      </div>
      <div className={styles.offerItem}>
        <h2>Design AI Trust Layer</h2>
        <p>Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.</p>
      </div>
      <div className={styles.offerItem}>
        <h2>Scalability-Focused Solutions</h2>
        <p>Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.</p>
      </div>
      <div className={styles.offerItem}>
        <h2>End to end Workflow automation</h2>
        <p>Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.</p>
      </div>
    </section>
  );
}

export default WhatWeOffer;
    