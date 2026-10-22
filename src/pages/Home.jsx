
import EsportesCard from '../components/EsportesCard'
import Basquete from '../assets/basquete.avif'
import Bola from '../assets/bola.avif'
import Chuteira from '../assets/chuteira.webp'
import Tennis from '../assets/tennis.avif'

const produtos = [
  { id: 1, titulo: 'Cesta de basquete', preco: 'R$ 400,00', imagem: Basquete, categoria: 'BASQUETE' },
  { id: 2, titulo: 'Bola', preco: 'R$ 80,00', imagem: Bola, categoria: 'FUTEBOL' },
  { id: 3, titulo: 'Chuteira', preco: 'R$ 250,00', imagem: Chuteira, categoria: 'FUTEBOL' },
  { id: 4, titulo: 'Raquete de Tennis', preco: 'R$ 200,00', imagem: Tennis, categoria: 'TÊNIS' },
]

const Home = () => {
  return (
    <main className="relative flex-grow overflow-hidden bg-[#080b12] px-[5%] py-14 text-white">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-64 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="mb-3 inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-lime-300">
              Performance começa aqui
            </span>

            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
              EQUIPAMENTOS{' '}
              <span className="text-lime-400">EM DESTAQUE.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
              Seu próximo nível começa com o equipamento certo.
            </p>
          </div>

          <div className="hidden rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 sm:block">
            <span className="text-sm text-slate-400">Coleção disponível</span>
            <p className="text-xl font-black text-white">0{produtos.length} PRODUTOS</p>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {produtos.map((produto, index) => (
            <div
              key={produto.id}
              className="animate-[fadeUp_0.6s_ease-out_both] transition-transform duration-300"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <EsportesCard
                titulo={produto.titulo}
                preco={produto.preco}
                imagem={produto.imagem}
                categoria={produto.categoria}
              />
            </div>
          ))}
        </section>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-400">
            <span className="font-bold text-lime-400">◆</span> QUALIDADE. TECNOLOGIA. ESPORTE.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Supere seus limites.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Home
