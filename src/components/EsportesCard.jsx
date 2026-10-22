
const EsportesCard = ({ titulo, preco, imagem, categoria = 'ESPORTES' }) => {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#111722] shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(6,182,212,0.18)]">

      <div className="relative h-56 overflow-hidden bg-slate-900">
        <img
          src={imagem}
          alt={titulo}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-transparent to-black/10" />

        <span className="absolute left-4 top-4 rounded-full border border-cyan-300/30 bg-black/70 px-3 py-1 text-[10px] font-black tracking-[0.18em] text-cyan-300 backdrop-blur-md">
          {categoria}
        </span>

        <div className="absolute bottom-3 right-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-black">
            DESTAQUE
          </span>
        </div>
      </div>

      <div className="flex flex-col p-5">
        <h3 className="min-h-12 text-lg font-extrabold text-white transition-colors duration-300 group-hover:text-cyan-300">
          {titulo}
        </h3>

        <div className="mb-5 mt-2 flex items-center justify-between gap-2">
          <span className="text-xs uppercase tracking-wider text-slate-500">
            PREÇO
          </span>
          <p className="text-xl font-black text-cyan-400">
            {preco}
          </p>
        </div>

        <button
          type="button"
          className="relative mt-auto overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 px-5 py-3 font-black text-[#06111f] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-95"
        >
          <span className="relative z-10">COMPRAR AGORA</span>
        </button>
      </div>
    </article>
  )
}

export default EsportesCard
