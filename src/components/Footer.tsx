import obaLogo from "@/assets/oba-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={obaLogo} 
              alt="OBA 365" 
              className="h-12 w-auto object-contain brightness-0 invert opacity-90"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a 
              href="#services" 
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Services
            </a>
            <a 
              href="#benefits" 
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Why Us
            </a>
            <a 
              href="mailto:support@oba365.com" 
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              support@oba365.com
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} OBA 365. All rights reserved.
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/60">
            <span className="font-medium">Optimize. Build. Automate.</span>
            {" "}— Transforming finance operations through intelligent automation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
