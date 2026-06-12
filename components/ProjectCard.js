import { useState } from 'react'

function GithubReadmePreview({ repoUrl, onClose }){
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(null)
  const [error, setError] = useState(null)

  async function load(){
    if(!repoUrl || !repoUrl.includes('github.com')){
      setError('URL do repositório não é do GitHub')
      return
    }
    setLoading(true)
    try{
      // parse owner/repo
      const parts = repoUrl.replace('https://','').replace('http://','').split('/')
      const owner = parts[1]
      const repo = parts[2].replace(/\.git$/,'')
      const api = `https://api.github.com/repos/${owner}/${repo}/readme`
      const res = await fetch(api)
      if(!res.ok) throw new Error('Não foi possível buscar README')
      const data = await res.json()
      const text = atob(data.content.replace(/\n/g,''))
      setContent(text.slice(0, 1200))
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }

  // load on mount
  useState(()=>{ load() })

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-neutral-900 rounded-lg p-6 max-w-3xl w-full max-h-[80vh] overflow-auto">
        <button onClick={onClose} className="absolute top-3 right-3 text-neutral-400">Fechar</button>
        <h3 className="text-lg font-semibold mb-4">Pré-visualização do README</h3>
        {loading && <div className="text-neutral-400">Carregando...</div>}
        {error && <div className="text-red-400">{error}</div>}
        {content && <pre className="whitespace-pre-wrap text-sm text-neutral-200">{content}</pre>}
        <div className="mt-4 text-right">
          <a href={repoUrl} target="_blank" rel="noreferrer" className="link-btn">Abrir no GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default function ProjectCard({ project }){
  const [open, setOpen] = useState(false)

  return (
    <div className="project-card card p-4">
      <div className="h-44 bg-neutral-800 rounded-md mb-4 flex items-center justify-center overflow-hidden">
        <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
      </div>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-neutral-400 mt-2">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t)=> (
          <span key={t} className="text-xs px-2 py-1 rounded bg-neutral-800/60">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <button onClick={()=>setOpen(true)} className="px-3 py-2 rounded-lg bg-pink-500 text-white border border-pink-500 text-sm hover:bg-pink-600">Preview</button>
      </div>

      {open && <GithubReadmePreview repoUrl={project.repo} onClose={()=>setOpen(false)} />}
    </div>
  )
}
