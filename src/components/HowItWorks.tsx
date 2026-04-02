import { Leaf, Sparkles, Users, TrendingUp } from "lucide-react";

const features = [
  { icon: Leaf, title: "Produtos Naturais", text: "Linha completa de nutracêuticos, óleos ozonizados e suplementos de alta qualidade para sua saúde" },
  { icon: Sparkles, title: "Beleza e Cosméticos", text: "Fragrâncias, linha capilar e cosméticos premium reconhecidos mundialmente" },
  { icon: Users, title: "Rede de Empreendedores", text: "Comunidade de empreendedores independentes que crescem juntos com suporte e treinamento" },
  { icon: TrendingUp, title: "100% de Lucro", text: "Revenda produtos com até 100% de lucro e conte com 10 formas de ganhos diferentes" },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Como Funciona</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        A LIKE SAÚDE oferece produtos premium de saúde e bem-estar com um modelo de revenda simples, lucrativo e acessível para qualquer pessoa.
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
