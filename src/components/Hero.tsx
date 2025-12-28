import { ChefHat, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-herb/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-8 opacity-0 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-secondary-foreground">
              Beginner-Friendly Recipes
            </span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 opacity-0 animate-fade-up stagger-1">
            Simple Recipes,
            <br />
            <span className="text-accent">Delicious Results</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up stagger-2">
            A curated collection of easy-to-follow drink and smoothie recipes. 
            Clear instructions, precise measurements, and professional tips for perfect results every time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-3">
            <a
              href="#recipes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <ChefHat className="w-5 h-5" />
              Explore Recipes
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
            >
              Learn More
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-10 border-t border-border opacity-0 animate-fade-up stagger-4">
            <div>
              <div className="font-heading text-3xl font-semibold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Recipes</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-semibold text-foreground">5 min</div>
              <div className="text-sm text-muted-foreground mt-1">Avg Prep</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-semibold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Tested</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
