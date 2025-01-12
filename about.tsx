// import React from 'react';
// import styles from '../Styles/AboutPage.module.css';

// const AboutPage = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Meet Our Team</h1>
      
//       <div className={styles.team}>
//         <div className={styles.member}>
//           <img src="Member 1.jpeg" alt="Team Member 1" className={styles.memberImage} />
//           <h2 className={styles.memberName}>John Doe</h2>
//           <p className={styles.memberDescription}>John is the founder and has over 10 years of experience in the poultry industry.</p>
//         </div>

//         <div className={styles.member}>
//           <img src="/path/to/team-member-2.jpg" alt="Team Member 2" className={styles.memberImage} />
//           <h2 className={styles.memberName}>Jane Smith</h2>
//           <p className={styles.memberDescription}>Jane handles logistics and makes sure the chicken gets delivered fresh to your door!</p>
//         </div>
//       </div>

//       <div className={styles.paragraph}>
//         <p>We specialize in delivering fresh, farm-to-table chicken directly to your door. Quality and freshness are our top priorities, ensuring you get the best poultry for your family.</p>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;


// src/pages/about.tsx
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AboutPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Header />

      <h1>Meet Our Team</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <div>
          <img
            src="./images/Member 1.jpeg"
            alt="Team Member 1"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
          <h2>Syeda Nighat</h2>
          <p>Nighat is the founder and has over 10 years of experience in the poultry industry.</p>
        </div>

        <div>
          <img
            src="./images/Member 2.jpeg"
            alt="Team Member 2"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
          <h2>Syeda Zainab</h2>
          <p>Zainab handles all the logistics and makes sure the chicken gets delivered fresh to your door!</p>
        </div>
      </div>

      <p style={{ marginTop: '30px' }}>
        We specialize in delivering fresh, farm-to-table chicken directly to your door. Quality and freshness
        are our top priorities, ensuring you get the best poultry for your family.
      </p>

      <Footer />
    </div>
  );
};

export default AboutPage;
