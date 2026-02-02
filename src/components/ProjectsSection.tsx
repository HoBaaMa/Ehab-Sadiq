import ProjectCard from "./ProjectCard";
import personalBlogApiImage from "@/assets/personal-blog-api.webp";
import euroFabricsImage from "@/assets/eurofabrics.webp";

const projects = [
  {
    title: "E-Commerce Platform",
    image: personalBlogApiImage,
    techStack: [".NET Core", "C#", "SQL Server", "RESTful API", "Clean Architecture"],
    githubUrl: "https://github.com/HoBaaMa/Blog-API",
    liveUrl: "#",
    caseStudy: {
      problem: "A retail client needed a scalable online store to handle 10,000+ daily visitors with complex inventory management.",
      solution: "Built a full-stack e-commerce platform with .NET Core backend, integrated payment gateways, and real-time inventory sync.",
      results: "Achieved 99.9% uptime, 40% faster checkout process, and increased monthly sales by 65%.",
    },
  },
  {
    title: "Task Management API",
    image: euroFabricsImage,
    techStack: ["Website Development", "WordPress", "Ecommerce", "WooCommerce"],
    liveUrl: "https://eurofabrics.co.uk/",
    liveLabel: "Live Website",
    caseStudy: {
      problem: "A startup required a robust API for their task management app supporting real-time collaboration across teams.",
      solution: "Designed RESTful API with JWT authentication, role-based access control, and SignalR for live updates.",
      results: "Supports 500+ concurrent users with sub-100ms response times and zero security breaches.",
    },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground capitalize">
            latest <span className="text-primary">projects</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
