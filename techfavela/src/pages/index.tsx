import Layout from '../components/Layout'
import Link from 'next/link'
import { ArrowRight, ShoppingCart, Wrench } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero-bg.jpg")',
          }}
        />
        <div className="relative z-20 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Seu PC turbinado começa aqui
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8">
            Produtos de qualidade e serviços especializados para sua máquina
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/produtos"
              className="bg-primary text-background px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Ver Produtos
            </Link>
            <Link
              href="/servicos"
              className="bg-surface text-primary border border-primary px-8 py-3 rounded-lg font-medium hover:bg-surface/90 transition-colors flex items-center justify-center gap-2"
            >
              <Wrench className="h-5 w-5" />
              Nossos Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Destaques da Semana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Produto em Destaque */}
            <div className="bg-surface rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Setup Gamer Pro</h3>
                <p className="text-text-secondary mb-4">
                  PC completo com RTX 3060, Ryzen 5 5600X, 16GB RAM
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    R$ 4.999,00
                  </span>
                  <Link
                    href="/produtos/setup-gamer-pro"
                    className="text-primary hover:text-primary/80 flex items-center gap-2"
                  >
                    Ver mais
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Serviço em Destaque */}
            <div className="bg-surface rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Limpeza Profunda</h3>
                <p className="text-text-secondary mb-4">
                  Limpeza completa do seu PC com troca de pasta térmica
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    R$ 99,90
                  </span>
                  <Link
                    href="/servicos/limpeza-profunda"
                    className="text-primary hover:text-primary/80 flex items-center gap-2"
                  >
                    Ver mais
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Promoção */}
            <div className="bg-surface rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mouse Gamer</h3>
                <p className="text-text-secondary mb-4">
                  Mouse RGB com 6 botões programáveis
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    R$ 129,90
                  </span>
                  <Link
                    href="/produtos/mouse-gamer"
                    className="text-primary hover:text-primary/80 flex items-center gap-2"
                  >
                    Ver mais
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 