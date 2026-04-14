// components/RootLayout.jsx
import { Outlet } from "react-router";
import Header from "../components/Header";
import { useState } from "react";

export default function RootLayout() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header cart={cart} />
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
    </>
  );
}
