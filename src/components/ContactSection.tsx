import { Button } from "@/components/ui/button";
import { Linkedin, MessageCircle } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-4 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Think We Could Create Something Great Together?
        </h2>
        <p className="text-muted-foreground mb-8">
          I'm available for part-time opportunities to collaborate, push
          boundaries and create innovative solutions.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:ehab.sadiq89@gmail.com">Contact Me</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border">
            <a href="https://www.linkedin.com/in/ehab-sadiq/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border">
            <a href="https://wa.me/201033813411" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default ContactSection;