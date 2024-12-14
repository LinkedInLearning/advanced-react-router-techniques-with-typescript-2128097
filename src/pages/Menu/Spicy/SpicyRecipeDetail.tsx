import { useParams } from "react-router-dom";
import styled from "styled-components";

type Recipe = {
  title: string;
  description: string;
};

type RecipeMap = {
  [key: string]: Recipe;
};


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

const SpicyRecipeDetail: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();

  const recipe = recipeId ? spicyRecipes[recipeId] : null;

  // Handle invalid recipe IDs
  if (!recipe) {
    return <NotFoundMessage>Recipe not found</NotFoundMessage>;
  }

  return (
    <RecipeContainer>
      <Title>{recipe.title}</Title>
      <Description>{recipe.description}</Description>
    </RecipeContainer>
  );
};

export default SpicyRecipeDetail;
