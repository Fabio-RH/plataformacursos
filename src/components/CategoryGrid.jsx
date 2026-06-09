const categories = [
  {
    name: "Marketing Digital",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    name: "Empreendedorismo",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    name: "Maquiagem",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
  },
  {
    name: "Inglês",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
  },
  {
    name: "Concursos",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
  },
  {
    name: "Estética",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800",
  },
  {
    name: "Investimentos",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
  },
  {
    name: "Saúde e Esportes",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
  },
  {
    name: "Culinária",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
  },
];

function CategoryGrid() {
  return (
    <div className="categories-section">
      <h2>Explorar Categorias</h2>

      <div className="categories-grid">
        {categories.map((item) => (
          <div
            key={item.name}
            className="category-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="card-overlay">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;