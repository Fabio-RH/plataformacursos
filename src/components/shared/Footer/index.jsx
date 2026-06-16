import aprenderMais from "../../../../public/aprender-mais.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img
          src={aprenderMais}
          className={styles.footerLogo}
          alt="Aprender Mais Logo"
        />

        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            <li><a href="#tbt">Termos de Uso</a></li>
            <li><a href="#tbt">Privacidade</a></li>
            <li><a href="#tbt">Ajuda</a></li>
            <li><a href="#tbt">Contato</a></li>
          </ul>
        </nav>

        <p className={styles.footerCopy}>
          © 2024 Aprender Mais. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;