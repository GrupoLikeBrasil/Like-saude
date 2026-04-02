import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Shield, Heart, Building2, Users } from "lucide-react";
import heroImg from "@/assets/hero-doctor.jpg";

const slides = [
  {
    icon: Shield,
    title: "O problema no Brasil",
    text: "75% da população brasileira está sem acesso a saúde privada devido ao alto custo. O SUS é gratuíto mas enfrenta superlotação e demora no atendimento",
  },
  {
    icon: Heart,
    title: "A solução meohelp",
    text: "Conectamos pessoas a clínicas e serviços de saúde com preços acessíveis, gerando renda para quem indica e demanda sem custos para quem atende",
  },
  {
    icon: Building2,
    title: "Clínicas Populares",
    text: "Clínicas parceiras contam com uma poderosa rede de consultores independentes que atuam como promotores dos seus serviços",
  },
  {
    icon: Users,
    title: "Clientes e Consultores",
    text: "Saúde acessível e renda extra em um só lugar. Nossa visão é ser a principal plataforma de saúde com impacto social positivo no Brasil",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Healthcare" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative z-10 text-center text-primary-foreground max-w-3xl mx-auto px-4">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
          <Icon className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
        <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">{slide.text}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contato" className="px-8 py-3 rounded-full border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground hover:text-primary transition-all">
            Quero ser cliente
          </a>
          <a href="#consultor" className="px-8 py-3 rounded-full bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-all">
            Quero ser consultor
          </a>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary-foreground scale-125" : "bg-primary-foreground/40"}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
