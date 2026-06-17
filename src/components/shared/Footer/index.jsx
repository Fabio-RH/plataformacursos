import aprenderMais from '../../../../src/assets/aprenderMais.svg'
import './Footer.css'


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img src={aprenderMais}
                className="footer-logo" 
                alt="Aprender Mais Logo" />

                <nav className="footer-nav">
                    <ul className="footer-nav-list"> 
                        <li><a href="#tbt">Termos de Uso</a></li>
                        <li><a href="tbt">Privacidade</a></li>
                        <li><a href="tbt">Ajuda</a></li>
                        <li><a href="tbt">Contato</a></li>
                    </ul>
                </nav>

                <p className="footer-copy">
                    © 2024 Aprender Mais. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer