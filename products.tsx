// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// // import styles from "../Styles/Products.module.css";

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import '../Styles/Home.module.css'; // Adjust the path if necessary
// import styles from "../Styles/Products.module.css";


// const Products = () => {
//   const productList = [
//     { id: 1, name: "Fresh Chicken Breast", price: "$10", description: "Tender and juicy chicken breast." },
//     { id: 2, name: "Chicken Drumsticks", price: "$8", description: "Perfect for grilling and frying." },
//     { id: 3, name: "Whole Chicken", price: "$15", description: "Freshly cleaned, ready to cook." },
//   ];

//   return (
//     <>
//       <Header />
//       <main className={styles.container}>
//         <h1 className={styles.heading}>Our Products</h1>
//         <div className={styles.productGrid}>
//           {productList.map((product) => (
//             <div key={product.id} className={styles.productCard}>
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <p>{product.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Products;

// ------------------------------------------------------------------------------------------------------------------------------


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import '../Styles/Home.module.css'; // Adjust the path if necessary

// const Home: React.FC = () => {
//   return (
//     <div className="home">
//       <h1 className="main-heading">Fresh & Quality Chicken Products</h1>

//       {/* Slider Component */}
//       <div className="slider-container">
//         <div className="slider-item">
//           <img src="../images/whole-chicken.jpg" alt="Chicken 1" className="slider-image" />
//           <a href="./suggestions" className="cta-button">Shop Now</a>
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

//       {/* Reviews Slider */}
//       <div className="reviews-slider">
//         <h2 className="slider-heading">What Our Customers Say</h2>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={20}
//           navigation
//           pagination={{ clickable: true }}
//           loop={true}
//           className="mySwiper"
//         >
//           <SwiperSlide className="review-slide">
//             <p className="review-text">"The chicken was incredibly fresh! Will order again."</p>
//             <h4 className="reviewer-name">- Sarah Khan</h4>
//           </SwiperSlide>
//           <SwiperSlide className="review-slide">
//             <p className="review-text">"Amazing quality and timely delivery. Highly recommend!"</p>
//             <h4 className="reviewer-name">- Ahmed Ali</h4>
//           </SwiperSlide>
//           <SwiperSlide className="review-slide">
//             <p className="review-text">"The best chicken products I've ever tried. Five stars!"</p>
//             <h4 className="reviewer-name">- Ayesha Raza</h4>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from "react";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import styles from "../Styles/Products.module.css";

// const Products = () => {
//   const [notification, setNotification] = useState("");

//   const productList = [
//     { id: 1, name: "Fresh Chicken Breast", price: "$10", description: "Tender and juicy chicken breast." },
//     { id: 2, name: "Chicken Drumsticks", price: "$8", description: "Perfect for grilling and frying." },
//     { id: 3, name: "Whole Chicken", price: "$15", description: "Freshly cleaned, ready to cook." },
//     { id: 4, name: "Chicken Wings", price: "$6", description: "Crispy and flavorful chicken wings." },
//   ];

//   const handleAddToCart = (productName: string) => {
//     setNotification(`${productName} added to cart successfully!`);
//     setTimeout(() => setNotification(""), 3000); // Clears the notification after 3 seconds
//   };

//   return (
//     <>
//       <Header />
//       <main className={styles.container}>
//         <h1 className={styles.heading}>Our Products</h1>

//         {/* Notification */}
//         {notification && <div className={styles.notification}>{notification}</div>}

//         {/* Products Slider */}
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={20}
//           navigation
//           pagination={{ clickable: true }}
//           loop={true}
//           className="mySwiper"
//         >
//           {productList.map((product) => (
//             <SwiperSlide key={product.id}>
//               <div className={styles.productCard}>
//                 <h3>{product.name}</h3>
//                 <p>{product.description}</p>
//                 <p>{product.price}</p>
//                 <button onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Products;






import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "../Styles/Products.module.css"; // Importing the CSS Module

const Products = () => {
  const [notification, setNotification] = useState("");

  const productList = [
    { id: 1, name: "Fresh Chicken Breast", price: "$10", description: "Tender and juicy chicken breast." },
    { id: 2, name: "Chicken Drumsticks", price: "$8", description: "Perfect for grilling and frying." },
    { id: 3, name: "Whole Chicken", price: "$15", description: "Freshly cleaned, ready to cook." },
    { id: 4, name: "Chicken Wings", price: "$6", description: "Crispy and flavorful chicken wings." },
  ];

  const handleAddToCart = (productName: string) => {
    setNotification(`${productName} added to cart successfully!`);
    setTimeout(() => setNotification(""), 3000); // Clears the notification after 3 seconds
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.heading}>Our Products</h1>

        {/* Notification */}
        {notification && <div className={styles.notification}>{notification}</div>}

        {/* Product Listing */}
        <div className={styles.productGrid}>
          {productList.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
