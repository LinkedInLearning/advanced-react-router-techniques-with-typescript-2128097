import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { RecipeList } from "../../../components/RecipeList";

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

type Recipe = {
  strMeal: string;
  idMeal: string;
};

const Spicy: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();

        if (!data.meals || data.meals.length === 0) {
          throw new Error("No recipes found for this category");
        }
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
    return <p>Loading spicy recipes...</p>;
  }

  if (error) {
    return <p>Error loading recipes: {error}</p>;
  }

  return (
    <Container>
      <Title>Spicy Recipes</Title>
      <Description>
        Turn up the heat with these spicy recipes that will ignite your taste buds. 
        From mild to blazing, find the perfect level of spice!
      </Description>
      <RecipeList recipes={recipes}/>
      <Outlet />
    </Container>
  );
};

export default Spicy;
