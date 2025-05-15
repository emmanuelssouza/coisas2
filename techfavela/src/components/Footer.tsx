import Link from 'next/link'
import { Facebook, Instagram, Whatsapp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">TechFavela</h3>
            <p className="text-text-secondary">
              Sua loja de tecnologia na quebrada. Produtos de qualidade e serviços
              especializados para seu PC.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos" className="text-text-secondary hover:text-primary">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-text-secondary hover:text-primary">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-text-secondary hover:text-primary">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-text-secondary hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Contato</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Email: contato@techfavela.com.br</li>
              <li>Endereço: Rua da Quebrada, 123</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com/techfavela"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/techfavela"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary"
              >
                <Whatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} TechFavela. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 