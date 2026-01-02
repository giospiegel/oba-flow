import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-3xl bg-primary p-10 md:p-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Automate Your Workflow?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                Let's discuss how custom automation solutions can transform your operations 
                and free up your time for what matters most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="xl" 
                  className="bg-accent-foreground text-primary hover:bg-accent-foreground/90 font-semibold"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </Button>
                <Button 
                  size="xl" 
                  variant="outline"
                  className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold bg-transparent"
                >
                  <Mail className="w-5 h-5" />
                  E-Mail Us
                </Button>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Free Consultation</h3>
              <p className="text-sm text-muted-foreground">
                Discuss your needs with no obligation
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Every automation is tailored to you
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Ongoing Support</h3>
              <p className="text-sm text-muted-foreground">
                Continuous optimization and updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
