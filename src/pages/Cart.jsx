import { useOutletContext } from "react-router";
import styles from "@styles/Cart.module.css";
import CartItem from "@/components/CartItem";

function Cart() {
  const [cart, setCart] = useOutletContext();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    alert("Success! Your order has been placed.");
    setCart([]);
  };

  return (
    <main className={styles.container}>
      {cart.length === 0 ? (
        <p className={styles.empty}>Your Cart is Empty</p>
      ) : (
        <>
          <p className={styles.title}>Your Cart</p>
          {cart.map((item) => (
            <CartItem
              key={item.title}
              title={item.title}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              setCart={setCart}
            />
          ))}
          <div className={styles.totalCard}>
            <p>Total: {totalAmount.toFixed(2)}</p>
            <button onClick={handleCheckout} className={styles.checkoutBtn}>
              Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
