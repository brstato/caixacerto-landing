import { Button } from "./ui/button";
import { motion } from "framer-motion";
import heroImage from "/screenshot.png";
import logoImage from "/caixacerto_logo.png";
import DownloadButton from "./DownloadButton"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0"
        style={{          
          backgroundSize: '60% auto',
          backgroundPosition: 'left center',
          backgroundRepeat: "no-repeat",
          backgroundImage: `      
            linear-gradient(
            to left,
            rgba(31, 31, 31, 0.69) 0%,
            rgba(66, 66, 66, 0.7) 30%,
            rgba(99, 99, 99, 0.4) 70%,
            transparent 100%), url(${heroImage})`,          
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50"/>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={logoImage} 
            alt="Logo CaixaCerto" 
            className="mx-auto mb-8 h-20 w-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          CaixaCerto: A Gestão Inteligente
          <br />
          <span className="text-primary">para sua Barbearia ou Salão</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
        >
          O sistema completo para impulsionar o crescimento do seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <DownloadButton 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Baixe Agora e Experimente Grátis!
          </DownloadButton>
          
          <p className="text-sm text-gray-300">
            Compatível com Windows. Suporte Gratuito por 30 dias!
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

