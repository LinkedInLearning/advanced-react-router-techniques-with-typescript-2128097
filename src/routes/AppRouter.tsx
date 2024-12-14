import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Menu from "../pages/Menu"
import Spicy from "../pages/Menu/Spicy"
import QuickEasy from "../pages/Menu/QuickEasy"
import FamilyFriendly from "../pages/Menu/FamilyFriendly"
import Vegan from "../pages/Menu/Vegan"
import Intercontinental from "../pages/Menu/Intercontinental"
import SpicyRecipeDetail from "../pages/Menu/Spicy/SpicyRecipeDetail"

const AppRouter = () => {
  const location = useLocation();

  return (
    <Layout>
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="menu" element={<Menu />}>
        <Route path="spicy" element={<Spicy />}>
          <Route path=":recipeId" element={<SpicyRecipeDetail />} />
        </Route>
        <Route path="quick-easy" element={<QuickEasy />} />
        <Route path="family-friendly" element={<FamilyFriendly />} />
        <Route path="vegan" element={<Vegan />} />
        <Route path="intercontinental" element={<Intercontinental />} />
      </Route>

        <Route
          path="dashboard"
          element={
              <Dashboard />
          }
        />
        <Route
          path="profile"
          element={
              <Profile />
          }
        />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
