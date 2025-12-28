import { useState } from "react";
import { BookOpen, Search } from "lucide-react";
import CategoryFilter from "@/components/CategoryFilter";
import RecipeCard from "@/components/RecipeCard";
import ThemeToggle from "@/components/ThemeToggle";
import { recipes, categories } from "@/data/recipes";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = activeCategory === "All" || recipe.category === activeCategory;
    
    // Handle search - check if ingredients are grouped or simple
    let matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (searchQuery && recipe.ingredients.length > 0) {
      // Check if ingredients are grouped (have 'label' property)
      if ('label' in recipe.ingredients[0]) {
        // Grouped ingredients - flatten and search
        const allIngredients = (recipe.ingredients as Array<{ label?: string; ingredients: Array<{ amount: string; name: string }> }>)
          .flatMap(group => group.ingredients);
        matchesSearch = matchesSearch || allIngredients.some(ing => 
          ing.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else {
        // Simple ingredients array
        matchesSearch = matchesSearch || (recipe.ingredients as Array<{ amount: string; name: string }>)
          .some(ing => ing.name.toLowerCase().includes(searchQuery.toLowerCase()));
      }
    }
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-semibold text-foreground">
                Recipe Guide
              </span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      {/* Recipes Section */}
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h1 className="section-title text-foreground mb-4 opacity-0 animate-fade-up">
              Recipe Collection
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mt-6 opacity-0 animate-fade-up stagger-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search recipes or ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
          </div>
          
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>
          
          {filteredRecipes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No recipes found in this category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
