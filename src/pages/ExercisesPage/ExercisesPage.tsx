import useExercises from "../../hooks/useExercises";
import ExerciseCardGrid from "./components/ExerciseCardGrid/ExerciseCardGrid";

export default function ExercisesPage() {
  const exercises = useExercises();

  console.log(exercises);
  return (
    <>
      <ExerciseCardGrid exercises={exercises} />
    </>
  );
}
