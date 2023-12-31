import { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useParams } from "react-router-dom";
import { getWorkout } from "../../../api/workouts";
import WorkoutDetailsTab from "./components/WorkoutDetailsTab/WorkoutDetailsTab";
import WorkoutExercisesTab from "./components/WorkoutExercisesTab/WorkoutExercisesTab";
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
      <Tabs defaultActiveKey="exercises" id="workout-tabs" fill>
        <Tab eventKey="exercises" title="Exercises">
          <WorkoutExercisesTab />
        </Tab>
        <Tab eventKey="details" title="Details">
          <WorkoutDetailsTab />
        </Tab>
      </Tabs>
    </>
  );
}
