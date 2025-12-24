import { programs } from "@/data/programs";
import { ProgramCard } from "./ProgramCard";
import { ScrollReveal } from "./ScrollReveal";

export function ProgramSection() {
  return (
    <section className="px-4 mb-8">
      <ScrollReveal>
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
          Инструменты
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {programs.map((program, index) => (
          <ScrollReveal key={program.name} delay={index * 40}>
            <ProgramCard program={program} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
