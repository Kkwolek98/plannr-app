import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { ExerciseSet, Workout } from "../../../../types/workout";

const WorkoutContext = createContext<
  | {
      workout: Workout | undefined;
      setWorkout: (workout: Workout | undefined) => void;
      setExerciseSet: (setId: string, exerciseSet: ExerciseSet) => void;
      selectedSet: ExerciseSet | undefined;
      setSelectedSet: Dispatch<SetStateAction<ExerciseSet | undefined>>;
      removeExerciseSet: (setId: string) => void;
      removeSetItem: (itemId: string) => void;
    }
  | undefined
>(undefined);

const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
  workout: Workout | undefined;
}) => {
  const [workout, _setWorkout] = useState<Workout>();
  const [_selectedSet, setSelectedSet] = useState<ExerciseSet>();

  const setWorkout = useCallback((workout: Workout | undefined) => {
    if (!workout) {
      _setWorkout(undefined);
      setSelectedSet(undefined);
      return;
    }

    workout.sets = workout.sets?.sort((a, b) => a.sort - b.sort);

    _setWorkout(workout);
    setSelectedSet(undefined);
  }, []);

  const setExerciseSet = (setId: string, exerciseSet: ExerciseSet) => {
    _setWorkout((prev) => {
      if (!prev) return prev;

      const foundSetIndex = prev.sets?.findIndex((set) => set.id === setId);

      if (foundSetIndex === -1) return prev;

      prev.sets![foundSetIndex] = exerciseSet;

      return { ...prev };
    });
  };

  const removeExerciseSet = (setId: string) => {
    _setWorkout((prev) => {
      if (!prev) return prev;

      prev.sets = prev.sets.filter((set) => set.id !== setId);

      return { ...prev };
    });
  };

  const removeSetItem = (itemId: string) => {
    _setWorkout((prev) => {
      if (!prev) return prev;

      prev.sets?.forEach((set) => {
        set.setItems = set.setItems.filter((item) => item.id !== itemId);
      });

      return { ...prev };
    });
  };

  const selectedSet = workout?.sets?.find((set) => set.id === _selectedSet?.id);

  const context = {
    workout,
    setWorkout,
    setExerciseSet,
    removeExerciseSet,
    removeSetItem,
    selectedSet,
    setSelectedSet,
  };

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
