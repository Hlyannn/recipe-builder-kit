import { useState } from "react";
import { BookOpen } from "lucide-react";
import CategoryFilter from "@/components/CategoryFilter";
import RecipeCard from "@/components/RecipeCard";
import { recipes, categories } from "@/data/recipes";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRecipes = activeCategory === "All"
    ? recipes
    : recipes.filter((recipe) => recipe.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center h-16 md:h-20">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-semibold text-foreground">
                Recipe Guide
              </span>
            </a>
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
            <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
              Clear instructions, precise measurements, and tips for perfect results.
            </p>
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
