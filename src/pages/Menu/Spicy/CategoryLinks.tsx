import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const RecipeItem = styled.li`
  margin: 0.5rem 0;
  font-size: 1.2rem;
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

interface CategoryLinksProps {
  categories: string[];
  basePath: string;
}

// Helper function to slugify category names
const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

export const CategoryLinks: React.FC<CategoryLinksProps> = ({ categories, basePath }) => {
  return (
    <RecipeList>
      {categories.map((category) => (
        <RecipeItem key={category}>
          <DynamicLink to={`${basePath}/${slugify(category)}`}>{category}</DynamicLink>
        </RecipeItem>
      ))}
    </RecipeList>
  );
};
