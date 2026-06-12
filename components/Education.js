export default function Education(){
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold">Formação</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-semibold">Engenharia de Computação</h3>
            <div className="text-sm text-neutral-400 mt-1">Universidade Federal do Maranhão — 2019 - 2025</div>
            <p className="mt-2 text-neutral-300">Formação superior com foco em engenharia e aplicações computacionais.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Técnico em Informática para Internet</h3>
            <div className="text-sm text-neutral-400 mt-1">Instituto Federal do Maranhão — 2016 - 2018</div>
            <p className="mt-2 text-neutral-300">Formação técnica com ênfase em desenvolvimento web e tecnologias de internet.</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="card">
            <h3 className="font-semibold">Residência em TIC — UEMA / BRISA</h3>
            <div className="text-sm text-neutral-400 mt-1">2026 - Em andamento</div>
            <p className="mt-2 text-neutral-300">Projeto de residência em tecnologia com aplicação prática em Python, IA e desenvolvimento mobile.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
