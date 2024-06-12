import "./App.css";
import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import PrepTime from "./components/PrepTime";
import RecipeOverview from "./components/RecipeOverview";

function App() {
  const recipe = {
    title: "Simple Omelette Recipe",
    details:
      "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
    preparation: {
      total: 10,
      preparation: 5,
      cooking: 5,
    },
    ingredients: [
      "2-3 large eggs",
      "Salt, to taste",
      "Pepper, to taste",
      "1 tablespoon of butter or oil",
      "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    ],
    instructions: [
      {
        description: "Beat the eggs",
        instruction:
          "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
      },
      {
        description: "Heat the pan",
        instruction:
          "Place a non-stick frying pan over medium heat and add butter or oil.",
      },
      {
        description: "Cook the omelette",
        instruction:
          "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
      },
      {
        description: "Add fillings (optional)",
        instruction:
          "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
      },
      {
        description: "Fold and serve",
        instruction:
          "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
      },
      {
        description: "Enjoy",
        instruction: "Serve hot, with additional salt and pepper if needed.",
      },
    ],
    nutrition: {
      calories: "277kcal",
      carbs: "0g",
      protein: "20g",
      fat: "22g",
    },
  };

  return (
    <div className="lg:py-10 lg:px-[400px]">
      <Hero />
      <div className="flex flex-col space-y-10 px-10 lg:px-0">
        <RecipeOverview title={recipe.title} details={recipe.details} />
        <PrepTime data={recipe.preparation} />
        <Ingredients data={recipe.ingredients} />
        <hr className="border border-lightGrey" />
        <Instructions data={recipe.instructions} />
        <hr className="border border-lightGrey" />
        <Nutrition data={recipe.nutrition} />
      </div>
    </div>
  );
}

export default App;
