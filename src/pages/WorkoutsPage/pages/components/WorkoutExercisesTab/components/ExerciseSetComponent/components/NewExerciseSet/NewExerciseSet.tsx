import { Formik } from "formik";
import { useMemo } from "react";
import { Accordion, Button, Form, Stack } from "react-bootstrap";
import { addNewSet } from "../../../../../../../../../api/workouts";
import { useWorkoutContext } from "../../../../../../hooks/useWorkoutContext";

type NewExerciseSetProps = {
  close: () => void;
  index: number;
};

const initialValues = {
  name: "",
};

type FormValues = typeof initialValues;

export default function NewExerciseSet({ close, index }: NewExerciseSetProps) {
  const { workout, setWorkout } = useWorkoutContext();
  const setLetter = useMemo(() => String.fromCharCode(65 + index), [index]);
  const addSet = (values: FormValues) => {
    addNewSet(workout!.id, values).then((res) => {
      setWorkout({ ...res });
      close();
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={addSet}>
      {({ values, handleChange, handleSubmit }) => (
        <Accordion.Item eventKey="new">
          <Accordion.Header>
            <Form onSubmit={handleSubmit} className="d-flex w-100">
              <div className="d-flex align-items-center">{setLetter}.</div>
              <div className="d-flex align-items-center px-2 w-100">
                <Form.Control
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Set name"
                />
              </div>
              <Stack className="px-2">
                <Button className="mb-2" type="submit">
                  Add
                </Button>
                <Button variant="secondary" onClick={close}>
                  Cancel
                </Button>
              </Stack>
            </Form>
          </Accordion.Header>
        </Accordion.Item>
      )}
    </Formik>
  );
}
