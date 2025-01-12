// import React from 'react';
// import '../Styles/Home.module.css'; // Adjust the path if necessary
// import Header from "../Components/Header"

// const Home: React.FC = () => {
  
//   return (
    
//     <div className="home">
//       <Header />
//       <h1 className="main-heading">Fresh & Quality Chicken Products</h1>

//       {/* Slider Component */}
//       <div className="slider-container">
//         <div className="slider-item">
//           <img src="../images/whole-chicken.jpg" alt="Chicken 1" className="slider-image" />
//           <a href="./products" className="cta-button">Shop Now</a>
//         </div>
//         <div className="slider-item">
//           <img src="../images/drumsticks.jpg" alt="Chicken 2" className="slider-image" />
//           <a href="/products" className="cta-button">Shop Now</a>
//         </div>
//         <div className="slider-item">
//           <img src="../images/Small-Pieces.webp" alt="Chicken 3" className="slider-image" />
//           <a href="./products" className="cta-button">Shop Now</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;






import React from 'react';
import styles from '../Styles/Home.module.css'; // Import CSS Module
import Header from "../Components/Header"

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
          <Header />

      <h1 className={styles.mainHeading}>Fresh & Quality Chicken Products</h1>

      {/* Slider Component */}
      <section className={styles.sliderContainer}>
        <article className={styles.sliderItem}>
          <img
            src="../images/whole-chicken.jpg"
            alt="Fresh whole chicken ready for cooking"
            className={styles.sliderImage}
          />
          <a href="./products" className={styles.ctaButton}>Shop Now</a>
        </article>
        <article className={styles.sliderItem}>
          <img
            src="../images/drumsticks.jpg"
            alt="Chicken drumsticks for grilling or frying"
            className={styles.sliderImage}
          />
          <a href="/products" className={styles.ctaButton}>Shop Now</a>
        </article>
        <article className={styles.sliderItem}>
          <img
            src="../images/Small-Pieces.webp"
            alt="Small chicken pieces for easy cooking"
            className={styles.sliderImage}
          />
          <a href="./products" className={styles.ctaButton}>Shop Now</a>
        </article>
      </section>
    </div>
  );
};

export default Home;
