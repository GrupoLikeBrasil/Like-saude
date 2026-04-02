import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Como me torno um empreendedor LIKE BRASIL?", a: "É simples! Basta entrar em contato conosco, fazer seu cadastro e você já recebe treinamento completo e materiais para começar a revender e lucrar." },
  { q: "Quais produtos a LIKE BRASIL oferece?", a: "Oferecemos uma linha completa de produtos de saúde e bem-estar: nutracêuticos, óleos ozonizados, linha capilar, fragrâncias, cosméticos e suplementos de alta qualidade." },
  { q: "Quanto posso ganhar como empreendedor?", a: "Você pode lucrar até 100% na revenda dos produtos. Além disso, contamos com 10 formas de ganhos diferentes e um plano de carreira com premiações como viagens e carros." },
  { q: "Preciso ter experiência com vendas?", a: "Não! Oferecemos treinamento completo e suporte contínuo. Nosso modelo é simples e qualquer pessoa pode começar, independente de experiência prévia." },
];

const FAQSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Perguntas Frequentes</h2>
      <p className="text-center text-muted-foreground mb-12">Tire suas dúvidas sobre a LIKE BRASIL</p>

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
