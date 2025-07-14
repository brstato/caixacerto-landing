import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Smartphone, Globe, CalendarCheck } from "lucide-react";

export default function UpcomingFeatures() {
  const features = [
    {
      icon: Smartphone,
      title: "Aplicativo Mobile",
      description: "Tenha as principais funcionalidades do CaixaCerto na palma da sua mão, com um aplicativo mobile intuitivo. Gerencie sua barbearia de qualquer lugar!",
      status: "Em Breve"
    },
    {
      icon: Globe,
      title: "Landing Page do Estabelecimento",
      description: "Tenha uma landing page profissional para sua barbearia ou salão, melhore seu posicionamento na internet e não fique refém de redes sociais.",
      status: "Em Breve"
    },
    {
      icon: CalendarCheck,
      title: "Agendamento Simplificado Online",
      description: "Ofereça aos seus clientes a facilidade de agendar serviços diretamente pelo seu site, de forma rápida e intuitiva. Reduza faltas e otimize sua agenda!",
      status: "Em Breve"
    }
  ];

  return (
    <section id="upcoming" className="py-20 bg-gradient-to-br from-gray-900 via-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Novos Recursos 
            <span className="text-primary"> Chegando em Breve!</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Estamos sempre inovando para oferecer as melhores ferramentas para a gestão da seu negócio. 
            Confira o que está por vir no CaixaCerto:
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
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8 text-center h-full flex flex-col items-center justify-center">
                  <div className="mb-6">
                    <feature.icon className="text-primary w-16 h-16 mx-auto" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed flex-grow text-center">
                    {feature.description}
                  </p>
                  
                  <span className="mt-4 inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                    {feature.status}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

