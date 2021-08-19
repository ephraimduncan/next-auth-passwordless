import Laypout from "../components/Laypout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Laypout>
      <p className={styles.description}>This page is protected</p>
    </Laypout>
  );
}
