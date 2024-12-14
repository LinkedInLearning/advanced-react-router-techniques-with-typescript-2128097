import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  min-width: 250px;
  max-width: 300px;
  padding: 1.5rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
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

const DynamicLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  
  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;

interface Recipe {
  idMeal: string;
  strMeal: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.idMeal}>
          <DynamicLink to={`${recipe.idMeal}`}>{recipe.strMeal}</DynamicLink>
        </RecipeItem>
      ))}
    </StyledRecipeList>
  );
};
