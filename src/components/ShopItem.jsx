import { useState } from "react";

function ShopItem({ title, price, image, ["data-testid"]: testId }) {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };

  return (
    <div data-testid={testId}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p data-testid="price">${price}</p>
      <p data-testid="count">{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default ShopItem;
