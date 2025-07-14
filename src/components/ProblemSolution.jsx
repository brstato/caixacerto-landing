import { motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    "Perda de controle financeiro e comissões imprecisas",
    "Dificuldade em identificar clientes fiéis e inativos",
    "Problemas na comunicação com clientes sobre agendamentos",
    "Desperdício de tempo com tarefas manuais e repetitivas",
    "Dificuldade em analisar o desempenho do negócio"
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            Você Conhece os Desafios da Gestão de 
            <span className="text-primary"> Barbearias e Salões?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Gerenciar uma barbearia ou salão de beleza pode ser complexo. Lidar com agendamentos, 
            controlar comissões de profissionais, acompanhar o faturamento, gerenciar contas a pagar 
            e manter o relacionamento com clientes exige tempo e organização. Muitos empreendedores 
            se veem presos em tarefas administrativas, perdendo o foco no que realmente importa: 
            o crescimento do negócio e a satisfação do cliente.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border"
              >
                <X className="text-destructive mt-1 flex-shrink-0" size={20} />
                <p className="text-card-foreground">{problem}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-primary">A Solução Definitiva:</span>
            <br />
            CaixaCerto - O sistema de Gestão para Barbearias e Salões
          </h3>
          
          <div className="bg-card p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="text-primary mr-3" size={32} />
              <span className="text-2xl font-semibold text-card-foreground">Solução Completa</span>
            </div>
            
            <p className="text-lg text-card-foreground leading-relaxed">
              O CaixaCerto foi desenvolvido pensando nas necessidades específicas de barbearias e 
              salões. Nosso <strong className="text-primary">sistema</strong> simplifica sua rotina, 
              automatiza processos e oferece as ferramentas que você precisa para ter total controle 
              do seu negócio, desde o <strong className="text-primary">controle financeiro</strong>{" "}
              até a <strong className="text-primary">agenda</strong> e o relacionamento com o cliente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

