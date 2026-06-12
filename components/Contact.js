import { useState } from 'react'
import emailjs from '@emailjs/browser'

const initialForm = {
  name: '',
  email: '',
  message: ''
}

export default function Contact(){
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  function handleChange(event){
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  async function handleSubmit(event){
    event.preventDefault()

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'O envio ainda precisa ser configurado no EmailJS.'
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'emanuellefernandes75@gmail.com'
        },
        publicKey
      )

      setForm(initialForm)
      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso. Obrigada pelo contato!'
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Não foi possível enviar agora. Tente novamente em instantes.'
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold">Contato</h2>
        <p className="text-neutral-400 mt-2">Vamos conversar sobre seu projeto ou oportunidade.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold">Email</h3>
            <p className="text-neutral-300 mt-2">emanuellefernandes75@gmail.com</p>
            <h3 className="mt-4 font-semibold">Telefone</h3>
            <p className="text-neutral-300 mt-2">(98) 99614-8534</p>
            <h3 className="mt-4 font-semibold">LinkedIn</h3>
            <p className="text-neutral-300 mt-2"><a href="https://linkedin.com/in/emanuellefernandes" className="text-pink-300">linkedin.com/in/emanuellefernandes</a></p>
          </div>
          <form className="card space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Nome"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-neutral-900/40 px-4 py-3 rounded"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-neutral-900/40 px-4 py-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-neutral-900/40 px-4 py-3 rounded h-32"
            />
            {status.message && (
              <p className={status.type === 'success' ? 'text-sm text-emerald-300' : 'text-sm text-red-300'}>
                {status.message}
              </p>
            )}
            <div>
              <button className="link-btn disabled:cursor-not-allowed disabled:opacity-60" disabled={isSending}>
                {isSending ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
