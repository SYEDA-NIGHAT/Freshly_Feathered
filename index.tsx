// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import styles from "../Styles/Home.module.css";

// const Home = () => {
//   return (
//     <>
//       <Header />
//       <main className={styles.main}>
//         <h1 className={styles.heading}>Fresh, Farm-to-Table Chicken Delivered to Your Door!</h1>
//         <p className={styles.paragraph}>
//           Order the best quality chicken for your family, directly from the farm.
//         </p>
//         <a href="./products" className={styles.cta}>Shop Now</a>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Home;







// import React from "react";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import styles from "../Styles/Home.module.css";

// const Home = () => {
//   const reviews = [
//     { id: 1, text: "The chicken was incredibly fresh! Will order again.", name: "Sarah Khan" },
//     { id: 2, text: "Amazing quality and timely delivery. Highly recommend!", name: "Ahmed Ali" },
//     { id: 3, text: "The best chicken products I've ever tried. Five stars!", name: "Ayesha Raza" },
//     { id: 4, text: "Excellent service and fresh products. Very happy!", name: "Zain Malik" },
//   ];

//   return (
//     <>
//       <Header />
//       <main className={styles.main}>
//         <h1 className={styles.heading}>Fresh, Farm-to-Table Chicken Delivered to Your Door!</h1>
//         <p className={styles.paragraph}>
//           Order the best quality chicken for your family, directly from the farm.
//         </p>
//         <a href="./products" className={styles.cta}>Shop Now</a>


//         {/* Reviews Slider */}
//         <section className={styles.reviewsSection}>
//           <h2 className={styles.sliderHeading}>What Our Customers Say</h2>
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={20}
//             navigation
//             pagination={{ clickable: true }}
//             loop={true}
//             className="mySwiper"
//           >
//             {reviews.map((review) => (
//               <SwiperSlide key={review.id} className={styles.reviewSlide}>
//                 <p className={styles.reviewText}>"{review.text}"</p>
//                 <h4 className={styles.reviewerName}>- {review.name}</h4>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Home;





// import React from "react";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../Styles/Home.module.css";

// const Home = () => {
//   const reviews = [
//     { id: 1, text: "The chicken was incredibly fresh! Will order again.", name: "Sarah Khan" },
//     { id: 2, text: "Amazing quality and timely delivery. Highly recommend!", name: "Ahmed Ali" },
//     { id: 3, text: "The best chicken products I've ever tried. Five stars!", name: "Ayesha Raza" },
//     { id: 4, text: "Excellent service and fresh products. Very happy!", name: "Zain Malik" },
//   ];

//   return (
//     <>
//       <Header />
//       <main className="main">
//         <h1 className="heading">Fresh, Farm-to-Table Chicken Delivered to Your Door!</h1>
//         <p className="paragraph">
//           Order the best quality chicken for your family, directly from the farm.
//         </p>
//         <a href="./products" className="cta">Shop Now</a>

//         {/* Reviews Section */}
//         <div className="reviews-section">
//           <h2 className="reviews-heading">What Our Customers Say</h2>
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={20}
//             navigation
//             pagination={{ clickable: true }}
//             loop={true}
//             className="reviews-slider"
//           >
//             {reviews.map((review) => (
//               <SwiperSlide key={review.id}>
//                 <div className="review-card">
//                   <p className="review-text">"{review.text}"</p>
//                   <h4 className="reviewer-name">- {review.name}</h4>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Home;




// import React from "react";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import "../Styles/Home.module.css"; 

// const Index: React.FC = () => {
//   const reviews = [
//     { id: 1, text: "The chicken was incredibly fresh! Will order again.", name: "Sarah Khan" },
//     { id: 2, text: "Amazing quality and timely delivery. Highly recommend!", name: "Ahmed Ali" },
//     { id: 3, text: "The best chicken products I've ever tried. Five stars!", name: "Ayesha Raza" },
//     { id: 4, text: "Excellent service and fresh products. Very happy!", name: "Zain Malik" },
//   ];

//   return (
//     <>
//       <Header />
//       <main className="main">
//         <h1 className="heading">Fresh, Farm-to-Table Chicken Delivered to Your Door!</h1>
//         <p className="paragraph">
//           Order the best quality chicken for your family, directly from the farm.
//         </p>
//         <a href="./products" className="cta">Shop Now</a>

//         {/* Reviews Section */}
//         <div className="reviews-section">
//           <h2 className="reviews-heading">What Our Customers Say</h2>
//           <div className="reviews-container">
//             {reviews.map((review) => (
//               <div key={review.id} className="review-card">
//                 <p className="review-text">"{review.text}"</p>
//                 <h4 className="reviewer-name">- {review.name}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Index;




import React from "react";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import styles from "../src/Styles/index.module.css"; // Import as CSS Module

const Index: React.FC = () => {
  const reviews = [
    { id: 1, text: "The chicken was incredibly fresh! Will order again.", name: "Sarah Khan" },
    { id: 2, text: "Amazing quality and timely delivery. Highly recommend!", name: "Eman Khan" },
    { id: 3, text: "The best chicken products I've ever tried. Five stars!", name: "Ali Raza Shere" },
    { id: 4, text: "Excellent service and fresh products. Very happy!", name: "Zain Malik" },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.heading}>Fresh, Farm-to-Table Chicken Delivered to Your Door!</h1>
        <p className={styles.paragraph}>
          Order the best quality chicken for your family, directly from the farm.
        </p>
        <a href="./products" className={styles.cta}>Shop Now</a>

        {/* Reviews Section */}
        <div className={styles.reviewsSection}>
          <h2 className={styles.reviewsHeading}>What Our Customers Say</h2>
          <div className={styles.reviewsContainer}>
            {reviews.map((review) => (
              <div key={review.id} className={styles.reviewCard}>
                <p className={styles.reviewText}>"{review.text}"</p>
                <h4 className={styles.reviewerName}>- {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
