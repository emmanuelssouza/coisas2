import Layout from '../../components/Layout'
import { Whatsapp } from 'lucide-react'

// Dados mockados para exemplo
const servicos = [
  {
    id: 1,
    nome: 'Formatação',
    preco: 79.90,
    descricao: 'Formatação completa do seu PC com instalação do Windows e drivers',
    tempo: '2-3 horas'
  },
  {
    id: 2,
    nome: 'Limpeza Profunda',
    preco: 99.90,
    descricao: 'Limpeza completa do seu PC com troca de pasta térmica',
    tempo: '1-2 horas'
  },
  {
    id: 3,
    nome: 'Montagem de PC',
    preco: 149.90,
    descricao: 'Montagem completa do seu PC com teste de todos os componentes',
    tempo: '3-4 horas'
  },
  {
    id: 4,
    nome: 'Upgrade de Hardware',
    preco: 'A partir de R$ 49,90',
    descricao: 'Instalação de novos componentes com teste de compatibilidade',
    tempo: '1-2 horas'
  }
]

export default function Servicos() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Nossos Serviços</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicos.map(servico => (
            <div key={servico.id} className="bg-surface rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{servico.nome}</h3>
                  <p className="text-text-secondary">{servico.descricao}</p>
                </div>
                <span className="text-2xl font-bold text-primary">
                  {typeof servico.preco === 'string' ? servico.preco : `R$ ${servico.preco.toFixed(2)}`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">
                  Tempo estimado: {servico.tempo}
                </span>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-background px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <Whatsapp className="h-5 w-5" />
                  Agendar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Garantia */}
        <div className="mt-16 bg-surface rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Nossa Garantia</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Todos os nossos serviços possuem garantia de 30 dias. Se algo não
            funcionar como esperado, traz seu PC de volta que a gente resolve!
          </p>
        </div>
      </div>
    </Layout>
  )
} 