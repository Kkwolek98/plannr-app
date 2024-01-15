import { Formik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createWorkout$ } from "../../../../api/workouts";
import { useToast } from "../../../../contexts/useToast";

type NewWorkoutModalProps = {
  show: boolean;
  close: () => void;
};

const initialValues = {
  name: "",
  description: "",
};

type FormValues = typeof initialValues;

export default function NewWorkoutModal({ show, close }: NewWorkoutModalProps) {
  const { displayToast } = useToast();
  const navigate = useNavigate();

  const addWorkout = (values: FormValues) => {
    createWorkout$(values).then((res) => {
      close();
      displayToast({
        title: "Workout added",
        message: `Workout ${values.name} has been added`,
        type: "success",
      });

      navigate(`/workouts/${res.id}/edit`);
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={addWorkout}>
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Modal show={show} onHide={close}>
            <Modal.Header closeButton>Add new workout</Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => handleSubmit()}>
                Add
              </Button>
              <Button variant="secondary" onClick={close}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      )}
    </Formik>
  );
}
