import { signIn, signOut, useSession } from "next-auth/client";
import Laypout from "../components/Laypout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [session, loading] = useSession();

  console.log(session);

  return (
    <Laypout>
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
    </Laypout>
  );
}
