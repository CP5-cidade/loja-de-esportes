import EsportesCard from '../components/EsportesCard'
import Basquete from '../assets/basquete.avif'
import Bola from "../assets/bola.avif"
import Chuteira from "../assets/chuteira.webp"
import tennis from "../assets/tennis.avif"

const Home = () => {

  const games = [
    { id: 1, titulo: "Cesta de basquete", preco: "R$ 400,00", imagem: Basquete },
    { id: 2, titulo: "Bola", preco: "R$ 80,00", imagem: Bola },
    { id: 3, titulo: "Chuteira", preco: "R$ 250,00", imagem: Chuteira },
    { id: 4, titulo: "Raquete de Tennis", preco: "R$ 200,00", imagem: tennis },

  ];

  return (
    <main className="px-[5%] mt-10 mb-16 flex-grow">
      <h2 className="titulo text-3xl">Produtos em Destaque</h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {games.map((game) => (
          <EsportesCard
            key={game.id}
            titulo={game.titulo}
            preco={game.preco}
            imagem={game.imagem}
          />
        ))}
      </section>
    </main>
  )
}

export default Home