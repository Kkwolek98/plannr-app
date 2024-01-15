import { RouteObject } from "react-router-dom";
import GuardedRoute from "../components/GuardedRoute/GuardedRoute";
import Layout from "../components/Layout/Layout";
import ExercisesPage from "../pages/ExercisesPage/ExercisesPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import workoutsRoutes from "./workouts.routes";

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <GuardedRoute>
        <Layout />
      </GuardedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/exercises",
        element: <ExercisesPage />,
      },
      {
        path: "/workouts",
        children: workoutsRoutes,
      },
    ],
  },
];

export default routes;
