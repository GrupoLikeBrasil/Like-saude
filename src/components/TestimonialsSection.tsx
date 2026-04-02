const testimonials = [
  {
    text: "Os produtos da LIKE BRASIL mudaram minha rotina de saúde. A qualidade é impressionante e os resultados são visíveis!",
    name: "Carla Mendes",
    role: "Cliente há 1 ano",
    initial: "C",
  },
  {
    text: "Em 6 meses como empreendedor LIKE, já consigo uma renda extra de R$ 5.000/mês. A oportunidade é real!",
    name: "Ricardo Oliveira",
    role: "Empreendedor há 6 meses",
    initial: "R",
  },
  {
    text: "A linha nutricional é fantástica e o suporte da equipe é incrível. Recomendo para todos que buscam qualidade de vida.",
    name: "Fernanda Lima",
    role: "Cliente e empreendedora",
    initial: "F",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Depoimentos e Resultados</h2>
      <p className="text-center text-muted-foreground mb-12">Veja o que nossos clientes e empreendedores falam sobre a LIKE BRASIL</p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-6 shadow-sm">
            <p className="text-foreground/80 mb-6 leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                {t.initial}
              </div>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
