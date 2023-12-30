import { RouteObject } from "react-router-dom";
import WorkoutsPage from "../pages/WorkoutsPage/WorkoutsPage";
import EditWorkoutPage from "../pages/WorkoutsPage/pages/EditWorkoutPage";
import { WorkoutProvider } from "../pages/WorkoutsPage/pages/hooks/useWorkoutContext";
import { Workout } from "../types/workout";

const workoutsRoutes: RouteObject[] = [
  {
    path: "",
    element: <WorkoutsPage />,
  },
  {
    path: ":id/edit",
    element: (
      <WorkoutProvider workout={{} as Workout}>
        <EditWorkoutPage />
      </WorkoutProvider>
    ),
  },
];

export default workoutsRoutes;
