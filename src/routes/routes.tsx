import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ExercisesPage from "../pages/ExercisesPage/ExercisesPage";
import HomePage from "../pages/HomePage/HomePage";
import WorkoutsPage from "../pages/WorkoutsPage/WorkoutsPage";

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
        element: <WorkoutsPage />,
      },
    ],
  },
];

export default routes;
