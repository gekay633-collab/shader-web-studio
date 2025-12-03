import { Globe, Zap, ShoppingCart, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites institucionais modernos e responsivos que transmitem profissionalismo e credibilidade para sua marca.",
  },
  {
    icon: Zap,
    title: "Landing Pages de Conversão",
    description: "Páginas otimizadas para captar leads e converter visitantes em clientes com design persuasivo.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas virtuais completas com gestão de produtos, pagamentos integrados e experiência de compra otimizada.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Suporte contínuo, atualizações de segurança e melhorias para manter seu site sempre no ar e funcionando.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluções completas para sua{" "}
            <span className="text-gradient">presença digital</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Do conceito à entrega, cuidamos de cada detalhe para garantir que seu projeto seja um sucesso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-6 lg:p-8 hover:border-accent/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
