import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Workout } from "../../../../types/workout";

const WorkoutContext = createContext<
  | {
      workout: Workout | undefined;
      setWorkout: Dispatch<SetStateAction<Workout | undefined>>;
    }
  | undefined
>(undefined);

const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
  workout: Workout | undefined;
}) => {
  const [workout, setWorkout] = useState<Workout>();

  const context = { workout, setWorkout };

  return (
    <WorkoutContext.Provider value={context}>
      {children}
    </WorkoutContext.Provider>
  );
};

const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkoutContext must be used within a WorkoutProvider");
  }
  return context;
};

export { WorkoutProvider, useWorkoutContext };
