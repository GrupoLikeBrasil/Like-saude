import { Stethoscope, Video, Users, TrendingUp } from "lucide-react";

const features = [
  { icon: Stethoscope, title: "Consulta Presencial", text: "Acesso a consultas médicas com preços populares em nossa rede credenciada" },
  { icon: Video, title: "Telemedicina", text: "Pronto atendimento ou agendada. Clínica Geral + 35 Especialidades. 7 dias por semana 24h por dia" },
  { icon: Users, title: "Rede de Consultores", text: "Consultores qualificados que indicam nossos serviços e ganham comissões" },
  { icon: TrendingUp, title: "Ganhos Escaláveis", text: "Sistema de remuneração transparente com adesão descomplicada e fácil duplicação" },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Como Funciona</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        A meohelp conecta pessoas a serviços de saúde acessíveis, oferecendo consultas presenciais, telemedicina e exames com preços populares.
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
