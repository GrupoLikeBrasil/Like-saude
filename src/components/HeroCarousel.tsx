import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Heart, Building2, Zap } from "lucide-react";
import heroImg from "@/assets/hero-doctor.jpg";

const slides = [
  {
    icon: Sparkles,
    title: "A solução LIKE SAÚDE",
    text: "Promovemos bem-estar, equilíbrio e qualidade de vida por meio de uma rotina mais consciente de autocuidado, leveza e cuidado com você.",
  },
  {
    icon: Heart,
    title: "Bem-estar e autocuidado",
    text: "Uma proposta pensada para quem busca mais equilíbrio na rotina, mais leveza no dia a dia e uma conexão maior com saúde, vitalidade e qualidade de vida.",
  },
  {
    icon: Building2,
    title: "Saúde, equilíbrio e qualidade de vida",
    text: "A LIKE SAÚDE valoriza uma rotina de autocuidado e bem-estar, inspirando hábitos mais conscientes e uma vida com mais leveza, disposição e atenção ao que realmente importa.",
  },
  {
    icon: Zap,
    title: "O desafio da vida moderna",
    text: "A correria do dia a dia, o excesso de tarefas e a falta de tempo para si tornam cada vez mais difícil manter uma rotina equilibrada. Cuidar do bem-estar físico e mental deixou de ser luxo e passou a ser necessidade.",
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
      <img src={heroImg} alt="Bem-estar e autocuidado" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative z-10 text-center text-primary-foreground max-w-3xl mx-auto px-4">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
          <Icon className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
        <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">{slide.text}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#sobre" className="px-8 py-3 rounded-full border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground hover:text-primary transition-all">
            Quero conhecer
          </a>
          <a href="#contato" className="px-8 py-3 rounded-full bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-all">
            Quero fazer parte
          </a>
        </div>
      </div>

      <button type="button" onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition" aria-label="Slide anterior">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button type="button" onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition" aria-label="Próximo slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} type="button" onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary-foreground scale-125" : "bg-primary-foreground/40"}`} aria-label={`Ir para slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
