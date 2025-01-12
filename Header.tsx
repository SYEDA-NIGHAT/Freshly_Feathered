import Link from "next/link";
import Image from "next/image";
import styles from "../Styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* Wrap the Image with Link to redirect to the homepage */}
        <Link href="/">
          <Image src="/images/Logo1.webp" alt="AL SYED Logo" width={80} height={80} />
        </Link>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/HomePage">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="./orders">Order Now</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
