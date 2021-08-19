import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./Header";

export default function Laypout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Auth Passwordless</title>
        <meta
          name="description"
          content="Passwordless Email Login. Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {children}
      </main>
    </div>
  );
}
