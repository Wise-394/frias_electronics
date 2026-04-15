import { useRouteLoaderData, useNavigation } from "react-router";
import ShopItem from "./ShopItem";
import styles from "@styles/Shop.module.css";

function ShopList({ setCart }) {
  const products = useRouteLoaderData("root");
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <p>Loading please wait</p>;
  }

  return (
    <div className={styles.itemGrid}>
      {products.map((product) => (
        <ShopItem
          data-testid="shop-item"
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.images[0]}
          setCart={setCart}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default ShopList;
