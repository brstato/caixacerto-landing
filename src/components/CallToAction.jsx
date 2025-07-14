import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, Shield, Clock } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-orange-600">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Pronto para Transformar a Gestão da sua 
            <br />
            <span className="text-yellow-200">Barbearia ou Salão?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Não perca mais tempo com planilhas e processos manuais. O CaixaCerto é a ferramenta 
            que você precisa para otimizar sua gestão, aumentar sua produtividade e impulsionar 
            o sucesso do seu negócio. Baixe agora e descubra como é fácil ter total controle!
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-3" size={24} />
              Baixe o CaixaCerto e Experimente Grátis!
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 text-white/90"
            >
              <Shield size={20} />
              <span className="text-sm">Compatível com Windows</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 text-white/90"
            >
              <Clock size={20} />
              <span className="text-sm">Suporte Gratuito por 30 dias</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 text-white/90"
            >
              <Download size={20} />
              <span className="text-sm">Instalação rápida e fácil</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

