import Layout from '../../components/Layout'
import { Users, Award, Heart } from 'lucide-react'

export default function Sobre() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative h-[400px] flex items-center justify-center text-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/sobre-bg.jpg")',
            }}
          />
          <div className="relative z-20 max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TechFavela: Tecnologia na Quebrada
            </h1>
            <p className="text-xl text-text-secondary">
              Levando tecnologia de qualidade para a periferia
            </p>
          </div>
        </div>

        {/* Nossa História */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Nossa História</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-text-secondary mb-4">
                A TechFavela nasceu da paixão por tecnologia e do desejo de
                democratizar o acesso a produtos e serviços de qualidade na
                periferia. Começamos pequenos, mas com um grande sonho: trazer
                tecnologia de ponta para a quebrada.
              </p>
              <p className="text-text-secondary">
                Hoje, somos referência em montagem de PCs, manutenção e venda de
                produtos de informática na região. Nossa missão é continuar
                crescendo e levando tecnologia de qualidade para todos.
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg" />
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-6 rounded-lg text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Comunidade</h3>
              <p className="text-text-secondary">
                Acreditamos no poder da comunidade e trabalhamos para fortalecer
                a nossa região através da tecnologia.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Qualidade</h3>
              <p className="text-text-secondary">
                Oferecemos produtos e serviços de alta qualidade, com garantia e
                suporte completo.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Paixão</h3>
              <p className="text-text-secondary">
                Amamos o que fazemos e isso se reflete em cada atendimento e
                serviço que prestamos.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-6 rounded-lg text-center">
              <div className="aspect-w-1 aspect-h-1 bg-gray-800 rounded-full mb-4" />
              <h3 className="text-xl font-bold mb-2">João Silva</h3>
              <p className="text-text-secondary">Fundador e Técnico</p>
            </div>
            <div className="bg-surface p-6 rounded-lg text-center">
              <div className="aspect-w-1 aspect-h-1 bg-gray-800 rounded-full mb-4" />
              <h3 className="text-xl font-bold mb-2">Maria Santos</h3>
              <p className="text-text-secondary">Atendimento</p>
            </div>
            <div className="bg-surface p-6 rounded-lg text-center">
              <div className="aspect-w-1 aspect-h-1 bg-gray-800 rounded-full mb-4" />
              <h3 className="text-xl font-bold mb-2">Pedro Oliveira</h3>
              <p className="text-text-secondary">Técnico Especialista</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
} 