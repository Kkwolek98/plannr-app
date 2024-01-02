import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useWorkoutContext } from "../../hooks/useWorkoutContext";
import ExerciseSetComponent from "./components/ExerciseSetComponent/ExerciseSetComponent";
import NewExerciseSet from "./components/ExerciseSetComponent/components/NewExerciseSet/NewExerciseSet";

export default function WorkoutExercisesTab() {
  const { workout } = useWorkoutContext();
  const [addingNewSet, setAddingNewSet] = useState(false);

  return (
    <Accordion>
      {workout!.sets.map((set, index) => (
        <ExerciseSetComponent index={index} set={set} key={set.id} />
      ))}
      {!addingNewSet ? (
        <>
          <div className="d-flex justify-content-center mt-2">
            <Button onClick={() => setAddingNewSet(true)}>Add new set</Button>
          </div>
        </>
      ) : (
        <NewExerciseSet
          index={workout!.sets.length}
          close={() => setAddingNewSet(false)}
        />
      )}
    </Accordion>
  );
}
