import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>APRENDER +</div>

      <nav className={styles.nav}>
        <a href="#">Cursos</a>
        <a href="#">Mentores</a>
        <a href="#">Meus Planos</a>
        <a href="#">Sobre</a>
      </nav>

      <button className={styles.menuBtn}>☰</button>
    </header>
  );
}

export default Header;