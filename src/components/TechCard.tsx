import { useState } from "react";
import { Code2 } from "lucide-react";
import type { Technology } from "@/data/technologies";

interface TechCardProps {
  tech: Technology;
}

export function TechCard({ tech }: TechCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group glass rounded-xl p-4 flex flex-col items-center gap-3 hover:bg-secondary/50 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default">
      <div className="w-10 h-10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        {imageError ? (
          <Code2 className="w-10 h-10 text-muted-foreground" />
        ) : (
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-10 h-10 object-contain"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <span className="text-xs text-center text-foreground font-medium">{tech.name}</span>
    </div>
  );
}
