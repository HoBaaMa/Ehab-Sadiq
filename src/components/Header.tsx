import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ehab-sadiq/",
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    hoverColor: "hover:text-[#0A66C2]",
  },
  {
    href: "https://github.com/HoBaaMa",
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    hoverColor: "hover:text-[#999999]",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
          isScrolled && "bg-background/80 backdrop-blur-md border-b border-border"
        )}
      >
        <nav className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-semibold text-foreground">
            Ehab S.
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-foreground capitalize hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons - Desktop */}
          <ul className="hidden md:flex items-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={cn(
                    "text-primary transition-all hover:scale-125 inline-block",
                    link.hoverColor
                  )}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2 relative z-[100]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Full Screen Overlay (Outside header for proper stacking) */}
      <div
        className={cn(
          "fixed inset-0 md:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ 
          backgroundColor: "#131313", 
          zIndex: 99,
        }}
      >
        <div className="flex flex-col h-full pt-8 px-8">
          {/* Close Button inside menu */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="self-end p-2 text-foreground mb-8"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  "transform transition-all duration-300",
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                )}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 text-2xl font-medium text-foreground capitalize hover:text-primary transition-colors border-b border-border/50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="mt-auto pb-12">
            <p className="text-sm text-muted-foreground mb-4">Follow me</p>
            <ul className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={cn(
                      "text-primary transition-all hover:scale-125 inline-block",
                      link.hoverColor
                    )}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      <div
        className={cn(
          "fixed inset-0 md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        style={{ 
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 98,
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
