import { useState } from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import { useWorkoutContext } from "../../hooks/useWorkoutContext";
import "./WorkoutExercisesTab.scss";
import WBSet from "./components/WBSet/WBSet";
import WBNewSet from "./components/WBSet/components/WBNewSet/WBNewSet";
import WBSidebar from "./components/WBSidebar/WBSidebar";

export default function WorkoutExercisesTab() {
  const { workout } = useWorkoutContext();
  const [addingNewSet, setAddingNewSet] = useState(false);

  return (
    <Row>
      <Col xl={9}>
        <Accordion>
          {workout!.sets.map((set, index) => (
            <WBSet index={index} set={set} key={set.id} />
          ))}
          {!addingNewSet ? (
            <>
              <div className="d-flex justify-content-center mt-2">
                <Button onClick={() => setAddingNewSet(true)}>
                  Add new set
                </Button>
              </div>
            </>
          ) : (
            <WBNewSet
              index={workout!.sets.length}
              close={() => setAddingNewSet(false)}
            />
          )}
        </Accordion>
      </Col>
      <Col>
        <WBSidebar />
      </Col>
    </Row>
  );
}
