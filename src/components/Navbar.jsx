function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">APRENDER +</div>

      <nav>
        <a href="#">Cursos</a>
        <a href="#">Mentores</a>
        <a href="#">Meus Planos</a>
        <a href="#">Sobre</a>
      </nav>

      <button className="menu-btn">☰</button>
    </header>
  );
}

export default Navbar;