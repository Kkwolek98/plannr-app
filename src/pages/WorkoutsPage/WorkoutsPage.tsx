import CardGrid from "../../components/CardGrid/CardGrid";
import TopBar from "../../components/Page/TopBar/TopBar";
import useWorkouts from "../../hooks/useWorkouts";
import NewWorkoutModal from "./components/NewWorkoutModal/NewWorkoutModal";
import WorkoutCard from "./components/WorkoutCard/WorkoutCard";

export default function WorkoutsPage() {
  const workouts = useWorkouts();

  return (
    <>
      <TopBar
        searchBarTitle="Search for workouts..."
        NewResourceModal={NewWorkoutModal}
      />
      <CardGrid data={workouts} CardComponent={WorkoutCard} />
    </>
  );
}
