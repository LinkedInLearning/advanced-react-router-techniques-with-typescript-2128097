import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.5;
  text-align: center;
`;

const StyledRecipeList = styled.ul`
  list-style: none;
  margin-top: 2rem;
  padding: 0;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const RecipeItem = styled.li`
  flex: 1 1 calc(33% - 2rem);
  min-width: 100px;
  max-width: 200px;
  padding: 1.5rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  button {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold; 
    width: 100%;
    border: none;
  }
`;

type Recipe = {
  strMeal: string;
  idMeal: string;
  strMealThumb: string;
};

const Intercontinental: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleViewInfo = (recipe: Recipe) => {
    navigate("/menu/intercontinental/recipe-info", { state: { recipe } });
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();

        if (!data.meals || data.meals.length === 0) {
          throw new Error("No recipes found");
        }

        console.log(">> Intercontinental Recipes:", data.meals);
        setRecipes(data.meals);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <p>Loading intercontinental recipes...</p>;
  }

  if (error) {
    return <p>Error loading recipes: {error}</p>;
  }

  return (
    <Container>
      <Title>Intercontinental Recipes</Title>
      <Description>
        Discover a variety of delicious dishes from all over the world. Perfect
        for adventurous food lovers and culinary explorers.
      </Description>
      <StyledRecipeList>
      {recipes.slice(0, 6).map((recipe) => (
          <RecipeItem key={recipe.idMeal}>
            <button onClick={() => handleViewInfo(recipe)}>
              {recipe.strMeal}
            </button>
          </RecipeItem>
        ))}
      </StyledRecipeList>
      <Outlet />
    </Container>
  );
};

export default Intercontinental;
