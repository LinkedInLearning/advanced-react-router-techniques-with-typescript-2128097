import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ProtectedRoute } from "./PrivateRoutes";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { CustomErrorBoundary } from "../components/CustomErrorBoundary";
import { RecipeInfo } from "../components/RecipeInfo";
import Layout from "../components/Layout";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));

const Menu = lazy(() => import("../pages/Menu"));
const QuickEasy = lazy(() => import("../pages/Menu/QuickEasy"));
const Spicy = lazy(() => import("../pages/Menu/Spicy"));
const FamilyFriendly = lazy(() => import("../pages/Menu/FamilyFriendly"));
const Vegan = lazy(() => import("../pages/Menu/Vegan"));
const Intercontinental = lazy(() => import("../pages/Menu/Intercontinental"));
const RecipeDetail = lazy(() => import("../components/RecipeDetail"));

const AppRouter = () => {
  const location = useLocation();

  return (
    <CustomErrorBoundary>
      <Suspense fallback={<LoadingSpinner size={60} color="#FF6347" speed={2} />}>
        <Layout>
        <TransitionGroup>
          {/* classNames={location.pathname === '/profile' ? 'slide' : 'fade'} */}
            <CSSTransition classNames="fade" timeout={300}>
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
                <Route path="intercontinental" element={<Intercontinental />} >
                  <Route path="recipe-info" element={<RecipeInfo />} />
                </Route>
              </Route>

              <Route path="dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute> }/>
              <Route path="profile" element={ <ProtectedRoute><Profile /></ProtectedRoute> } />
            </Routes>
            </CSSTransition>
          </TransitionGroup>
        </Layout>
      </Suspense>
    </CustomErrorBoundary>
  );
};

export default AppRouter;
