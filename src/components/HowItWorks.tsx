import { Sun, Scale, Heart, RefreshCw } from "lucide-react";

const features = [
  { icon: Sun, title: "Autocuidado Diário", text: "Pequenas escolhas e hábitos que fortalecem o cuidado com você todos os dias." },
  { icon: Scale, title: "Equilíbrio da Rotina", text: "Mais consciência entre descanso, energia, foco e qualidade de vida." },
  { icon: Heart, title: "Bem-estar Integral", text: "Um olhar mais completo para saúde, leveza e vitalidade." },
  { icon: RefreshCw, title: "Constância e Leveza", text: "O bem-estar como parte natural da rotina, de forma simples e contínua." },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Como funciona</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        A LIKE SAÚDE se conecta a um estilo de vida mais consciente, valorizando o autocuidado em diferentes momentos da rotina. A proposta é incentivar uma jornada de bem-estar baseada em equilíbrio, constância e atenção ao que faz bem para corpo e mente.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HowItWorks;
