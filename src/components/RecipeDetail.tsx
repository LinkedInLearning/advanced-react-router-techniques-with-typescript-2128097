import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

type Recipe = {
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  [key: string]: string;
};

const RecipeContainer = styled.div`
  padding: 1rem;
  font-family: Arial, sans-serif;
  display: flex;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #444;
`;

const SubsectionTitle = styled.h3`
  font-size: 1.25rem;
  color: #555;
`;

const Instructions = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
`;

const IngredientList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  li {
    font-size: 1rem;
    color: #555;
    margin: 0.25rem 0;
  }
`;

const LoadingMessage = styled.h2`
  font-size: 1.5rem;
  color: #555;
`;

const ErrorMessage = styled.h2`
  font-size: 1.5rem;
  color: red;
`;

const ImageWrapper = styled.div`
  min-width: 30%;
  margin-right: 50px;

`;

const SpicyRecipeDetail: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRecipe = async (id: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch recipe details");
      }
      const data = await response.json();
      if (!data.meals || data.meals.length === 0) {
        throw new Error("Recipe not found");
      }
      setRecipe(data.meals[0]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (recipeId) fetchRecipe(recipeId);
  }, [recipeId]);

  if (loading) {
    return <LoadingMessage>Fetching recipe details......</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Recipe not found.</ErrorMessage>;
  }

  return (
    <RecipeContainer>
      <ImageWrapper>
        <Title>{recipe?.strMeal}</Title>
        <Image src={recipe?.strMealThumb} alt={recipe?.strMeal} />
      </ImageWrapper>
      <div>
        <Subtitle>Category: {recipe?.strCategory}</Subtitle>
        <SubsectionTitle>Area: {recipe?.strArea}</SubsectionTitle>
        <Instructions>
          <strong>Instructions:</strong> {recipe?.strInstructions}
        </Instructions>
        <SubsectionTitle>Ingredients:</SubsectionTitle>
        <IngredientList>
          {Array.from({ length: 20 }).map((_, index) => {
            const ingredient = recipe?.[`strIngredient${index + 1}`];
            const measure = recipe?.[`strMeasure${index + 1}`];
            return (
              ingredient && (
                <li key={index}>
                  {ingredient} - {measure}
                </li>
              )
            );
          })}
        </IngredientList>
      </div>
    </RecipeContainer>
  );
};

export default SpicyRecipeDetail;
