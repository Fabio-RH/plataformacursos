import styles from "./Header.module.css";

function Header({tag1, tag2, tag3}) {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>APRENDER +</div>

      <nav className={styles.nav}>
        <a href="#">{tag1}</a>
        <a href="#">{tag2}</a>
        <a href="#">{tag3}</a>
      </nav>

      {/* Aguardar funcionalidade */}
      {/* <button className={styles.menuBtn}>☰</button>*/}
    </header>
  );
}

export default Header;
