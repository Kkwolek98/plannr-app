import useExercises from "../../hooks/useExercises";
import ExerciseCardGrid from "./components/ExerciseCardGrid/ExerciseCardGrid";
import ExercisesTopBar from "./components/ExercisesTopBar/ExercisesTopBar";

export default function ExercisesPage() {
  const exercises = useExercises();

  console.log(exercises);
  return (
    <>
      <ExercisesTopBar />
      <ExerciseCardGrid exercises={exercises} />
    </>
  );
}
