import { useState } from "react";
import styles from "@styles/Shop.module.css";
function ShopItem({
  id,
  title,
  price,
  image,
  ["data-testid"]: testId,
  setCart,
  category,
}) {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };

  const addToCart = (id, title, price, image, quantity) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.title === title);

      if (existingItem) {
        return prev.map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { title, price, quantity, image }];
    });
  };

  return (
    <div data-testid={testId} className={styles.itemCard}>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.infoContainer}>
        <p>{title}</p>
        <p className={styles.category}>{category}</p>
        <p data-testid="price" className={styles.price}>
          ${price}
        </p>
        <div className={styles.countContainer}>
          <div onClick={decrement}>
            <button>-</button>
          </div>
          <div>
            <p data-testid="count">{count}</p>
          </div>
          <div onClick={increment}>
            <button>+</button>
          </div>
        </div>

        <button
          className={styles.cartButton}
          onClick={() => addToCart(id, title, price, image, count)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
