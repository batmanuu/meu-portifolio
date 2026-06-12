export default function Hero(){
  return (
    <section id="home" className="section">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Olá, eu sou <span className="text-pink-400">Emanuelle Silva</span></h1>
          <p className="mt-6 text-neutral-300 max-w-2xl">Sou apaixonada por tecnologia, desafios e aprendizado constante. Gosto de trabalhar com pessoas, resolver problemas e contribuir para que sistemas e processos funcionem de forma cada vez mais eficiente.</p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="link-btn">Ver Projetos</a>
            <a href="#contact" className="px-4 py-2 rounded-lg border border-neutral-700 text-sm">Contato</a>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="w-56 h-56 rounded-2xl overflow-hidden project-card animate-float shadow-xl">
            <img src="/emanuelle.jpeg" alt="Emanuelle" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
