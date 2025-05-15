import Link from 'next/link'
import { ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-surface border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            TechFavela
          </Link>

          {/* Menu Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/produtos" className="hover:text-primary transition-colors">
              Produtos
            </Link>
            <Link href="/servicos" className="hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="/sobre" className="hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          <Link href="/carrinho" className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-primary text-background rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          </Link>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link href="/produtos" className="block hover:text-primary transition-colors">
              Produtos
            </Link>
            <Link href="/servicos" className="block hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="/sobre" className="block hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="block hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
} 