import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1>Cursos de Destaque</h1>

      <div className={styles.banner}>
        <div className={styles.overlay}>
          <h2>COMO CONSTRUIR UM DISCO VOADOR</h2>

          <p>
            Domine a física avançada e engenharia aeroespacial com os melhores
            especialistas.
          </p>

          <Link to="/curso/1">
            <button>Ver Detalhes</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
