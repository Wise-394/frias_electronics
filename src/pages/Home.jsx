import styles from "@styles/Home.module.css";
import { Link } from "react-router";
function Home() {
  return (
    <main className={styles.container}>
      <h1>FRIAS ELECTRONICS.</h1>
      <h2>SMART GADGETS FOR A SMARTER YOU.</h2>
      <Link to="/shop">Buy Now</Link>
    </main>
  );
}

export default Home;
