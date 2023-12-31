import { Accordion, Button } from "react-bootstrap";
import { ExerciseSet } from "../../../../../../../types/workout";
import NoExercises from "./components/NoExercises/NoExercises";

type ExerciseSetProps = {
  set: ExerciseSet;
};

export default function ExerciseSetComponent({ set }: ExerciseSetProps) {
  const addExercise = () => {};
  return (
    <Accordion.Item eventKey={set.id}>
      <Accordion.Header>{set.name}</Accordion.Header>
      <Accordion.Body>
        {set.setItems?.length === 0 && <NoExercises />}
        <div className="d-flex justify-content-center mt-2">
          <Button onClick={addExercise}>Add new</Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
