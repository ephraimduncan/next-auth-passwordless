import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/protected">
            <a>Protected</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
