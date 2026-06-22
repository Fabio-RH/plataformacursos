import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <span className={styles.subtitle}>
        DESTAQUES DA SEMANA
      </span>

      <h1>Cursos de Destaque</h1>

      <div className={styles.banner}>
        <div className={styles.overlay}>
          <h2>COMO CONSTRUIR UM DISCO VOADOR</h2>

          <p>
            Domine a física avançada e engenharia
            aeroespacial com os melhores especialistas.
          </p>

          <button>Ver Detalhes</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;