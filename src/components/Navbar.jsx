import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo">plataforma</a>

        <nav className="navbar__nav">
          <a href="#">Cursos</a>
          <a href="#">Blog</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>

        <div className="navbar__actions">
          <a href="/login" className="navbar__btn navbar__btn--outline">Entrar</a>
          <a href="/cadastro" className="navbar__btn navbar__btn--primary">Cadastrar</a>
        </div>
      </div>
    </header>
  )
}
