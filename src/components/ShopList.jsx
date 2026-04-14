import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";

function ShopList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ["laptops", "smartphones"];
        const requests = categories.map((cat) =>
          fetch(`https://dummyjson.com/products/category/${cat}`).then((res) =>
            res.json(),
          ),
        );

        const results = await Promise.all(requests);
        const combinedProducts = results.flatMap((result) => result.products);

        setProducts(combinedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ShopItem
          data-testid="shop-item"
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.images[0]}
        />
      ))}
    </div>
  );
}

export default ShopList;
