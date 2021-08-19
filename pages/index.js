import { signIn, signOut, useSession } from "next-auth/client";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [session, loading] = useSession();

  console.log(session);

  return (
    <Layout>
      <p className={styles.description}>
        {!loading && !session && (
          <>
            <p>Get started by sigining in. </p>
            <button className={styles.code} onClick={() => signIn()}>
              Sign in
            </button>
          </>
        )}
        {session && !loading && (
          <>
            <p>
              Signed in as{" "}
              <span className={styles.p}>{session.user.email}</span>
            </p>
            <button className={styles.code} onClick={() => signOut()}>
              Sign out
            </button>
          </>
        )}
      </p>
    </Layout>
  );
}
