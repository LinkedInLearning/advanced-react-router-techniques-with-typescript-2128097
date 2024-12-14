import { useParams } from "react-router-dom";
import styled from "styled-components";

// Types
type Recipe = {
  title: string;
  description: string;
};

type RecipeMap = {
  [key: string]: Recipe;
};

// Sample Data
const spicyRecipes: RecipeMap = {
  "spicy-jollof": {
    title: "Spicy Jollof",
    description: "A Nigerian classic, featuring flavorful rice cooked with tomatoes, peppers, and spices.",
  },
  "chicken-pepper-soup": {
    title: "Chicken Pepper Soup",
    description: "A light, spicy soup packed with chicken, chili peppers, and aromatic spices.",
  },
  "spicy-curry-sauce": {
    title: "Spicy Curry Sauce",
    description: "A rich, fiery curry sauce perfect for pairing with rice or yams.",
  },
};

// Styled Components
const RecipeContainer = styled.div`
  padding: 1rem;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  color: #666;
`;

const NotFoundMessage = styled.h2`
  font-size: 1.5rem;
  color: red;
  text-align: center;
`;

// Component
const SpicyRecipeDetail: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();

  // Fetch the recipe data
  const recipe = recipeId ? spicyRecipes[recipeId] : null;

  // Handle invalid recipe IDs
  if (!recipe) {
    return <NotFoundMessage>Recipe not found</NotFoundMessage>;
  }

  // Render the recipe details
  return (
    <RecipeContainer>
      <Title>{recipe.title}</Title>
      <Description>{recipe.description}</Description>
    </RecipeContainer>
  );
};

export default SpicyRecipeDetail;
