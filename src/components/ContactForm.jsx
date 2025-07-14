import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactForm() {
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
            Precisa de Ajuda ou Tem 
            <span className="text-primary"> Dúvidas?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe está pronta para te ajudar! Entre em contato conosco para mais 
            informações ou suporte técnico.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-full">
                  <Mail className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Email</h3>
                  <p className="text-muted-foreground">brunnoribeiroangra21@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-full">
                  <Phone className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Telefone</h3>
                  <p className="text-muted-foreground">(24) 9 9856-4421</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-full">
                  <MessageCircle className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Suporte</h3>
                  <p className="text-muted-foreground">Atendimento de segunda a sexta, 8h às 18h</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg mb-4 text-card-foreground">
                Por que escolher o CaixaCerto?
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Interface intuitiva e fácil de usar</li>
                <li>✓ Suporte técnico especializado</li>
                <li>✓ Atualizações regulares e melhorias</li>
                <li>✓ Dados seguros e protegidos</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

