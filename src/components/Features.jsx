import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import financeIcon from "/finance_icon.png";
import clientsIcon from "/clients_icon.png";
import whatsappIcon from "/whatsapp_icon.png";
import packagesIcon from "/packages_icon.png";
import calendarIcon from "/calendar_icon.png";
import designIcon from "/design_icon.png";

export default function Features() {
  const features = [
    {
      icon: financeIcon,
      title: "Controle Financeiro Completo",
      description: "Tenha total visibilidade das finanças do seu estabelecimento. Gerencie comissões dos profissionais de forma transparente, acompanhe o faturamento do estabelecimento em tempo real e organize suas contas a pagar para evitar surpresas. Relatórios detalhados com insights da nossa IA ajudam na tomada de decisões estratégicas."
    },
    {
      icon: clientsIcon,
      title: "Gestão Inteligente de Clientes",
      description: "Conheça seus clientes como nunca antes. Identifique os clientes que mais consumiram, crie campanhas personalizadas para aqueles que não comparecem há bastante tempo e acesse o histórico completo de serviços e preferências. Fidelize sua clientela com um atendimento personalizado."
    },
    {
      icon: whatsappIcon,
      title: "Integração Poderosa com WhatsApp",
      description: "Comunique-se de forma eficiente e automatizada. Envie mensagens em massa com ofertas exclusivas, personalize mensagens de agradecimento no recebimento de pagamentos e mantenha seus clientes engajados. Aumente seu alcance e suas vendas com o poder do WhatsApp."
    },
    {
      icon: packagesIcon,
      title: "Controle de Pacotes de Serviços",
      description: "Ofereça pacotes de serviços e gerencie-os com facilidade. Envie para os clientes os serviços consumidos e a quantidade ainda disponível no pacote, garantindo transparência e incentivando a recompra. Uma excelente forma de aumentar o ticket médio, a fidelidade e a recorrência."
    },
    {
      icon: calendarIcon,
      title: "Agenda Fácil com Lembretes Automáticos",
      description: "Organize sua rotina de agendamentos sem complicações. Nossa agenda fácil permite que você gerencie horários, profissionais e serviços de forma intuitiva. Envie lembretes para os clientes com o serviço marcado e o profissional marcado, reduzindo faltas e otimizando o tempo da sua equipe."
    },
    {
      icon: designIcon,
      title: "Design Simples e de Fácil Uso",
      description: "Acreditamos que a tecnologia deve ser acessível a todos. O CaixaCerto possui um design simples e de fácil uso, com uma interface intuitiva que não exige conhecimento técnico avançado. Comece a usar em minutos e sinta a diferença na sua produtividade."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Funcionalidades que transformam a gestão do seu 
            <span className="text-primary"> negócio</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
            O CaixaCerto oferece um conjunto robusto de ferramentas projetadas para otimizar cada 
            aspecto da sua operação. Descubra como nosso{" "}
            <strong className="text-primary">sistema</strong> pode revolucionar seu dia a dia:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-6">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-16 h-16 mx-auto"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-200 leading-relaxed flex-grow text-left">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

