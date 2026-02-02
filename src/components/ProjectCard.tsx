import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Lightbulb, Wrench, TrendingUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
interface CaseStudy {
  problem: string;
  solution: string;
  results: string;
}
interface ProjectCardProps {
  title: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  caseStudy?: CaseStudy;
}
const ProjectCard = ({
  title,
  image,
  techStack,
  githubUrl,
  liveUrl,
  liveLabel = "Live Demo",
  caseStudy
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return <div className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(163,241,246,0.1)] transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden bg-muted">
        <img src={image} alt={title} className="w-full h-full transition-transform duration-300 group-hover:scale-105 object-fill" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/30 text-xs">
              {tech}
            </Badge>)}
        </div>

        {/* Case Study Accordion Toggle - Commented for future use */}
        {/* {caseStudy && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between py-3 px-4 mb-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
          >
            <span className="text-sm font-medium text-primary">View Case Study</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-primary transition-transform duration-300",
                isExpanded && "rotate-180"
              )}
            />
          </button>
         )} */}

        {/* Case Study Content - Accordion - Commented for future use */}
        {/* {caseStudy && (
          <div
            className={cn(
              "grid transition-all duration-300 ease-in-out",
              isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <div className="space-y-3 mb-4 pt-2 pb-4 border-t border-border">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">The Problem</span>
                    <p className="text-sm text-muted-foreground mt-1">{caseStudy.problem}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">The Solution</span>
                    <p className="text-sm text-muted-foreground mt-1">{caseStudy.solution}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">The Results</span>
                    <p className="text-sm text-muted-foreground mt-1">{caseStudy.results}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         )} */}

        <div className="flex gap-3">
          {githubUrl && <Button asChild size="sm" variant="outline" className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>}
          {liveUrl && <Button asChild size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                {liveLabel}
              </a>
            </Button>}
        </div>
      </div>
    </div>;
};
export default ProjectCard;