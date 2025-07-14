import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "O CaixaCerto ajudou muito na gestão da minha barbearia! A integração com o WhatsApp é TOP!!! me ajuda a manter meus clientes sempre engajados. Recomendo a todos os barbeiros que buscam eficiência!",
      author: "Maicon Jesus",
      role: "Proprietário da Barbearia TROPA"
    },
    {
      text: "Na verdade eu tenho um estúdio de tatuagem, mas com o CaixaCerto, consegui organizar minha agenda e nunca mais perdi um cliente por esquecimento. Os lembretes automáticos são um diferencial enorme.",
      author: "Elza Ribeiro",
      role: "Socia do estúdio Bruno Tattoo"
    },
    {
      text: "A funcionalidade de controle de pacotes de serviços é fantástica! Meus clientes adoram acompanhar o que já usaram e o que ainda têm disponível.",
      author: "Carlos Santos",
      role: "Barbeiro e Empreendedor"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            O que nossos clientes dizem sobre o 
            <span className="text-primary"> CaixaCerto</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <Quote className="text-primary w-8 h-8" />
                  </div>
                  
                  <blockquote className="text-card-foreground leading-relaxed mb-6 flex-grow italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-primary text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
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

