import TimelineItem from "./TimelineItem";

const certificates = [
  {
    category: "Backend Development",
    title: "Build ASP.NET Core Web API - Scratch To Finish (.NET8 API)",
    description:
      "Comprehensive certification demonstrating expertise in building enterprise-grade RESTful APIs using ASP.NET Core and .NET 8, including dependency injection, middleware configuration, Entity Framework Core, and authentication.",
    link: "https://www.udemy.com/certificate/UC-dc69463c-70d5-4f4b-b3e3-b1afe97616e8/",
  },
  {
    category: "Mastering C#",
    title: "Complete C# Masterclass",
    description:
      "Deep understanding of C# programming and .NET ecosystem, including generics, delegates, events, LINQ, async/await patterns, design patterns, and modern C# features for enterprise applications.",
    link: "https://www.udemy.com/certificate/UC-42a0f613-2bb6-4314-9d12-772a97510381/",
  },
  {
    category: "Full Stack Development",
    title: "Full Stack .NET Web Developer - DEPI",
    description:
      "Complete web development from frontend to backend, integrating modern frontend technologies (HTML5, CSS3, JavaScript, Bootstrap) with robust .NET backend systems and SQL Server database design.",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground capitalize">
            explore my popular <span className="text-primary">certificates</span>
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform -translate-x-1/2" />

          {/* Timeline items */}
          {certificates.map((cert, index) => (
            <TimelineItem
              key={index}
              category={cert.category}
              title={cert.title}
              description={cert.description}
              link={cert.link}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
