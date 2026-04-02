import { Check } from "lucide-react";

const clientBenefits = [
  "Produtos de saúde e bem-estar premium",
  "Linha nutricional completa",
  "Óleos ozonizados de alta qualidade",
  "Fragrâncias e cosméticos exclusivos",
  "Linha capilar profissional",
];

const consultorBenefits = [
  "Revenda com até 100% de lucro",
  "10 formas de ganhos diferentes",
  "Plano de carreira com premiações",
  "Treinamento completo e suporte",
  "Viagens, cruzeiros e carros como incentivo",
];

const PlansSection = () => (
  <section id="planos" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Produtos e Oportunidade</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">
        Saúde, bem-estar e uma oportunidade de negócio que transforma vidas
      </p>

      <div className="text-center mb-12">
        <span className="text-5xl md:text-6xl font-bold text-primary">100%</span>
        <p className="text-muted-foreground mt-2">de lucro na revenda de produtos conhecidos mundialmente</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-secondary rounded-2xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Nossos Produtos</h3>
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
          <h3 className="text-xl font-bold text-primary-foreground mb-6">Oportunidade de Negócio</h3>
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
