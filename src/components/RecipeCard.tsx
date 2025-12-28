import { Clock, Users } from "lucide-react";

interface Ingredient {
  amount: string;
  name: string;
}

interface IngredientGroup {
  label?: string;
  ingredients: Ingredient[];
}

interface Recipe {
  id: number;
  title: string;
  description: string;
  category: string;
  prepTime: string;
  servings: string;
  image: string;
  ingredients: Ingredient[] | IngredientGroup[];
  instructions: string[];
  tips?: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

const RecipeCard = ({ recipe, index }: RecipeCardProps) => {
  return (
    <article 
      className={`recipe-card opacity-0 animate-fade-up stagger-${(index % 4) + 1}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="badge-category">{recipe.category}</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {recipe.prepTime}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            {recipe.servings}
          </span>
        </div>
        
        <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-5 text-foreground">
          {recipe.title}
        </h3>
        
        {/* Instructions */}
        <div className="mb-6">
          <h4 className="font-heading text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-herb"></span>
            Instructions
          </h4>
          <ol className="space-y-4">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="step-number">{i + 1}</span>
                <p className="text-foreground leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        
        {/* Ingredients */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Ingredients
          </h4>
          <ul className="space-y-0">
            {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 && 'label' in recipe.ingredients[0] ? (
              // Flatten grouped ingredients into a simple list
              (recipe.ingredients as IngredientGroup[]).flatMap((group) => 
                group.ingredients.map((ingredient, i) => (
                  <li key={i} className="ingredient-item">
                    <span className="font-medium text-primary min-w-[80px]">
                      {ingredient.amount}
                    </span>
                    <span className="text-foreground">{ingredient.name}</span>
                  </li>
                ))
              )
            ) : (
              // Simple ingredients list
              (recipe.ingredients as Ingredient[]).map((ingredient, i) => (
                <li key={i} className="ingredient-item">
                  <span className="font-medium text-primary min-w-[80px]">
                    {ingredient.amount}
                  </span>
                  <span className="text-foreground">{ingredient.name}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
