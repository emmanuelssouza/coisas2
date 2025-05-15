import Layout from '../../components/Layout'
import { useState } from 'react'
import { Mail, Phone, MapPin, Whatsapp } from 'lucide-react'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar o envio do formulário
    console.log('Formulário enviado:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Entre em Contato</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="bg-surface p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-gray-700 focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-gray-700 focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-gray-700 focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-surface p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-text-secondary">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-text-secondary">contato@techfavela.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-text-secondary">
                      Rua da Quebrada, 123<br />
                      São Paulo - SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-surface p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Atendimento via WhatsApp</h2>
              <p className="text-text-secondary mb-4">
                Prefere falar diretamente com a gente? Chama no WhatsApp que
                respondemos na hora!
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Whatsapp className="h-6 w-6" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 