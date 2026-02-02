import { useState } from "react";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FlipCard = ({ icon, title, description }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 h-[280px] w-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-500 transform-style-preserve-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden rounded-xl border border-border bg-card p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(163,241,246,0.15)] transition-all duration-300 hover:-translate-y-1">
          <div className="text-primary text-5xl">{icon}</div>
          <h3 className="text-xl font-semibold text-foreground capitalize text-center">
            {title}
          </h3>
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-muted-foreground text-xs">
            <RotateCcw className="w-3 h-3" />
            <span>tap to flip</span>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border border-primary/30 bg-card p-6 flex flex-col items-center justify-center hover:shadow-[0_0_30px_rgba(163,241,246,0.15)] transition-shadow duration-300">
          <p className="text-muted-foreground text-center leading-relaxed text-sm">
            {description}
          </p>
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-primary text-xs">
            <RotateCcw className="w-3 h-3" />
            <span>tap to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
