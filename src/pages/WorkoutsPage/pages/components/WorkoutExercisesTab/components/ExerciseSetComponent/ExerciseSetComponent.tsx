import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { ExerciseSet } from "../../../../../../../types/workout";
import NewSetItem from "./components/NewSetItem/NewSetItem";
import NoExercises from "./components/NoExercises/NoExercises";
import SetItemComponent from "./components/SetItemComponent/SetItemComponent";

type ExerciseSetProps = {
  set: ExerciseSet;
};

export default function ExerciseSetComponent({ set }: ExerciseSetProps) {
  const [showAddExercise, setShowAddExercise] = useState(false);
  const addExercise = () => {
    setShowAddExercise(true);
  };
  return (
    <Accordion.Item eventKey={set.id}>
      <Accordion.Header>{set.name}</Accordion.Header>
      <Accordion.Body>
        {set.setItems?.map((setItem, index) => (
          <SetItemComponent
            setItem={setItem}
            index={index}
            className="mb-2"
            key={setItem.id}
          />
        ))}
        {set.setItems?.length === 0 && !showAddExercise && <NoExercises />}
        <hr />
        {showAddExercise ? (
          <NewSetItem set={set} close={() => setShowAddExercise(false)} />
        ) : (
          <div className="d-flex justify-content-center mt-2">
            <Button onClick={addExercise}>Add new</Button>
          </div>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}
