import { useMemo, useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { ExerciseSet } from "../../../../../../../types/workout";
import { useWorkoutContext } from "../../../../hooks/useWorkoutContext";
import WBNewSetItem from "./components/WBNewSetItem/WBNewSetItem";
import WBNoExercises from "./components/WBNoExercises/WBNoExercises";
import WBSetHeader from "./components/WBSetHeader/WBSetHeader";
import WBSetItem from "./components/WBSetItem/WBSetItem";

type ExerciseSetProps = {
  set: ExerciseSet;
  index: number;
};

export default function WBSet({ set, index }: ExerciseSetProps) {
  const { selectedSet, setSelectedSet } = useWorkoutContext();
  const setLetter = useMemo(() => String.fromCharCode(65 + index), [index]);
  const [showAddExercise, setShowAddExercise] = useState(false);
  const addExercise = () => {
    setShowAddExercise(true);
  };

  return (
    <Accordion.Item eventKey={set.id}>
      <WBSetHeader
        set={set}
        setLetter={setLetter}
        eventKey={set.id}
        onClick={() => {
          selectedSet?.id === set.id
            ? setSelectedSet(undefined)
            : setSelectedSet(set);
        }}
      />
      <Accordion.Body>
        {set.setItems?.map((setItem, index) => (
          <WBSetItem
            setLetter={setLetter}
            setItem={setItem}
            index={index}
            className="mb-2"
            key={setItem.id}
          />
        ))}
        {set.setItems?.length === 0 && !showAddExercise && <WBNoExercises />}
        <hr />
        {showAddExercise ? (
          <WBNewSetItem set={set} close={() => setShowAddExercise(false)} />
        ) : (
          <div className="d-flex justify-content-center mt-2">
            <Button onClick={addExercise}>Add new</Button>
          </div>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}
