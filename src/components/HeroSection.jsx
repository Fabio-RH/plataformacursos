function HeroSection() {
  return (
    <section className="hero">
      <span className="hero-subtitle">DESTAQUES DA SEMANA</span>

      <h1>Cursos de Destaque</h1>

      <div className="hero-banner">
        <div className="overlay">
          <h2>COMO CONSTRUIR UM DISCO VOADOR</h2>

          <p>
            Domine a física avançada e engenharia aeroespacial com os melhores
            especialistas do setor.
          </p>

          <button>Ver Detalhes</button>
        </div>
      </div>

      <div className="dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default HeroSection;