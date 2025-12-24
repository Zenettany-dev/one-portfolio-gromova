import { X } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />

      <div
        className="relative glass rounded-2xl p-6 max-w-sm w-full shadow-2xl shadow-primary/10"
        style={{ animation: "modal-enter 0.3s ease-out" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        <div className="text-center pt-2">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Студия временно закрыта
          </h3>
          <p className="text-sm text-muted-foreground mb-5">Мы скоро вернёмся!</p>

          <div className="mb-6 rounded-xl overflow-hidden bg-secondary/50">
            <img
              src="https://www.meme-arsenal.com/memes/9f76dc08da8298678ea42fcafcebc257.jpg"
              alt="Закрыто"
              className="w-full h-auto max-h-52 object-contain"
            />
          </div>

          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold
                       hover:bg-primary/90 transition-all duration-300 active:scale-[0.98]"
          >
            Понятно
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modal-enter {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
