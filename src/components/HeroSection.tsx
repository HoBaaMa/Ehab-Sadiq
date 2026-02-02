import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import personalPhoto from "@/assets/personal-picture.png";
import TechIcon, { WordPressIcon, WooCommerceIcon, DotNetIcon, CSharpIcon, JavaScriptIcon, CSSIcon, HTMLIcon } from "./TechIcon";
const HeroSection = () => {
  return <section id="home" className="min-h-[calc(100vh-4rem)] md:min-h-0 md:mt-16 lg:min-h-screen lg:mt-0 flex items-center justify-center pt-24 pb-20 md:pt-16 md:pb-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Left side - Text content */}
          <div className="md:w-3/5 animate-fade-in">
            <h4 className="text-muted-foreground text-2xl md:text-3xl mb-4 capitalize">
              hello, i'm
            </h4>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2">
              <span className="text-primary">Ehab Sadiq</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-normal text-foreground capitalize mb-6">
              software developer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              I’m Ehab Sadiq, a Computer Science student at Nahda University and an Upwork Rising Talent developer. I’m passionate about technology, with hands-on experience in software development, AI-related projects, and SEO, and I focus on building practical, scalable solutions that deliver real business value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                <a href="mailto:ehab.sadiq89@gmail.com?subject=Hiring Inquiry&body=Hello Ehab,">
                  Hire Me
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/10 hover:text-primary">
                <a href="/EHAB-SADIQ-CV.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile image with floating icons */}
          <div className="md:w-2/5 relative flex items-center justify-center">
            {/* Decorative background shape */}
            <div className="absolute w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-2xl" />
            <div className="absolute w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-primary/20" />
            
            {/* Profile image */}
            <div className="relative z-10 w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_rgba(163,241,246,0.2)]">
              <img src={personalPhoto} alt="Ehab Sadiq" className="w-full h-full object-cover" />
            </div>

            {/* Floating tech icons - positioned right next to the circle frame */}
            <TechIcon icon={<WordPressIcon />} label="WordPress" className="-top-2 left-1/4 -translate-x-1/2 md:-top-2 lg:-top-2" animationDelay="0s" />
            <TechIcon icon={<WooCommerceIcon />} label="WooCommerce" className="top-8 -left-2 md:top-4 md:-left-2 lg:top-6 lg:-left-2" animationDelay="0.5s" slow />
            <TechIcon icon={<DotNetIcon />} label=".NET" className="top-4 -right-2 md:top-2 md:-right-2 lg:top-2 lg:-right-2" animationDelay="0.3s" />
            <TechIcon icon={<CSharpIcon />} label="C#" className="top-1/2 -right-4 md:-right-4 lg:-right-4 -translate-y-1/2" animationDelay="0.8s" slow />
            <TechIcon icon={<JavaScriptIcon />} label="JavaScript" className="bottom-8 -left-2 md:bottom-4 md:-left-2 lg:bottom-6 lg:-left-2" animationDelay="0.2s" />
            <TechIcon icon={<CSSIcon />} label="CSS" className="-bottom-6 left-0 md:-bottom-2 md:left-1/4 md:-translate-x-1/2 lg:-bottom-2" animationDelay="0.6s" slow />
            <TechIcon icon={<HTMLIcon />} label="HTML" className="bottom-4 -right-2 md:bottom-2 md:-right-2 lg:bottom-2 lg:-right-2" animationDelay="0.4s" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;