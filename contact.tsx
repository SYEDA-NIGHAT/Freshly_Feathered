import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "../Styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Header />
      <main className={styles.contactMain}>
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, feel free to reach out to us!</p>
        {/* <p>You can order too.</p> */}
        <form className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
