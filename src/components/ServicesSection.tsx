import FlipCard from "./FlipCard";
import { PenTool, Rocket, Code, Search } from "lucide-react";

const services = [
  {
    icon: <PenTool className="w-12 h-12" />,
    title: "Web Development",
    description:
      "I create modern, responsive web interfaces that provide exceptional user experiences. Using the latest design principles and technologies like HTML5, CSS3, and JavaScript, I craft visually appealing and user-friendly websites that work seamlessly across all devices.",
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Fast Performance",
    description:
      "Performance is paramount in web development. I optimize applications for speed using efficient coding practices, database optimization, caching strategies, and modern .NET Core features to ensure your applications load quickly and run smoothly.",
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Clean Code",
    description:
      "I write maintainable, scalable, and well-documented code following industry best practices and SOLID principles. My clean coding approach ensures your applications are easy to understand, modify, and extend for future development needs.",
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: "SEO Friendly",
    description:
      "As an SEO specialist, I implement comprehensive search engine optimization strategies to improve your website's visibility and ranking. From technical SEO to content optimization, I ensure your site attracts organic traffic and reaches your target audience effectively.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground capitalize">
            my <span className="text-primary">services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FlipCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
