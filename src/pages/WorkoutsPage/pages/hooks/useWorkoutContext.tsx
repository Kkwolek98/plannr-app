import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ExerciseSet, Workout } from "../../../../types/workout";

const WorkoutContext = createContext<
  | {
      workout: Workout | undefined;
      setWorkout: Dispatch<SetStateAction<Workout | undefined>>;
      setExerciseSet: (setId: string, exerciseSet: ExerciseSet) => void;
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

  const setExerciseSet = (setId: string, exerciseSet: ExerciseSet) => {
    setWorkout((prev) => {
      if (!prev) return prev;

      const foundSetIndex = prev.sets?.findIndex((set) => set.id === setId);

      if (foundSetIndex === -1) return prev;

      prev.sets![foundSetIndex] = exerciseSet;

      return { ...prev };
    });
  };

  const context = { workout, setWorkout, setExerciseSet };

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
