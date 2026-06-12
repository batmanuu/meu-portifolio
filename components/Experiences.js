export default function Experiences(){
  const timeline = [
    { period: '2024 - 2026', title: 'Analista de Tecnologia da Informação', company: 'ADECCO (VALE S.A.)' },
    { period: '2022 - 2024', title: 'Estágio em Infraestrutura de TI', company: 'VALE S.A.' },
    { period: '2022', title: 'Estágio em Suporte de Informática', company: 'Defensoria Pública' }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold">Experiências</h2>

        <div className="mt-12">
          <div className="relative py-10">
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto py-6 px-2 items-start">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="min-w-[260px] flex-shrink-0 flex flex-col items-start">
                      <div className="text-sm text-neutral-400">{item.period}</div>
                      <div className="font-semibold text-white mt-1">{item.title}</div>
                      <div className="text-neutral-400 text-sm mt-1">{item.company}</div>
                    </div>

                    {idx < timeline.length - 1 && (
                      <div className="flex items-start">
                        <div className="w-px h-16 md:h-20 bg-pink-400 mx-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
