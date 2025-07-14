# Landing Page CaixaCerto - React

## 🎯 Descrição
Landing page moderna e dinâmica para o aplicativo desktop "CaixaCerto", desenvolvida em React com design alinhado à identidade visual fornecida. Focada em gestão de barbearias e estabelecimentos congêneres, destacando as principais funcionalidades e benefícios do software.

## ✨ Características
- **Design Moderno**: Interface alinhada com a identidade visual do CaixaCerto
- **Responsivo**: Funciona perfeitamente em desktop e dispositivos móveis
- **SEO Otimizado**: Meta tags completas, Schema markup e estrutura semântica
- **Animações Suaves**: Transições e efeitos visuais com Framer Motion
- **Performance**: Carregamento rápido e otimizado

## 🚀 Tecnologias Utilizadas
- **React 18**: Framework principal
- **Tailwind CSS**: Estilização e design system
- **shadcn/ui**: Componentes de interface
- **Framer Motion**: Animações e transições
- **Lucide Icons**: Ícones modernos
- **Vite**: Bundler e servidor de desenvolvimento

## 📁 Estrutura do Projeto
```
caixacerto-landing/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos estáticos
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes shadcn/ui
│   │   ├── HeroSection.jsx
│   │   ├── ProblemSolution.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CallToAction.jsx
│   │   ├── FAQ.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilitários
│   ├── App.css           # Estilos principais
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada
├── index.html            # HTML base com SEO
├── package.json          # Dependências
└── vite.config.js        # Configuração Vite
```

## 🎨 Design e Identidade Visual
- **Paleta de Cores**: Fundo escuro com destaques em laranja (#FF6600)
- **Tipografia**: Fontes modernas sans-serif
- **Layout**: Estrutura de funil de vendas bem definida
- **Gradientes**: Efeitos visuais em seções específicas
- **Ícones**: Personalizados e alinhados com a marca

## 📱 Seções da Landing Page
1. **Hero Section**: Título impactante, logo e CTA principal
2. **Problema/Solução**: Apresentação dos desafios e como o CaixaCerto resolve
3. **Funcionalidades**: Cards detalhados das principais funcionalidades
4. **Depoimentos**: Prova social com depoimentos de clientes
5. **CTA Final**: Chamada para ação principal
6. **FAQ**: Perguntas frequentes
7. **Contato**: Formulário de contato e informações
8. **Footer**: Links e informações da empresa

## 🔧 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o projeto
cd caixacerto-landing

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm run dev

# Acesse http://localhost:5173
```

### Build para Produção
```bash
# Gere os arquivos otimizados
pnpm run build

# Preview da build
pnpm run preview
```

## 🌐 Deploy
O projeto está pronto para deploy em qualquer plataforma:
- **Vercel**: Deploy automático via Git
- **Netlify**: Drag & drop da pasta `dist`
- **GitHub Pages**: Via GitHub Actions
- **Servidor próprio**: Upload da pasta `dist`

## 📊 SEO e Performance
- ✅ Meta tags completas (description, keywords, Open Graph, Twitter Cards)
- ✅ Schema markup para software implementado
- ✅ Título otimizado para SEO
- ✅ Estrutura semântica HTML5
- ✅ Imagens otimizadas
- ✅ Carregamento rápido

## 🎯 Funcionalidades Destacadas
- **Controle Financeiro**: Comissões, faturamento, contas a pagar
- **Gestão de Clientes**: Análise de consumo, clientes inativos
- **Integração WhatsApp**: Mensagens em massa, agradecimentos
- **Controle de Pacotes**: Acompanhamento de serviços
- **Agenda Fácil**: Lembretes automáticos
- **Design Simples**: Interface intuitiva

## 🔄 Customização
O projeto foi desenvolvido com flexibilidade para customizações:
- Cores facilmente alteráveis via CSS variables
- Componentes modulares e reutilizáveis
- Conteúdo editável nos componentes
- Imagens substituíveis na pasta `assets`

## 📞 Suporte
Para dúvidas ou suporte técnico:
- Email: contato@caixacerto.com.br
- Documentação: Consulte os comentários no código

## 📄 Licença
Projeto desenvolvido para o CaixaCerto. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para barbeiros e empreendedores do setor de beleza**

