const skills = [
  { name: 'Windows Server', pct: 90 },
  { name: 'Active Directory', pct: 88 },
  { name: 'VEEAM', pct: 80 },
  { name: 'SAP ECC/IM', pct: 75 },
  { name: 'Power BI', pct: 92 },
  { name: 'Excel Avançado', pct: 90 },
  { name: 'Python', pct: 70 },
  { name: 'SQL', pct: 72 },
  { name: 'React', pct: 65 },
  { name: 'Next.js', pct: 60 },
  { name: 'Tailwind CSS', pct: 68 },
  { name: 'Zabbix', pct: 60 },
  { name: 'Grafana', pct: 58 }
]

function ProgressBar({ pct }){
  return (
    <div className="w-full bg-neutral-900 rounded-full h-2 overflow-hidden">
      <div className="h-2 bg-pink-400" style={{ width: `${pct}%` }} />
    </div>
  )
}

export default function Skills(){
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold">Habilidades</h2>
        <p className="text-neutral-400 mt-2">Principais competências técnicas. Barra indica proficiência aproximada.</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((s)=> (
            <div key={s.name} className="bg-neutral-900/40 border border-neutral-800 rounded-lg p-3 text-left">
              <div className="font-semibold text-sm text-white">{s.name}</div>
              <div className="mt-2">
                <ProgressBar pct={s.pct} />
              </div>
              <div className="text-xs text-neutral-400 mt-2">{s.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
