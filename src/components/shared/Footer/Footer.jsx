import aprenderMais from '../../../../src/assets/aprenderMais.svg'
import styles from './Footer.css'


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <img src={aprenderMais} className={styles['footer-logo']} alt="Aprender Mais Logo" />

                <nav className={styles['footer-nav']}>
                    <ul className={styles['footer-nav-list']}> 
                        <li><a href="#tbt">Termos de Uso</a></li>
                        <li><a href="tbt">Privacidade</a></li>
                        <li><a href="tbt">Ajuda</a></li>
                        <li><a href="tbt">Contato</a></li>
                    </ul>
                </nav>

                <p className={styles['footer-copy']}>
                    © 2024 Aprender Mais. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer