import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";

const WHATSAPP_NUMBER = "5521978591905";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web.");

export function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Shader Animation Background */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm text-accent text-sm font-medium animate-fade-up">
              Desenvolvimento Web Profissional
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight animate-fade-up animation-delay-100">
              Transformamos suas{" "}
              <span className="text-gradient">ideias</span> em{" "}
              <span className="text-gradient">resultados</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-up animation-delay-200">
              Sites e landing pages que convertem visitantes em clientes. 
              Design moderno, performance otimizada e foco em resultados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#portfolio">
                Ver Portfólio
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-4 animate-fade-up animation-delay-400">
            <div>
              <p className="text-3xl font-display font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Projetos Entregues</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <p className="text-3xl font-display font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block"></div>
            <div className="hidden sm:block">
              <p className="text-3xl font-display font-bold text-foreground">5★</p>
              <p className="text-sm text-muted-foreground">Avaliação Média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
