import { Target, Eye } from "lucide-react";

const stats = [
  { value: "50k+", label: "Empreendedores ativos" },
  { value: "100+", label: "Produtos premium" },
  { value: "500+", label: "Cidades atendidas" },
  { value: "96Bi", label: "Mercado de bem-estar" },
];

const AboutSection = () => (
  <section id="sobre" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Sobre a LIKE BRASIL</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        A LIKE BRASIL é uma empresa que promove saúde e bem-estar através de produtos de alta qualidade, oferecendo uma oportunidade de negócio lucrativa para empreendedores independentes em todo o Brasil.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        <div className="bg-secondary rounded-2xl p-8">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">Missão</h3>
          <p className="text-muted-foreground leading-relaxed">
            Promover saúde, bem-estar e qualidade de vida através de produtos inovadores, gerando oportunidades de renda e transformando vidas com um modelo de negócio acessível e lucrativo.
          </p>
        </div>
        <div className="bg-secondary rounded-2xl p-8">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Eye className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">Visão</h3>
          <p className="text-muted-foreground leading-relaxed">
            Ser referência nacional em saúde e bem-estar, liderando o mercado com produtos de excelência e uma rede de empreendedores que transforma vidas em todo o Brasil.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{s.value}</div>
            <div className="text-muted-foreground text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
