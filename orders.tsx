import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "../Styles/Order.module.css";

const Order = () => {
  return (
    <>
      <Header />
      <div className={styles.orderForm}>
        <h2>Place Your Order</h2>
        <h3>and we'll be there at your doorstep</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <label>
            Product:
            <select>
              <option>Chicken Breast</option>
              <option>Chicken Thighs</option>
              <option>Whole chicken</option>
              <option>Chicken Drumsticks</option>
              <option>Customizable chicken pieces</option>



              {/* Add more products as needed */}
            </select>
          </label>
          <button type="submit" className={styles.submitBtn}>
            Place Order
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Order;
