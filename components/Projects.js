import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'AR Face Filters',
    description: 'Aplicativo Android de realidade aumentada que aplica filtros faciais em tempo real, usando ARCore para rastreamento e OpenGL ES para renderização.',
    tags: ['Android','ARCore','OpenGL ES','Realidade Aumentada'],
    image: '/ProjetoA.jpeg',
    demo: '#',
    repo: 'https://github.com/batmanuu/ARFaceFilters'
  },
  {
    title: 'Salada Mania SLZ',
    description: 'Projeto web para saladas personalizadas, com interface responsiva e foco em experiência do usuário.',
    tags: ['React','UI','e-commerce'],
    image: '/ProjetoB.jpeg',
    demo: '#',
    repo: 'https://github.com/batmanuu/saladasmaniaslz'
  },
  {
    title: 'Restaurante dos Guarás',
    description: 'Site institucional ativo para restaurante, com layout responsivo, cardápio e informações de contato.',
    tags: ['Site Institucional','Restaurante','UX'],
    image: '/ProjetoC.png',
    demo: 'https://restaurantedosguaras.com.br/',
    repo: 'https://github.com/brennopacheco/restaurante-dos-guaras'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold">Projetos</h2>
        <p className="text-neutral-400 mt-2">Alguns trabalhos recentes com foco em design e performance.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p)=> (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
