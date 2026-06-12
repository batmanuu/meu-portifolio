export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">Sobre Mim</h2>
            <p className="mt-4 text-neutral-300">Engenheira de Computação com experiência em infraestrutura de TI, ambientes corporativos críticos, monitoramento, Power BI e melhoria operacional. Atuação em ambiente operacional industrial, garantindo disponibilidade e confiabilidade de sistemas de TI e automação.</p>
            <ul className="mt-4 text-neutral-300 list-disc pl-5 space-y-2">
              <li>Suporte e operação de sistemas críticos, SAP ECC/IM e VEEAM</li>
              <li>Dashboards e análise de dados com Power BI</li>
              <li>Automação, integração de soluções e melhoria contínua (Kaizen, 5S)</li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <div className="card">
              <h3 className="font-semibold">Resumo</h3>
              <p className="mt-2 text-neutral-300">Atuação em garantia de continuidade operacional, suporte técnico e desenvolvimento de soluções para otimizar processos e indicadores de desempenho.</p>
              <div className="mt-4">
                <a href="#contact" className="link-btn">Contrate-me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
