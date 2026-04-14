import { NavLink } from "react-router";
import styles from "@styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>FRIAS ELECTRONICS</p>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Shop
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Cart
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
