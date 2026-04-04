import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é a LIKE SAÚDE?",
    a: "É um conceito voltado ao bem-estar, ao equilíbrio e ao autocuidado. A proposta é inspirar uma rotina mais consciente, com atenção à qualidade de vida, vitalidade e cuidado diário com corpo e mente.",
  },
  {
    q: "Como a LIKE SAÚDE se relaciona com o meu dia a dia?",
    a: "A ideia é conectar-se a um estilo de vida mais consciente: pequenas escolhas, constância e equilíbrio entre descanso, energia e foco — sempre com leveza e sem promessas irreais.",
  },
  {
    q: "Por que falar em bem-estar e não só em saúde?",
    a: "Porque saúde vai além da ausência de doença: inclui disposição, presença, harmonia entre corpo e mente e hábitos que sustentam qualidade de vida no longo prazo.",
  },
  {
    q: "Como posso saber mais ou me conectar com a proposta?",
    a: "Use o formulário de contato ou fale conosco pelo WhatsApp. Você pode escolher \"Quero conhecer\", \"Quero fazer parte\" ou tirar dúvidas — nossa equipe retorna com informações alinhadas ao conceito de bem-estar.",
  },
];

const FAQSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Perguntas frequentes</h2>
      <p className="text-center text-muted-foreground mb-12">Tire suas dúvidas sobre o conceito LIKE SAÚDE</p>

      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-foreground font-semibold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
