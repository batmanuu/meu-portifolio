import Link from 'next/link'

export default function Layout({ children }){
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-[#15061a] text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-black/40">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-pink-400">Emanuelle Silva</div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-pink-300">Home</a>
            <a href="#about" className="hover:text-pink-300">Sobre</a>
            <a href="#skills" className="hover:text-pink-300">Habilidades</a>
            <a href="#projects" className="hover:text-pink-300">Projetos</a>
            <a href="#education" className="hover:text-pink-300">Formação</a>
            <a href="#certifications" className="hover:text-pink-300">Certificações</a>
            <a href="#contact" className="hover:text-pink-300">Contato</a>
          </nav>
          <div className="md:hidden">
            <button className="px-3 py-2 rounded bg-pink-400 text-black font-semibold">Menu</button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-neutral-800 py-8 mt-12">
        <div className="container text-center text-sm text-neutral-400">© {new Date().getFullYear()} Emanuelle Silva — Desenvolvedora</div>
      </footer>
    </div>
  )
}
