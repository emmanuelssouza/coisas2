# TechFavela - Site Institucional

Site institucional da TechFavela, uma loja de informática focada em produtos e serviços de qualidade para a periferia.

## Tecnologias Utilizadas

- Next.js 13
- TypeScript
- Tailwind CSS
- Lucide Icons

## Requisitos

- Node.js 16.8 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/techfavela.git
cd techfavela
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Instale as dependências adicionais:

```bash
npm install @tailwindcss/aspect-ratio lucide-react
# ou
yarn add @tailwindcss/aspect-ratio lucide-react
```

4. Configure as variáveis de ambiente:

```bash
cp .env.example .env.local
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O site estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
techfavela/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas do site
│   ├── styles/        # Estilos globais e tema
│   └── utils/         # Funções utilitárias
├── public/            # Arquivos estáticos
└── ...
```

## Funcionalidades

- Design responsivo
- Tema escuro com detalhes em neon
- Páginas:
  - Home
  - Produtos
  - Serviços
  - Sobre
  - Contato
- Integração com WhatsApp
- Formulário de contato
- Carrinho de compras (em desenvolvimento)

## Personalização

### Cores

As cores do tema podem ser alteradas no arquivo `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#00FF9D',
      secondary: '#FF00FF',
      // ...
    }
  }
}
```

### Imagens

Substitua as imagens na pasta `public/images/`:

- `hero-bg.jpg` - Banner principal
- `sobre-bg.jpg` - Banner da página Sobre
- `produtos/` - Imagens dos produtos
- `equipe/` - Fotos da equipe

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
