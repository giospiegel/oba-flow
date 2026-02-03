import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import obaLogo from "@/assets/oba-logo.jpg";
const Hero = () => {
  return <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 opacity-0 animate-fade-up">
            <img src={obaLogo} alt="OBA 365 - Optimal Business Accelerator" className="h-24 md:h-32 w-auto object-contain" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 opacity-0 animate-fade-up delay-100">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-secondary-foreground">
              Autonomous Workflow Architect
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-up delay-200 leading-tight">
            Transform Your Business Operations with{" "}
            <span className="text-gradient">Intelligent Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 opacity-0 animate-fade-up delay-300 leading-relaxed">From extracting data out of tax documents to automating variance analysis narratives, we build custom AI-powered workflows that save you hours every week.</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-400">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#services">
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#benefits">Learn More</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 opacity-0 animate-fade-up delay-500">
            <p className="text-sm text-muted-foreground mb-4">
              Built by professionals, for professionals
            </p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground">10+</span>
                <span className="text-xs">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground">100%</span>
                <span className="text-xs">Custom Solutions</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground">24/7</span>
                <span className="text-xs">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
