import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [interest, setInterest] = useState("cliente");

  return (
    <section id="contato" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Entre em Contato</h2>
        <p className="text-center text-muted-foreground mb-12">Vamos começar? Preencha o formulário e nossa equipe entrará em contato</p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="flex gap-2 mb-6">
              {["cliente", "empreendedor", "duvidas"].map((t) => (
                <button
                  key={t}
                  onClick={() => setInterest(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    interest === t ? "bg-primary text-primary-foreground" : "bg-card text-foreground border border-border"
                  }`}
                >
                  {t === "cliente" ? "Quero ser cliente" : t === "empreendedor" ? "Quero empreender" : "Tenho dúvidas"}
                </button>
              ))}
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nome completo" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none" />
              <input type="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none" />
              <input type="tel" placeholder="Telefone / WhatsApp" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none" />
              <textarea placeholder="Mensagem" rows={4} className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none resize-none" />
              <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-accent transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">WhatsApp</h4>
                <p className="text-primary font-medium">(27) 9 8894-9999</p>
                <p className="text-sm text-muted-foreground">Atendimento rápido via WhatsApp</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">E-mail</h4>
                <p className="text-primary font-medium">contato@likebrasil.com.br</p>
                <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Atuação</h4>
                <p className="text-muted-foreground">Presente em todo o Brasil<br />Empreendedores em mais de 500 cidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
