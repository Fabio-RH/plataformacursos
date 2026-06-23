import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({tag1, tag2, tag3}) {
  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>APRENDER +</Link>

      <nav className={styles.nav}>
        <Link to="/">{tag1}</Link>
        <Link to="/">{tag2}</Link>
        <Link to="/login">{tag3}</Link>
      </nav>

      {/* Aguardar funcionalidade */}
      {/* <button className={styles.menuBtn}>☰</button>*/}
    </header>
  );
}

export default Header;
