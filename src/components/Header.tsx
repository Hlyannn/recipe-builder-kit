import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-semibold text-foreground">
              Recipe Guide
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#recipes" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Recipes
            </a>
            <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Categories
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              About
            </a>
          </div>
          
          <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
            Get the Book
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
