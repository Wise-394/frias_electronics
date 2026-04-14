import { NavLink } from "react-router";
import styles from "@styles/Header.module.css";
import { IoMdCart } from "react-icons/io";

function Header({ cart }) {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>FRIAS</p>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          HOME
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          SHOP
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${styles.cart} ${isActive ? styles.active : ""}`
          }
        >
          <IoMdCart />
          <p>{cart.length > 0 && cart.length}</p>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
