import { useState } from "react";
import { Package } from "lucide-react";
import type { Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group glass rounded-xl p-4 flex flex-col items-center gap-3 hover:bg-secondary/50 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default">
      <div className="w-10 h-10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        {imageError ? (
          <Package className="w-10 h-10 text-muted-foreground" />
        ) : (
          <img
            src={program.icon}
            alt={program.name}
            className="w-10 h-10 object-contain"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <span className="text-xs text-center text-foreground font-medium">{program.name}</span>
    </div>
  );
}
