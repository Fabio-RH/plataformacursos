import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import './CursoEspecifico.css'

const curso = {
  categoria: 'Desenvolvimento',
  titulo: 'Como Construir um Disco Voador',
  descricao: 'Aprenda do zero tudo que você precisa saber para construir e dominar as tecnologias mais avançadas do mundo.',
  instrutor: 'João Silva',
  avaliacao: 4.8,
  totalAlunos: 1240,
  cargaHoraria: '12h 30min',
  preco: 297.0,
  modulos: [
    {
      id: 1,
      titulo: 'Módulo 1 — Introdução',
      aulas: [
        { id: 1, titulo: 'Bem-vindo ao curso', duracao: '5:00', gratis: true },
        { id: 2, titulo: 'O que vamos construir', duracao: '8:22', gratis: true },
        { id: 3, titulo: 'Configurando o ambiente', duracao: '12:10', gratis: false },
      ],
    },
    {
      id: 2,
      titulo: 'Módulo 2 — Fundamentos',
      aulas: [
        { id: 4, titulo: 'Conceitos básicos de propulsão', duracao: '15:45', gratis: false },
        { id: 5, titulo: 'Materiais e ferramentas', duracao: '10:30', gratis: false },
        { id: 6, titulo: 'Projeto inicial', duracao: '20:00', gratis: false },
      ],
    },
    {
      id: 3,
      titulo: 'Módulo 3 — Construção',
      aulas: [
        { id: 7, titulo: 'Montagem da estrutura principal', duracao: '25:15', gratis: false },
        { id: 8, titulo: 'Sistema de estabilização', duracao: '18:40', gratis: false },
        { id: 9, titulo: 'Testes e ajustes finais', duracao: '22:00', gratis: false },
      ],
    },
  ],
}

export default function CursoEspecifico() {
  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0)

  return (
    <div className="curso-page">
      <Navbar />

      <section className="curso-hero">
        <div className="curso-hero__overlay" />
        <div className="curso-hero__container">
          <div className="curso-hero__content">
            <span className="curso-hero__badge">{curso.categoria}</span>
            <h1 className="curso-hero__titulo">{curso.titulo}</h1>
            <p className="curso-hero__descricao">{curso.descricao}</p>
            <div className="curso-hero__meta">
              <span className="curso-hero__avaliacao">
                {'★'.repeat(Math.floor(curso.avaliacao))} {curso.avaliacao}
              </span>
              <span>({curso.totalAlunos.toLocaleString('pt-BR')} alunos)</span>
              <span>{curso.cargaHoraria}</span>
              <span>Prof. {curso.instrutor}</span>
            </div>
          </div>

          <div className="curso-hero__card">
            <div className="card-thumb">
              <div className="card-thumb__placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5" />
                  <path d="M10 8l6 4-6 4V8z" fill="#fff" />
                </svg>
              </div>
            </div>
            <div className="card-body">
              <p className="card-preco">
                R$ {curso.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <button className="card-btn card-btn--primary">Comprar agora</button>
              <button className="card-btn card-btn--outline">Adicionar ao carrinho</button>
              <p className="card-garantia">Garantia de 7 dias</p>
              <ul className="card-includes">
                <li>
                  <IconCheck /> {curso.cargaHoraria} de conteúdo em vídeo
                </li>
                <li>
                  <IconCheck /> {totalAulas} aulas
                </li>
                <li>
                  <IconCheck /> Acesso vitalício
                </li>
                <li>
                  <IconCheck /> Certificado de conclusão
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <main className="curso-main">
        <div className="curso-main__container">
          <section className="curso-estrutura">
            <div className="curso-estrutura__header">
              <h2>Estrutura das Aulas</h2>
              <span>
                {curso.modulos.length} módulos · {totalAulas} aulas · {curso.cargaHoraria}
              </span>
            </div>

            <div className="curso-modulos">
              {curso.modulos.map((modulo) => (
                <ModuloItem key={modulo.id} modulo={modulo} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ModuloItem({ modulo }) {
  return (
    <details className="modulo" open={modulo.id === 1}>
      <summary className="modulo__header">
        <span className="modulo__titulo">{modulo.titulo}</span>
        <span className="modulo__count">{modulo.aulas.length} aulas</span>
      </summary>
      <ul className="modulo__aulas">
        {modulo.aulas.map((aula) => (
          <li key={aula.id} className="aula-item">
            <span className="aula-item__icon">
              {aula.gratis ? <IconPlayOutline /> : <IconLock />}
            </span>
            <span className="aula-item__titulo">{aula.titulo}</span>
            {aula.gratis && <span className="aula-item__tag">Grátis</span>}
            <span className="aula-item__duracao">{aula.duracao}</span>
          </li>
        ))}
      </ul>
    </details>
  )
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" fill="#22c55e" />
      <path d="M7 12l3.5 3.5L17 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPlayOutline() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#3b6fd4" strokeWidth="1.5" />
      <path d="M10 8l6 4-6 4V8z" fill="#3b6fd4" />
    </svg>
  )
}

function IconLock() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="#94a3b8" strokeWidth="1.5" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
