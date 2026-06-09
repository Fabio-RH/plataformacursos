import styles from "./InstructorSpotlight.module.css";

const mentors = [
  {
    name: "Ana Silva",
    area: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Luz",
    area: "Negócios",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Júlia M.",
    area: "Design",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Roberto",
    area: "Ciências",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

function InstructorSpotlight() {
  return (
    <aside className={styles.sidebar}>
      <h3>TOP MENTORES</h3>

      {mentors.map((mentor) => (
        <div className={styles.mentorCard} key={mentor.name}>
          <img src={mentor.photo} alt={mentor.name} />

          <div>
            <strong>{mentor.name}</strong>
            <p>{mentor.area}</p>
          </div>
        </div>
      ))}

      <div className={styles.adsBox}>
        Espaço para anúncios
      </div>
    </aside>
  );
}

export default InstructorSpotlight;