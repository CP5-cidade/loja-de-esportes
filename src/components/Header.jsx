import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-black">
      <h1 className="logo p-2 text-white text-[2rem] font-bold cursor-pointer transition-all">
        LOJA<span className="text-[#95ff00] p-4">GAMER</span></h1>
      <nav>
        <ul className="flex list-none items-center gap-8">
          <li>
            <Link to="/" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:underline transition-all">Home</Link>
          </li>
          <li>
            <Link to="/esportes" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:underline transition-all">Jogos</Link>
          </li>
          <li>
            <Link to="/contato" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:underline transition-all">Contato</Link>
          </li>
          <li>
            <Link to="/login" className="text-white text-lg no-underline 
              hover:text-black hover:bg-[#95ff00] rounded-2xl py-2 px-2 transition-all">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header