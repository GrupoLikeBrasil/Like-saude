const testimonials = [
  {
    text: "Passar a priorizar pequenos rituais de autocuidado mudou minha sensação de disposição no dia a dia. A proposta de equilíbrio fez sentido para mim.",
    name: "Carla Mendes",
    role: "Foco em bem-estar",
    initial: "C",
  },
  {
    text: "Busquei mais leveza na rotina e encontrei no conceito LIKE SAÚDE um jeito de olhar para saúde de forma mais integral, sem pressa e com constância.",
    name: "Ricardo Oliveira",
    role: "Rotina mais consciente",
    initial: "R",
  },
  {
    text: "Valorizar presença e qualidade de vida deixou de ser algo distante. Hoje consigo conectar corpo e mente com hábitos simples que mantenho.",
    name: "Fernanda Lima",
    role: "Autocuidado no cotidiano",
    initial: "F",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Histórias de bem-estar</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Relatos de quem busca mais equilíbrio, leveza e qualidade de vida na rotina.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-6 shadow-sm">
            <p className="text-foreground/80 mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">{t.initial}</div>
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
