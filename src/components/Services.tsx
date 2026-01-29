import { FileText, TrendingUp, MessageSquare, Share2 } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Document Data Extraction",
    description: "Automatically extract and process data from and image documents, classify invoices, receipts, and other unsupported documents with AI-powered accuracy.",
    highlight: "receipts • Invoices • unsupported",
  },
  {
    icon: TrendingUp,
    title: "Variance Analysis Narrator",
    description: "Generate intelligent, narrative explanations for budget variances, helping you communicate financial insights clearly and efficiently.",
    highlight: "Budget Analysis • Reporting • Insights",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Deploy custom AI assistants that understand your business context, answer queries, and help your team access information instantly.",
    highlight: "Customer Support • Internal Tools • Q&A",
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    description: "Streamline your social presence with intelligent content scheduling, engagement tracking, and automated responses.",
    highlight: "Scheduling • Analytics • Engagement",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Automation Solutions That Drive Results
          </h2>
          <p className="text-muted-foreground text-lg">
            We specialize in building custom automation workflows tailored to your specific business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card-gradient rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-elegant"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Highlight */}
              <span className="text-xs font-medium text-accent">
                {service.highlight}
              </span>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
