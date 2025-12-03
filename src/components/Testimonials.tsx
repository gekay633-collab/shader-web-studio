import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO, Boutique Elegance",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "A equipe entregou um e-commerce incrível que superou todas as expectativas. As vendas aumentaram 150% no primeiro mês após o lançamento.",
    rating: 5,
  },
  {
    name: "Dr. Carlos Santos",
    role: "Advogado",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content: "Profissionalismo do início ao fim. O site ficou elegante e já recebo contatos de novos clientes através dele. Recomendo fortemente!",
    rating: 5,
  },
  {
    name: "Ana Ferreira",
    role: "Fundadora, TechStart",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content: "A landing page que criaram para nosso produto foi fundamental para a captação de leads. Design moderno e conversão excelente.",
    rating: 5,
  },
  {
    name: "Roberto Lima",
    role: "Proprietário, Restaurante Sabor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "O site com cardápio digital revolucionou nosso atendimento. Clientes elogiam a facilidade de ver os pratos e fazer reservas online.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que nossos{" "}
            <span className="text-gradient">clientes dizem</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-accent/20" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent/30"
                  />
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="p-3 rounded-full bg-muted hover:bg-accent/20 transition-colors"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={next}
                    className="p-3 rounded-full bg-muted hover:bg-accent/20 transition-colors"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-6 bg-accent" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
