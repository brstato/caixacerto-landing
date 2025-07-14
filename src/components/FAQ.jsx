import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "O CaixaCerto é compatível com qual sistema operacional?",
      answer: "O CaixaCerto é um aplicativo desktop desenvolvido para Windows, compatível com as versões mais recentes do sistema operacional."
    },
    {
      question: "Como funciona o suporte gratuito?",
      answer: "Oferecemos 30 dias de suporte gratuito para novos usuários, para auxiliar na instalação, configuração inicial e tirar dúvidas sobre as funcionalidades do software. Após esse período, você pode optar pelo nosso plano de suporte."
    },
    {
      question: "O CaixaCerto é adequado para pequenos e grandes estabelecimentos?",
      answer: "Sim, o CaixaCerto foi projetado para atender desde pequenos salões e barbearias até estabelecimentos maiores, com múltiplas estações e profissionais. Sua flexibilidade e escalabilidade o tornam ideal para diversos portes de negócio."
    },
    {
      question: "Como funciona a integração com WhatsApp?",
      answer: "A integração permite enviar mensagens automáticas para seus clientes, incluindo lembretes de agendamento, promoções e agradecimentos. É uma ferramenta poderosa para manter o relacionamento com a clientela e aumentar o engajamento."
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            Perguntas 
            <span className="text-primary"> Frequentes</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o CaixaCerto e descubra como ele pode transformar 
            a gestão da sua barbearia ou salão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-card-foreground">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

