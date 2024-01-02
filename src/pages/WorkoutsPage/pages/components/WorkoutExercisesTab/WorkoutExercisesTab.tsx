import { Accordion } from "react-bootstrap";
import { useWorkoutContext } from "../../hooks/useWorkoutContext";
import ExerciseSetComponent from "./components/ExerciseSetComponent/ExerciseSetComponent";

export default function WorkoutExercisesTab() {
  const { workout } = useWorkoutContext();
  return (
    <Accordion>
      {workout!.sets.map((set, index) => (
        <ExerciseSetComponent index={index} set={set} key={set.id} />
      ))}
    </Accordion>
  );
}
