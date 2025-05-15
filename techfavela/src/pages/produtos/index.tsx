import Layout from '../../components/Layout'
import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

// Dados mockados para exemplo
const produtos = [
  {
    id: 1,
    nome: 'Setup Gamer Pro',
    categoria: 'hardware',
    preco: 4999.90,
    imagem: '/images/produtos/setup-gamer.jpg',
    descricao: 'PC completo com RTX 3060, Ryzen 5 5600X, 16GB RAM'
  },
  {
    id: 2,
    nome: 'Mouse Gamer RGB',
    categoria: 'perifericos',
    preco: 129.90,
    imagem: '/images/produtos/mouse-gamer.jpg',
    descricao: 'Mouse RGB com 6 botões programáveis'
  },
  // Adicione mais produtos aqui
]

const categorias = [
  { id: 'todos', nome: 'Todos' },
  { id: 'hardware', nome: 'Hardware' },
  { id: 'perifericos', nome: 'Periféricos' },
  { id: 'promocoes', nome: 'Promoções' }
]

export default function Produtos() {
  const [categoriaAtual, setCategoriaAtual] = useState('todos')

  const produtosFiltrados = categoriaAtual === 'todos'
    ? produtos
    : produtos.filter(produto => produto.categoria === categoriaAtual)

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Nossos Produtos</h1>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categorias.map(categoria => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaAtual(categoria.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                categoriaAtual === categoria.id
                  ? 'bg-primary text-background'
                  : 'bg-surface text-text-primary hover:bg-surface/80'
              }`}
            >
              {categoria.nome}
            </button>
          ))}
        </div>

        {/* Lista de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {produtosFiltrados.map(produto => (
            <div key={produto.id} className="bg-surface rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{produto.nome}</h3>
                <p className="text-text-secondary mb-4">{produto.descricao}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    R$ {produto.preco.toFixed(2)}
                  </span>
                  <button
                    className="bg-primary text-background px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                    onClick={() => {
                      // Adicionar ao carrinho
                      console.log('Adicionar ao carrinho:', produto)
                    }}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
} 