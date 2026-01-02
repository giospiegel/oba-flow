import { Clock, Shield, Zap, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Hours Weekly",
    description: "Eliminate repetitive manual tasks and reclaim valuable time for strategic work.",
  },
  {
    icon: Shield,
    title: "Reduce Errors",
    description: "AI-powered accuracy ensures consistent, reliable results every time.",
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Get real-time analysis and reports without waiting for manual processing.",
  },
  {
    icon: Users,
    title: "Expert Partnership",
    description: "Work with a finance professional who understands your challenges firsthand.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-secondary/30" id="benefits">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Why OBA 365
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Finance Expertise Meets Cutting-Edge Automation
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With extensive experience in finance and a passion for efficiency, 
              I understand the pain points you face daily. Every solution is crafted 
              to address real challenges, not just theoretical problems.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-accent-gradient rounded-3xl opacity-10 blur-2xl" />
              
              {/* Main card */}
              <div className="relative bg-card rounded-3xl border border-border p-8 shadow-elegant">
                <div className="space-y-6">
                  {/* Mock workflow visualization */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">1</span>
                    </div>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="w-full h-full bg-accent-gradient animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">2</span>
                    </div>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-accent-gradient animate-pulse delay-200" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">3</span>
                    </div>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-accent-gradient animate-pulse delay-400" />
                    </div>
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Automation Status</span>
                      <span className="text-xs text-accent font-semibold">Active</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      85% <span className="text-sm font-normal text-muted-foreground">time saved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
