import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

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

const RecipeList = styled.ul`
  list-style: none;
  margin-top: 2rem;
  padding: 0;
  width: 100%;
  max-width: 900px; // Adjust width to give more space
  display: flex;
  flex-wrap: wrap;
  gap: 2rem; // Increased gap for breathing room between items
  justify-content: center; // Center items
`;

const RecipeItem = styled.li`
  flex: 1 1 calc(33% - 2rem); // 3 items per row with spacing between
  min-width: 250px; // Ensures each item has a minimum width, preventing them from being too small
  max-width: 300px; // Limits max width for consistency
  padding: 1.5rem;
  border-radius: 12px; // Rounded corners
  background: ${({ theme }) => theme.colors.background}; // Background color of the recipe item
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // Soft shadow to give a card-like effect
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px); // Slightly lifts the item on hover
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); // More pronounced shadow on hover
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    display: inline-block;
    transition: background-color 0.3s ease, color 0.3s ease;
    width: 100%;
  }
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
      <RecipeList>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.idMeal}>
            <NavLink to={`${recipe.idMeal}`}>{recipe.strMeal}</NavLink>
          </RecipeItem>
        ))}
      </RecipeList>
      <Outlet />
    </Container>
  );
};

export default Spicy;
