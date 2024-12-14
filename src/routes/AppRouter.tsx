import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./PrivateRoutes";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Layout from "../components/Layout";
import Menu from "../pages/Menu"
import Spicy from "../pages/Menu/Spicy"
import QuickEasy from "../pages/Menu/QuickEasy"
import FamilyFriendly from "../pages/Menu/FamilyFriendly"
import Vegan from "../pages/Menu/Vegan"
import Intercontinental from "../pages/Menu/Intercontinental"
import RecipeDetail from "../components/RecipeDetail"

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));

const AppRouter = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingSpinner size={60} color="#FF6347" speed={2} />}>
      <Layout>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="menu" element={<Menu />}>
            <Route path="spicy" element={<Spicy />}>
              <Route path=":recipeId" element={<RecipeDetail />} />
            </Route>
            <Route path="vegan" element={<Vegan />}>
              <Route path=":recipeId" element={<RecipeDetail />} />
            </Route>
            <Route path="quick-easy" element={<QuickEasy />} />
            <Route path="family-friendly" element={<FamilyFriendly />} />
            <Route path="intercontinental" element={<Intercontinental />} />
          </Route>

          <Route path="dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute> }/>
          <Route path="profile" element={ <ProtectedRoute><Profile /></ProtectedRoute> } />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default AppRouter;
