import Footer from '../components/shared/Footer/Footer.jsx'

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
    <div className="min-h-screen flex flex-col bg-slate-100">

      {/* Hero */}
      <section
        className="relative bg-[#0f172a] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f28]/90 to-[#0a0f28]/50" />

        <div className="relative max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start gap-10">

          {/* Info do curso */}
          <div className="flex-1 text-white">
            <span className="inline-block bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              {curso.categoria}
            </span>
            <h1 className="text-4xl font-bold leading-tight max-w-xl mb-4">
              {curso.titulo}
            </h1>
            <p className="text-slate-300 text-base leading-relaxed max-w-lg mb-5">
              {curso.descricao}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="text-amber-400 font-semibold">
                {'★'.repeat(Math.floor(curso.avaliacao))} {curso.avaliacao}
              </span>
              <span>({curso.totalAlunos.toLocaleString('pt-BR')} alunos)</span>
              <span>{curso.cargaHoraria}</span>
              <span>Prof. {curso.instrutor}</span>
            </div>
          </div>

          {/* Card de compra */}
          <div className="bg-white rounded-xl shadow-2xl w-full md:w-80 flex-shrink-0 overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-[#1a2e5a] to-[#3b6fd4] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="opacity-70">
                <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5" />
                <path d="M10 8l6 4-6 4V8z" fill="#fff" />
              </svg>
            </div>

            <div className="p-5 flex flex-col gap-3">
              <p className="text-3xl font-bold text-slate-900">
                R$ {curso.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <button className="w-full py-3 rounded-lg text-sm font-semibold bg-[#3b6fd4] text-white hover:bg-[#2f5baf] transition-colors cursor-pointer">
                Comprar agora
              </button>
              <button className="w-full py-3 rounded-lg text-sm font-semibold border-2 border-[#3b6fd4] text-[#3b6fd4] hover:bg-blue-50 transition-colors cursor-pointer">
                Adicionar ao carrinho
              </button>
              <p className="text-center text-xs text-slate-400">Garantia de 7 dias</p>

              <ul className="flex flex-col gap-2 border-t border-slate-100 pt-3">
                {[
                  `${curso.cargaHoraria} de conteúdo em vídeo`,
                  `${totalAulas} aulas`,
                  'Acesso vitalício',
                  'Certificado de conclusão',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <IconCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">

          <div className="flex justify-between items-center px-7 py-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Estrutura das Aulas</h2>
            <span className="text-sm text-slate-500">
              {curso.modulos.length} módulos · {totalAulas} aulas · {curso.cargaHoraria}
            </span>
          </div>

          <div className="divide-y divide-slate-200">
            {curso.modulos.map((modulo) => (
              <ModuloItem key={modulo.id} modulo={modulo} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ModuloItem({ modulo }) {
  return (
    <details open={modulo.id === 1} className="group">
      <summary className="flex items-center justify-between px-7 py-4 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors list-none">
        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-xs transition-transform group-open:rotate-90">▶</span>
          <span className="text-sm font-semibold text-slate-800">{modulo.titulo}</span>
        </div>
        <span className="text-xs text-slate-500">{modulo.aulas.length} aulas</span>
      </summary>

      <ul className="divide-y divide-slate-100">
        {modulo.aulas.map((aula) => (
          <li key={aula.id} className="flex items-center gap-3 px-7 py-3.5 hover:bg-slate-50 transition-colors">
            <span className="flex-shrink-0">
              {aula.gratis ? <IconPlay /> : <IconLock />}
            </span>
            <span className="flex-1 text-sm text-slate-700">{aula.titulo}</span>
            {aula.gratis && (
              <span className="text-xs text-[#3b6fd4] border border-[#3b6fd4] px-2 py-0.5 rounded font-medium">
                Grátis
              </span>
            )}
            <span className="text-xs text-slate-400">{aula.duracao}</span>
          </li>
        ))}
      </ul>
    </details>
  )
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
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
