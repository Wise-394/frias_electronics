import styles from "@styles/Home.module.css";
import { Link } from "react-router";
function Home() {
  return (
    <main className={styles.container}>
      <h1>FRIAS SHOP.</h1>
      <h2>Smart gadgets for a smarter you.</h2>
      <Link to="/shop">Buy Now</Link>
    </main>
  );
}

export default Home;
