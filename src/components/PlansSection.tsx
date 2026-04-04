import { Check } from "lucide-react";

const column1 = [
  "Mais consciência na rotina",
  "Valorização do autocuidado",
  "Leveza para viver melhor",
  "Mais conexão com o próprio corpo",
  "Qualidade de vida como prioridade",
];

const column2 = [
  "Mais bem-estar físico e mental",
  "Mais disposição para o cotidiano",
  "Mais presença e atenção a si",
  "Fortalecimento de hábitos saudáveis",
  "Mais harmonia entre corpo e mente",
];

const PlansSection = () => (
  <section id="pilares" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Pilares do Bem-Estar</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        O cuidado com você começa na atenção aos detalhes da sua rotina.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-secondary rounded-2xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Equilíbrio para o dia a dia</h3>
          <ul className="space-y-4">
            {column1.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary rounded-2xl p-8">
          <h3 className="text-xl font-bold text-primary-foreground mb-6">Benefícios de uma rotina de cuidado</h3>
          <ul className="space-y-4">
            {column2.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-foreground mt-0.5 shrink-0" />
                <span className="text-primary-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PlansSection;
