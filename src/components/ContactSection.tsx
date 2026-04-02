import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  const [interest, setInterest] = useState("cliente");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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

            <form
              className="space-y-4"
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const targetPhoneE164 = "5527998220104";
                const interestLabel =
                  interest === "cliente" ? "Quero ser cliente LIKE SAÚDE" : interest === "empreendedor" ? "Quero empreender" : "Tenho dúvidas";
                const text = `Olá! Me chamo ${fullName || "(sem nome)"}.
Interesse: ${interestLabel}
E-mail: ${email || "(sem e-mail)"} 
Telefone/WhatsApp: ${phone || "(sem telefone)"}

Mensagem:
${message || "(vazia)"}`;
                const url = `https://wa.me/${targetPhoneE164}?text=${encodeURIComponent(text)}`;
                window.open(url, "_blank", "noopener,noreferrer");
              }}
            >
              <input
                type="text"
                placeholder="Nome completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                type="tel"
                placeholder="(DDD) Telefone / WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
              />
              <textarea
                placeholder="Mensagem"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
              />
              <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-accent transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">E-mail</h4>
                <p className="text-primary font-medium">contato@likebrasil.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Instagram</h4>
                <a href="https://instagram.com/likebrasil" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Instagram</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Telefone</h4>
                <a
                  href="https://wa.me/5527998220104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  (27) 99822-0104
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Localização</h4>
                <p className="text-muted-foreground">Guarapari/ES • Cachoeiro de Itapemirim/ES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
