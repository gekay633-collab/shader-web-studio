import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce de Moda",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop",
  },
  {
    title: "Site Advocacia",
    category: "Site Institucional",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  },
  {
    title: "Landing Page SaaS",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Clínica Odontológica",
    category: "Site Institucional",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
  },
  {
    title: "Restaurante Gourmet",
    category: "Site + Cardápio",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  },
  {
    title: "Imobiliária Premium",
    category: "Site + CRM",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projetos que{" "}
            <span className="text-gradient">entregamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Confira alguns dos trabalhos que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden border border-border/50 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`Projeto ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-accent text-sm font-medium">{project.category}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4" />
                  </h3>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-accent text-sm font-medium">{project.category}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
