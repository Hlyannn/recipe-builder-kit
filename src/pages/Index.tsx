import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import RecipeCard from "@/components/RecipeCard";
import Footer from "@/components/Footer";
import { recipes, categories } from "@/data/recipes";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRecipes = activeCategory === "All"
    ? recipes
    : recipes.filter((recipe) => recipe.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main id="recipes" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground mb-4 opacity-0 animate-fade-up">
              Featured Recipes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
              Each recipe includes precise measurements, clear step-by-step instructions, 
              and professional tips for perfect results.
            </p>
          </div>
          
          <div id="categories">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
          
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
      
      <Footer />
    </div>
  );
};

export default Index;
