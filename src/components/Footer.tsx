import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5521978591905";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web.");

export function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <footer id="contato" className="py-16 lg:py-24 bg-card/50 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">&lt;/&gt;</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">DevStudio</span>
            </div>
            <p className="text-muted-foreground">
              Transformamos ideias em experiências digitais memoráveis que geram resultados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-muted-foreground hover:text-accent transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                yagocorrea633@gmail.com
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                (21) 97859-1905
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                Rio de janeiro, RJ
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Vamos Conversar?</h4>
            <p className="text-muted-foreground mb-4">
              Entre em contato e receba um orçamento personalizado para seu projeto.
            </p>
            <Button asChild variant="whatsapp" className="w-full">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevStudio. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido com ❤️por Yago Corrêa
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-whatsapp-foreground" />
      </a>
    </footer>
  );
}
