import { userInfo } from "@/data/info";
import { ScrollReveal } from "./ScrollReveal";

export function AboutSection() {
  return (
    <section className="px-4 mb-8">
      <ScrollReveal>
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
          Обо мне
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="glass rounded-xl p-5 relative overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="relative text-sm text-muted-foreground leading-relaxed">
            {userInfo.about}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
