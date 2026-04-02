import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Posso cancelar quando quiser?", a: "Sim! Você pode cancelar sua assinatura a qualquer momento, sem burocracia, multas ou fidelidade. Basta entrar em contato com nosso suporte." },
  { q: "Quais clínicas estão disponíveis?", a: "Temos uma rede crescente de clínicas parceiras em mais de 200 cidades do Brasil. Você pode consultar as clínicas disponíveis na sua região através do nosso aplicativo." },
  { q: "Como funciona o pagamento das comissões?", a: "As comissões são pagas mensalmente via PIX ou transferência bancária. Você recebe R$ 25,00 por cada indicação direta que se tornar cliente." },
  { q: "Preciso ter experiência?", a: "Não! Oferecemos treinamento completo e gratuito para todos os novos consultores. Nosso modelo é simples e fácil de duplicar." },
];

const FAQSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Perguntas Frequentes</h2>
      <p className="text-center text-muted-foreground mb-12">Tire suas dúvidas sobre a meohelp</p>

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
