import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-7 h-7" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Recipe Guide Book
          </h2>
          
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 leading-relaxed">
            A carefully curated collection of beginner-friendly recipes with clear instructions, 
            precise measurements, and professional tips for perfect results.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-12">
            <a href="#recipes" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Recipes
            </a>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/30"></span>
            <a href="#categories" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Categories
            </a>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/30"></span>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <div className="pt-8 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/50 flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent" /> for home chefs everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
