import { MessageCircle, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface OrderButtonProps {
  onClick: () => void;
}

export function OrderButton({ onClick }: OrderButtonProps) {
  return (
    <div className="px-4 pb-10">
      <ScrollReveal>
        <button
          onClick={onClick}
          className="group w-full relative overflow-hidden rounded-xl py-4 px-6 transition-all duration-300 active:scale-[0.98]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
               style={{ background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), white 0%, transparent 50%)" }} />
          
          <div className="relative flex items-center justify-center gap-3">
            <MessageCircle className="w-5 h-5 text-primary-foreground" />
            <span className="font-semibold text-primary-foreground">Заказать проект</span>
            <Sparkles className="w-4 h-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </button>
      </ScrollReveal>
    </div>
  );
}
