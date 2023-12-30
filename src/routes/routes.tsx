import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ExercisesPage from "../pages/ExercisesPage/ExercisesPage";
import HomePage from "../pages/HomePage/HomePage";
import workoutsRoutes from "./workouts.routes";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
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
