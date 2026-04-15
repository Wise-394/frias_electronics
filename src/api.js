export const productsLoader = async () => {
  const categories = ["laptops", "smartphones"];
  try {
    const requests = categories.map((cat) =>
      fetch(`https://dummyjson.com/products/category/${cat}`).then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch ${cat}`);
        return res.json();
      }),
    );

    const results = await Promise.all(requests);
    return results.flatMap((result) => result.products);
  } catch (error) {
    throw new Error(error.message);
  }
};
