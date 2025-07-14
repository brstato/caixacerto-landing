import logoImage from "../assets/logo_caixacerto.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src={logoImage} 
              alt="Logo CaixaCerto" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-4 max-w-md">
              O CaixaCerto é o software de gestão completo para barbearias e salões de beleza. 
              Simplifique sua rotina, automatize processos e impulsione o crescimento do seu negócio.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 CaixaCerto. Todos os direitos reservados.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-card-foreground mb-4">Produto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Funcionalidades</a></li>
              <li><a href="#precos" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors">Download</a></li>
              <li><a href="#atualizacoes" className="hover:text-primary transition-colors">Atualizações</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-card-foreground mb-4">Suporte</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#documentacao" className="hover:text-primary transition-colors">Documentação</a></li>
              <li><a href="#tutoriais" className="hover:text-primary transition-colors">Tutoriais</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Desenvolvido com ❤️ para barbeiros e empreendedores do setor de beleza
          </p>
        </div>
      </div>
    </footer>
  );
}

