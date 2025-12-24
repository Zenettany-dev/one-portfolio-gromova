import { technologies } from "@/data/technologies";
import { TechCard } from "./TechCard";
import { ScrollReveal } from "./ScrollReveal";

export function TechSection() {
  return (
    <section className="px-4 mb-8">
      <ScrollReveal>
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
          Технологии
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {technologies.map((tech, index) => (
          <ScrollReveal key={tech.name} delay={index * 30}>
            <TechCard tech={tech} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
