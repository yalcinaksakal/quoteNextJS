import Link from "next/link";
import styles from "./MainNavigation.module.css";
import { useRouter } from "next/router";
const MainNavigation = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Great Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li className={router.pathname === "/" ? styles.active : ""}>
            <Link href="/">All Quotes</Link>
          </li>
          <li className={router.pathname === "/new-quote" ? styles.active : ""}>
            <Link href="/new-quote">Add a Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
