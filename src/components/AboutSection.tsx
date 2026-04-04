import { useEffect, useRef, useState, type ReactNode } from "react";
import { Target, Eye, Sparkles, Heart, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";

const cardClass = cn(
  "group h-full rounded-2xl border border-border/50 bg-secondary/90 p-8 shadow-sm",
  "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out",
  "hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/25",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

const iconWrapClass =
  "mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-110 group-hover:bg-primary/20";

const pillars = [
  "Bem-estar como prioridade",
  "Mais equilíbrio no dia a dia",
  "Mais leveza na rotina",
  "Mais qualidade de vida",
];

function useSectionReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  visible: boolean;
};

function Reveal({ children, className, delayMs = 0, visible }: RevealProps) {
  return (
    <div
      className={cn(
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className,
      )}
      style={visible ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}

const AboutSection = () => {
  const { ref, visible } = useSectionReveal();

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/[0.07] blur-3xl motion-safe:animate-pulse motion-reduce:animate-none"
        style={{ animationDuration: "5s" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-primary/[0.05] blur-3xl" aria-hidden />

      <div className="container relative mx-auto px-4">
        <Reveal visible={visible} className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/15 bg-primary/[0.06] px-4 py-1.5 text-sm font-medium text-primary mb-5 motion-safe:transition-transform motion-safe:duration-300 hover:scale-[1.02] cursor-default">
            <Sparkles className="w-4 h-4 motion-safe:animate-pulse motion-reduce:animate-none" aria-hidden />
            Bem-estar em primeiro lugar
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-5">
            Sobre a LIKE SAÚDE
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            A LIKE SAÚDE é um conceito voltado ao bem-estar, ao equilíbrio e ao autocuidado. Nossa proposta é inspirar uma rotina mais consciente, com mais atenção à qualidade de vida, à vitalidade e ao cuidado diário com corpo e mente.
          </p>
        </Reveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          <Reveal visible={visible} delayMs={80} className="h-full">
            <article tabIndex={0} className={cardClass}>
              <div className={iconWrapClass}>
                <Target className="h-7 w-7" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Promover uma visão de saúde mais conectada ao autocuidado, ao equilíbrio e ao bem-estar, incentivando hábitos que contribuam para uma vida mais leve e saudável.
              </p>
            </article>
          </Reveal>

          <Reveal visible={visible} delayMs={160} className="h-full">
            <article tabIndex={0} className={cardClass}>
              <div className={iconWrapClass}>
                <Eye className="h-7 w-7" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em bem-estar e qualidade de vida, fortalecendo uma cultura de cuidado diário, presença, vitalidade e equilíbrio.
              </p>
            </article>
          </Reveal>

          <Reveal visible={visible} delayMs={240} className="h-full">
            <article tabIndex={0} className={cardClass}>
              <div className={iconWrapClass}>
                <Heart className="h-7 w-7" strokeWidth={2} aria-hidden />
              </div>
              <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-2">No centro da rotina</p>
              <h3 className="text-xl font-bold text-foreground mb-3">Em foco</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Seu bem-estar começa em você. Mais equilíbrio para viver melhor, autocuidado como parte da rotina e corpo e mente em mais harmonia.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Equilíbrio", "Autocuidado", "Harmonia"].map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1 text-xs font-medium text-primary",
                      "motion-safe:transition-transform motion-safe:duration-200",
                      "group-hover:border-primary/30 cursor-default",
                      "hover:scale-105 hover:bg-primary/[0.12]",
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal visible={visible} delayMs={320} className="h-full">
            <article tabIndex={0} className={cardClass}>
              <div className={iconWrapClass}>
                <ListChecks className="h-7 w-7" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-6">O que valorizamos</h3>
              <ul className="space-y-1">
                {pillars.map((p) => (
                  <li key={p} className="group/item">
                    <span
                      className={cn(
                        "flex items-center gap-3 rounded-xl py-3 px-3 -mx-3 text-foreground font-medium",
                        "motion-safe:transition-all motion-safe:duration-200",
                        "hover:bg-primary/[0.08] hover:translate-x-1 cursor-default",
                      )}
                    >
                      <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                        <span
                          className={cn(
                            "absolute h-2.5 w-2.5 rounded-full bg-primary/35 motion-safe:transition-all motion-safe:duration-300",
                            "scale-100 opacity-0 group-hover/item:scale-[2.2] group-hover/item:opacity-100",
                          )}
                          aria-hidden
                        />
                        <span className="relative block h-2.5 w-2.5 rounded-full bg-primary motion-safe:transition-transform motion-safe:duration-200 group-hover/item:scale-110" />
                      </span>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
