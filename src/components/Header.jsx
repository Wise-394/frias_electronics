import { NavLink } from "react-router";
import styles from "@styles/Header.module.css";
import { IoMdCart } from "react-icons/io";

function Header() {
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
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <IoMdCart />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
