import { Check, Mail, Phone } from "lucide-react";
import webDesignGif from "@/assets/web-design-layout.gif";

const AboutSection = () => {
  return <section id="about" className="py-20 bg-card/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h5 className="text-lg text-foreground capitalize mb-2">about me</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground capitalize mb-6">
              <span className="text-primary">professional problem solver</span>{" "}
              for web development
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">I’m a Full-Stack Developer focused on building scalable web applications and e-commerce solutions, with strong experience in .NET Core, C#, ASP.NET, and SQL, alongside HTML, CSS, Bootstrap, and JavaScript. I also specialize in WordPress and WooCommerce development, including theme customization, plugin integration, and performance optimization to deliver fast, reliable, and business-ready websites.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Let's work together to bring your ideas to life!
            </p>

            <ul className="flex flex-wrap gap-4 mb-8">
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-primary" />
                Web Development
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-primary" />
                SEO Specialist
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Email Me</h4>
                  <a href="mailto:ehab.sadiq89@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors">
                    ehab.sadiq89@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Make A Call</h4>
                  <a href="tel:+201033813411" className="text-foreground font-medium hover:text-primary transition-colors">
                    +20 (10) 3381 3411
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src={webDesignGif} 
              alt="Web Design Layout Animation" 
              className="w-full max-w-md rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;