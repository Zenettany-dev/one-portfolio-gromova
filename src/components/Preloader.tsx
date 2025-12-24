import { useEffect, useState, useCallback } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const codeLines = [
  "import { Developer } from '@gromova/core';",
  "const skills = await loadSkills();",
  "await connectToDatabase();",
  "initializePortfolio({ theme: 'dark' });",
  "console.log('Welcome, Gromova!');",
];

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      const timeout = setTimeout(handleComplete, 600);
      return () => clearTimeout(timeout);
    }

    const line = codeLines[currentLine];
    let charIndex = 0;
    setTypedText("");

    const typeInterval = setInterval(() => {
      if (charIndex <= line.length) {
        setTypedText(line.slice(0, charIndex));
        charIndex++;
        setProgress(((currentLine + charIndex / line.length) / codeLines.length) * 100);
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setCurrentLine((prev) => prev + 1), 300);
      }
    }, 35);

    return () => clearInterval(typeInterval);
  }, [currentLine, handleComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float 3s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <div className="relative mb-8">
        <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-150" />
        <h1 className="relative text-5xl font-bold gradient-text tracking-tight">
          Gromova
        </h1>
      </div>

      <div className="w-80 max-w-[90vw] glass rounded-xl p-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        
        <div className="relative space-y-2 font-mono text-xs min-h-[140px]">
          {codeLines.slice(0, currentLine).map((line, i) => (
            <div key={i} className="flex items-start gap-2 opacity-50">
              <span className="text-primary/60 select-none w-4">{i + 1}</span>
              <span className="text-muted-foreground">{line}</span>
            </div>
          ))}
          
          {currentLine < codeLines.length && (
            <div className="flex items-start gap-2">
              <span className="text-primary select-none w-4">{currentLine + 1}</span>
              <span className="text-foreground">
                {typedText}
                <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse" />
              </span>
            </div>
          )}
        </div>

        <div className="relative mt-4">
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Загрузка...</span>
            <span className="font-mono">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-primary"
            style={{
              animation: "pulse-scale 1.4s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
