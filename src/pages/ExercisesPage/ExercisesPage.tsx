import TopBar from "../../components/Page/TopBar/TopBar";
import useExercises from "../../hooks/useExercises";
import ExerciseCardGrid from "./components/ExerciseCardGrid/ExerciseCardGrid";
import NewExerciseModal from "./components/NewExerciseModal/NewExerciseModal";

export default function ExercisesPage() {
  const exercises = useExercises();

  return (
    <>
      <TopBar
        searchBarTitle="Search for exercise..."
        NewResourceModal={NewExerciseModal}
      />
      <ExerciseCardGrid exercises={exercises} />
    </>
  );
}
