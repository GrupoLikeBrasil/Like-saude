const rightBullets = ["Mais leveza no dia a dia", "Mais atenção ao que faz bem", "Mais qualidade de vida", "Mais equilíbrio para viver melhor"];

const numbered = ["Valorize sua rotina", "Cultive hábitos mais conscientes", "Viva com mais equilíbrio"];

const ConsultorSection = () => (
  <section id="experiencia" className="py-20 bg-section-dark text-section-dark-foreground">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Viva a experiência LIKE SAÚDE</h2>
      <p className="text-center opacity-80 max-w-2xl mx-auto mb-14">Transforme o cuidado com você em parte da sua rotina.</p>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <h3 className="text-xl font-bold mb-3">Um cuidado mais leve e natural</h3>
          <p className="opacity-80 leading-relaxed mb-6">
            O bem-estar começa quando você passa a olhar para si com mais atenção, presença e constância.
          </p>
          <p className="text-lg md:text-xl font-semibold text-primary mb-8 leading-snug">
            Autocuidado, equilíbrio e qualidade de vida em um só conceito
          </p>
          <ol className="space-y-4 list-decimal list-inside opacity-90 marker:font-bold marker:text-primary">
            {numbered.map((item, i) => (
              <li key={i} className="pl-1">
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-section-dark-foreground/10 rounded-2xl p-8 lg:p-10">
          <h3 className="text-xl font-bold mb-6">Uma nova forma de se conectar com o bem-estar</h3>
          <ul className="space-y-4 mb-10">
            {rightBullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span className="opacity-90">{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#sobre" className="inline-flex justify-center px-8 py-3 rounded-full border-2 border-primary-foreground/40 text-section-dark-foreground font-semibold hover:bg-section-dark-foreground/10 transition-colors">
              Quero conhecer
            </a>
            <a href="#contato" className="inline-flex justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors text-center">
              Comece agora sua jornada de bem-estar
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ConsultorSection;
