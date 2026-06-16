export default function Certifications(){
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold">Cursos e Certificações</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-semibold">Residência em TIC - UEMA (Nivelamento em Computação)</h3>
            <div className="text-sm text-neutral-400 mt-1">180h</div>
          </div>
          <div className="card">
            <h3 className="font-semibold">Análise de Dados</h3>
            <div className="text-sm text-neutral-400 mt-1">UFMA — 210h</div>
          </div>
          <div className="card">
            <h3 className="font-semibold">Introdução à Cibersegurança</h3>
            <div className="text-sm text-neutral-400 mt-1">Cisco Networking Academy</div>
          </div>
          <div className="card">
            <h3 className="font-semibold">Hackers do Bem</h3>
            <div className="text-sm text-neutral-400 mt-1">Cursando</div>
          </div>
        </div>
      </div>
    </section>
  )
}
