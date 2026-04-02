const steps = [
  { num: "1", text: "Faça sua adesão por R$ 69,90" },
  { num: "2", text: "Receba treinamento e materiais" },
  { num: "3", text: "Comece a indicar e ganhar" },
];

const earnings = [
  { label: "10 indicações diretas/mês", value: "R$ 250,00" },
  { label: "Consultor Ouro/Média Mensal", value: "R$ 2.000,00" },
  { label: "Consultor Rubi/Média Mensal", value: "R$ 3.500,00" },
  { label: "Consultor Diamante/Média Mensal", value: "R$ 12.000,00" },
];

const ConsultorSection = () => (
  <section id="consultor" className="py-20 bg-section-dark text-section-dark-foreground">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Seja um consultor meohelp</h2>
      <p className="text-center opacity-80 max-w-2xl mx-auto mb-12">
        Transforme sua rede de contatos em uma fonte de renda sustentável
      </p>

      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-xl font-bold mb-2">Modelo Simples e Duplicável</h3>
        <p className="opacity-80 mb-8">
          Ganhe comissões diretas por cada pessoa que você indicar. Sem complicação, sem metas impossíveis.
          <span className="block mt-1 font-semibold text-primary">R$ 25,00 de comissão por indicação</span>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="flex items-center gap-4 bg-section-dark-foreground/10 rounded-xl p-5">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                {s.num}
              </div>
              <span className="font-medium">{s.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-6">Potencial de Ganhos</h3>
        <div className="space-y-3">
          {earnings.map((e) => (
            <div key={e.label} className="flex justify-between items-center bg-section-dark-foreground/10 rounded-xl px-6 py-4">
              <span className="opacity-80">{e.label}</span>
              <span className="font-bold text-primary text-lg">{e.value}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#contato" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent transition-colors">
            Comece agora!
          </a>
          <p className="mt-3 opacity-70 text-sm">Saúde e renda extra no mesmo lugar.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ConsultorSection;
