import { RouteObject } from "react-router-dom";
import WorkoutsPage from "../pages/WorkoutsPage/WorkoutsPage";
import EditWorkoutPage from "../pages/WorkoutsPage/pages/EditWorkoutPage";

const workoutsRoutes: RouteObject[] = [
  {
    path: "",
    element: <WorkoutsPage />,
  },
  {
    path: ":id/edit",
    element: <EditWorkoutPage />,
  },
];

export default workoutsRoutes;
