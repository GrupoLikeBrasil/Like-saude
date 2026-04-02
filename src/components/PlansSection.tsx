import { Check } from "lucide-react";

const clientBenefits = [
  "Consultas médicas com preços populares",
  "Telemedicina Familiar (titular + 5 dependentes)",
  "Descontos em exames laboratoriais",
  "Rede credenciada nacional",
  "Cancelamento sem burocracia",
];

const consultorBenefits = [
  "Todos os benefícios de cliente",
  "R$ 25,00 de comissão por cada indicação",
  "Plano de carreira simples e rentável",
  "Material de divulgação incluso",
  "Treinamento completo gratuito",
];

const PlansSection = () => (
  <section id="planos" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Planos e Benefícios</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">
        Um investimento que se paga: saúde e renda extra para você e sua família
      </p>

      <div className="text-center mb-12">
        <span className="text-5xl md:text-6xl font-bold text-primary">R$ 69,90</span>
        <p className="text-muted-foreground mt-2">Adesão + Mensalidade (Titular + 5 dependentes)</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-secondary rounded-2xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Benefícios para Clientes</h3>
          <ul className="space-y-4">
            {clientBenefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary rounded-2xl p-8">
          <h3 className="text-xl font-bold text-primary-foreground mb-6">Benefícios para Consultores</h3>
          <ul className="space-y-4">
            {consultorBenefits.map((b) => (
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
