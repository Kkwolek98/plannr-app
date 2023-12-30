import CardGrid from "../../components/CardGrid/CardGrid";
import TopBar from "../../components/Page/TopBar/TopBar";
import useExercises from "../../hooks/useExercises";
import ExerciseCard from "./components/ExerciseCard/ExerciseCard";
import NewExerciseModal from "./components/NewExerciseModal/NewExerciseModal";

export default function ExercisesPage() {
  const exercises = useExercises();

  return (
    <>
      <TopBar
        searchBarTitle="Search for exercises..."
        NewResourceModal={NewExerciseModal}
      />
      <CardGrid data={exercises} CardComponent={ExerciseCard} />
    </>
  );
}
