const testimonials = [
  {
    text: "Consegui fazer 3 consultas por menos de R$ 150. Antes gastava isso em uma só consulta particular!",
    name: "Maria Silva",
    role: "Cliente há 8 meses",
    initial: "M",
  },
  {
    text: "Em 6 meses como consultor, já consegui uma renda extra de R$ 3.000/mês. Mudou minha vida!",
    name: "João Santos",
    role: "Consultor há 6 meses",
    initial: "J",
  },
  {
    text: "O atendimento é excelente e os médicos são muito qualificados. Recomendo para toda família.",
    name: "Ana Costa",
    role: "Cliente há 1 ano",
    initial: "A",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Depoimentos e Resultados</h2>
      <p className="text-center text-muted-foreground mb-12">Veja o que nossos clientes e consultores falam sobre a meohelp</p>

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
