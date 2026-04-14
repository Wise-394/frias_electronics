import ShopList from "@/components/ShopList";
import styles from "@styles/Shop.module.css";
import { useOutletContext } from "react-router";
function Shop() {
  const [cart, setCart] = useOutletContext();
  return (
    <main className={styles.container}>
      <p>Shop</p>
      <ShopList cart={cart} setCart={setCart} />
    </main>
  );
}

export default Shop;
