import { useSession } from "next-auth/client";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Protected() {
  const [session, loading] = useSession();

  return (
    <Layout>
      {!loading && !session ? (
        <p className={styles.description}>This page is protected</p>
      ) : (
        <p className={styles.description}>This page is open</p>
      )}
    </Layout>
  );
}
