import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import { productsLoader } from "./api";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      loader: productsLoader,
      HydrateFallback: () => <div>Loading...</div>,
      id: "root",
      children: [
        { index: true, element: <Home /> },
        {
          path: "shop",
          element: <Shop />,
        },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
