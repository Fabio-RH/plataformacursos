import styles from './styles/cursoEspecifico.module.css';

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
    <div style={{ paddingTop:'4rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f1f5f9' }}>

      {/* Hero */}
      <section style={{
        position: 'relative',
        backgroundColor: '#0f172a',
        backgroundImage: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,15,40,0.92) 45%, rgba(10,15,40,0.55) 100%)' }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '48px 24px', display: 'flex', alignItems: 'flex-start', gap: '32px' }}>

          {/* Info */}
          <div style={{ flex: 1, color: '#fff', paddingTop: '8px' }}>
            <span style={{ display: 'inline-block', backgroundColor: '#d97706', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>
              {curso.categoria}
            </span>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.2, margin: '0 0 14px', maxWidth: '520px' }}>
              {curso.titulo}
            </h1>
            <p style={{ fontSize: '0.95rem', color: '#c8d3e8', lineHeight: 1.6, maxWidth: '480px', margin: '0 0 18px' }}>
              {curso.descricao}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.85rem', color: '#94a3b8', alignItems: 'center' }}>
              <span style={{ color: '#fbbf24', fontWeight: 600 }}>★★★★★ {curso.avaliacao}</span>
              <span>({curso.totalAlunos.toLocaleString('pt-BR')} alunos)</span>
              <span>·</span>
              <span>{curso.cargaHoraria}</span>
              <span>·</span>
              <span>Prof. {curso.instrutor}</span>
            </div>
          </div>

          {/* Card de compra */}
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', width: '300px', flexShrink: 0, overflow: 'hidden' }}>
            <div style={{ height: '150px', background: 'linear-gradient(135deg, #1a2e5a 0%, #3b6fd4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.7 }}>
                <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5" />
                <path d="M10 8l6 4-6 4V8z" fill="#fff" />
              </svg>
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>
                R$ {curso.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <button style={{ width: '100%', padding: '11px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, backgroundColor: '#3b6fd4', color: '#fff', border: 'none', cursor: 'pointer' }}>
                Comprar agora
              </button>
              <button style={{ width: '100%', padding: '11px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, backgroundColor: 'transparent', color: '#3b6fd4', border: '2px solid #3b6fd4', cursor: 'pointer' }}>
                Adicionar ao carrinho
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#64748b', margin: 0 }}>Garantia de 7 dias</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                {[
                  `${curso.cargaHoraria} de conteúdo em vídeo`,
                  `${totalAulas} aulas`,
                  'Acesso vitalício',
                  'Certificado de conclusão',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#475569' }}>
                    <IconCheck /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <main style={{ flex: 1, padding: '40px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>Estrutura das Aulas</h2>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                {curso.modulos.length} módulos · {totalAulas} aulas · {curso.cargaHoraria}
              </span>
            </div>

            <div>
              {curso.modulos.map((modulo, i) => (
                <ModuloItem key={modulo.id} modulo={modulo} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

function ModuloItem({ modulo, defaultOpen }) {
  return (
    <details open={defaultOpen} style={{ borderBottom: '1px solid #e2e8f0' }}>
      <summary style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 24px', backgroundColor: '#f8fafc', cursor: 'pointer', userSelect: 'none', listStyle: 'none' }}>
        <span style={{ fontSize: '0.6rem', color: '#94a3b8' }}>▶</span>
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e293b', flex: 1 }}>{modulo.titulo}</span>
        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{modulo.aulas.length} aulas</span>
      </summary>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {modulo.aulas.map((aula) => (
          <li key={aula.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px', borderTop: '1px solid #f1f5f9' }}>
            <span style={{ flexShrink: 0 }}>{aula.gratis ? <IconPlay /> : <IconLock />}</span>
            <span style={{ flex: 1, fontSize: '0.875rem', color: '#334155' }}>{aula.titulo}</span>
            {aula.gratis && (
              <span style={{ fontSize: '0.7rem', color: '#3b6fd4', border: '1px solid #3b6fd4', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>Grátis</span>
            )}
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', width: '36px', textAlign: 'right' }}>{aula.duracao}</span>
          </li>
        ))}
      </ul>
    </details>
  )
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" fill="#22c55e" />
      <path d="M7 12l3.5 3.5L17 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPlay() {
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
