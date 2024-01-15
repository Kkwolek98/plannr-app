import { Formik } from "formik";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { updateWorkout$ } from "../../../../../api/workouts";
import { useToast } from "../../../../../contexts/useToast";
import { Workout } from "../../../../../types/workout";
import { useWorkoutContext } from "../../hooks/useWorkoutContext";

export default function WorkoutDetailsTab() {
  const { workout, setWorkout } = useWorkoutContext();
  const { displayToast } = useToast();

  const submitForm = (values: Workout) => {
    updateWorkout$(values)
      .then((workout) => {
        setWorkout(workout);
        displayToast({
          type: "success",
          title: "Workout updated successfully",
        });
      })
      .catch((error) => {
        displayToast({
          type: "danger",
          title: "Workout update failed",
          message: error?.message,
        });
      });
  };

  return (
    <Formik initialValues={workout!} onSubmit={submitForm}>
      {({ values, handleChange, handleSubmit, resetForm, dirty }) => (
        <Form onSubmit={handleSubmit} className="py-2">
          <Row className="mb-2">
            <Col xl={6} md={6} sm={12}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Enter workout name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-4">
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={values.description}
                as="textarea"
                onChange={handleChange}
                placeholder="Enter workout description"
              />
            </Form.Group>
          </Row>
          <Row>
            <Stack direction="horizontal">
              <Button
                variant="secondary"
                type="submit"
                disabled={!dirty}
                className="ms-auto me-2"
                onClick={() => resetForm()}
              >
                Reset
              </Button>
              <Button variant="primary" type="submit" disabled={!dirty}>
                Save
              </Button>
            </Stack>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
