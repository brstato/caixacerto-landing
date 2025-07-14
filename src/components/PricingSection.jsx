import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check, Star, Zap } from "lucide-react";
import DownloadButton from "./DownloadButton";

export default function PricingSection() {
  return (
    <section id="price" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
            <Zap className="mr-2" size={18} />
            <span className="font-semibold">Promoção de Lançamento</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Nosso plano
            <br />
            <span className="text-primary">inclui 30 dias grátis! </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="hidden md:block"></div>  
          {/* Plano Profissional (Destacado) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative"
          >
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 rounded-bl-lg">
              <div className="flex items-center">
                <Star className="mr-1" size={16} />
                <span>Mais Popular</span>
              </div>
            </div>
            
            <div className="h-full bg-gradient-to-br from-primary/30 to-purple-700/30 backdrop-blur-lg border border-primary/50 rounded-2xl overflow-hidden shadow-xl shadow-primary/30">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">Profissional</h3>
                <div className="flex flex-col items-center mb-4">
                    <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-white">R$ 49,90</span>
                        <span className="text-gray-300 ml-1">/mês</span>
                    </div>
                      <div className="mt-1 text-sm text-gray-300 line-through">
                        R$ 129,90
                    </div>
                </div>
                <p className="text-gray-300 mb-6">Para barbearias e salões em crescimento</p>
                
                <DownloadButton 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white mb-8 shadow-lg shadow-primary/30"
                >
                  Experimente Grátis
                </DownloadButton>
                
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <Check className="text-yellow-300 mr-2 mt-1" size={18} />
                    <span className="text-white font-medium">Controle financeiro completo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-yellow-300 mr-2 mt-1" size={18} />
                    <span className="text-white font-medium">Gestão ilimitada de profissionais</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-yellow-300 mr-2 mt-1" size={18} />
                    <span className="text-white font-medium">Agendamento com lembretes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-yellow-300 mr-2 mt-1" size={18} />
                    <span className="text-white font-medium">Integração com WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-yellow-300 mr-2 mt-1" size={18} />
                    <span className="text-white font-medium">Controle de pacotes de serviços</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <div className="hidden md:block"></div>
        </div>

        {/* Promo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Promoção de Lançamento!</h3>
              <p className="text-white/90">Baixe hoje e ganhe 30 dias grátis + suporte premium.</p>
            </div>
            <DownloadButton 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Aproveite a Oferta
            </DownloadButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}