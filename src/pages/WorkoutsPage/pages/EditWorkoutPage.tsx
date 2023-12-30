import { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useParams } from "react-router-dom";
import { getWorkout } from "../../../api/workouts";
import { useWorkoutContext } from "./hooks/useWorkoutContext";

export default function EditWorkoutPage() {
  const { id } = useParams();
  const { workout, setWorkout } = useWorkoutContext();

  useEffect(() => {
    if (id) {
      getWorkout(id).then((workout) => setWorkout(workout));
    }
  }, [id, setWorkout]);

  if (!workout) return <>Loading...</>;

  return (
    <>
      <h1 className="h2">{workout.name}</h1>
      <hr />
      <Tabs defaultActiveKey="details" id="workout-tabs" fill>
        <Tab eventKey="details" title="Details">
          <p>{workout.description}</p>
        </Tab>
        <Tab eventKey="exercises" title="Exercises">
          <p>Exercises</p>
        </Tab>
      </Tabs>
    </>
  );
}
