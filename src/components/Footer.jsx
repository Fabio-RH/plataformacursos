import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo">plataforma</span>
          <p>A melhor plataforma de cursos online para você evoluir.</p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4>Empresa</h4>
            <a href="#">Sobre nós</a>
            <a href="#">Blog</a>
            <a href="#">Contato</a>
          </div>
          <div className="footer__col">
            <h4>Suporte</h4>
            <a href="#">Central de ajuda</a>
            <a href="#">Termos de uso</a>
            <a href="#">Privacidade</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Plataforma de Cursos. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
