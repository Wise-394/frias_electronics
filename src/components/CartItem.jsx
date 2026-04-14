import styles from "@styles/Cart.module.css";

function CartItem({ title, price, image, quantity, setCart }) {
  const updateQty = (val) => {
    setCart((prev) =>
      prev.map((item) =>
        item.title === title
          ? { ...item, quantity: Math.max(1, item.quantity + val) }
          : item,
      ),
    );
  };

  const removeItem = () => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.infoContainer}>
        <p>{title}</p>
        <p>{price}</p>
        <div className={styles.quantityContainer}>
          <button onClick={() => updateQty(-1)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => updateQty(1)}>+</button>
        </div>
        <div className={styles.rightContainer}>
          <p>{(price * quantity).toFixed(2)}</p>
          <button onClick={removeItem}>REMOVE</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
