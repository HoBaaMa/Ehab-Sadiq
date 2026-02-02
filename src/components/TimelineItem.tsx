import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  category: string;
  title: string;
  description: string;
  link?: string;
  isLeft: boolean;
  index: number;
}

const TimelineItem = ({
  category,
  title,
  description,
  link,
  isLeft,
  index,
}: TimelineItemProps) => {
  return (
    <div
      className={cn(
        "relative flex items-center w-full mb-8 last:mb-0",
        isLeft ? "md:justify-start" : "md:justify-end",
        "justify-start"
      )}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Timeline node - centered on the line */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(163,241,246,0.5)]" />

      {/* Card */}
      <div
        className={cn(
          "w-full md:w-[calc(50%-40px)] ml-10 md:ml-0",
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        )}
      >
        <div className="group rounded-xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(163,241,246,0.1)] transition-all duration-300 animate-fade-in">
          <Badge
            variant="outline"
            className="bg-primary/10 text-primary border-primary/30 text-xs mb-3"
          >
            {category}
          </Badge>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {description}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary text-sm hover:underline"
            >
              View Certificate
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
