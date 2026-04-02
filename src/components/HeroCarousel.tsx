import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Shield, Heart, Building2, Users } from "lucide-react";
import heroImg from "@/assets/hero-doctor.jpg";

const slides = [
  {
    icon: Shield,
    title: "Saúde e Bem-Estar para Todos",
    text: "A LIKE BRASIL promove saúde, bem-estar e qualidade de vida com produtos de alta qualidade e uma oportunidade de negócio única no mercado que mais cresce no mundo",
  },
  {
    icon: Heart,
    title: "A solução LIKE SAÚDE",
    text: "Cuidamos da sua saúde com produtos naturais, nutracêuticos e soluções inovadoras que promovem bem-estar e qualidade de vida para você e sua família",
  },
  {
    icon: Building2,
    title: "Mercado em Crescimento",
    text: "O Brasil é líder mundial em consumo de produtos de bem-estar. A indústria faturou mais de R$ 96 bilhões — essa é sua chance de empreender nesse mercado gigante",
  },
  {
    icon: Users,
    title: "Empreenda com a LIKE BRASIL",
    text: "Revenda produtos conhecidos mundialmente com até 100% de lucro. Construa seu próprio negócio na área de saúde e bem-estar com 10 formas de ganho diferentes",
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
      <img src={heroImg} alt="Saúde e Bem-Estar" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative z-10 text-center text-primary-foreground max-w-3xl mx-auto px-4">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
          <Icon className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
        <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">{slide.text}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contato" className="px-8 py-3 rounded-full border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground hover:text-primary transition-all">
            Quero conhecer os produtos
          </a>
          <a href="#consultor" className="px-8 py-3 rounded-full bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-all">
            Quero empreender
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
