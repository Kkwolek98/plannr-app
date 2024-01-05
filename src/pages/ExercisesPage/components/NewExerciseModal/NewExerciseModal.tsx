import { Formik, FormikProps } from "formik";
import { useRef } from "react";
import { Badge, Button, Form, InputGroup, Modal } from "react-bootstrap";
import { postExercise } from "../../../../api/exercises";
import YTVideo from "../../../../components/YTVideo/YTVideo";
import { useToast } from "../../../../hooks/useToast";

type NewExerciseModalProps = {
  show: boolean;
  close: () => void;
};

const newExerciseFormInitialValues = {
  name: "",
  description: "",
  newVideo: "",
  newTag: "",
  videos: [],
  tags: [],
};

type NewExerciseFormValues = typeof newExerciseFormInitialValues;

export default function NewExerciseModal({
  show,
  close,
}: NewExerciseModalProps) {
  const { displayToast } = useToast();

  const formikRef = useRef<FormikProps<NewExerciseFormValues>>(null);

  const submit = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit();
    }
  };

  const handleSubmit = (values: NewExerciseFormValues) => {
    const newExercise = {
      name: values.name,
      description: values.description,
      videos: values.videos,
      tags: values.tags,
    };

    postExercise(newExercise).then(() => {
      close();
      displayToast({
        title: "Exercise added",
        message: `Exercise ${newExercise.name} has been added`,
        type: "success",
      });
    });
  };

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>Add new exercise</Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={newExerciseFormInitialValues}
          onSubmit={(values: NewExerciseFormValues) => handleSubmit(values)}
          innerRef={formikRef}
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter description"
                  value={values.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Label>Videos</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter youtube url"
                  value={values.newVideo}
                  name="newVideo"
                  onChange={handleChange}
                />
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    setFieldValue("videos", [
                      ...values.videos,
                      values.newVideo,
                    ]);
                    setFieldValue("newVideo", "");
                  }}
                >
                  Add video
                </Button>
              </InputGroup>
              {values.videos.map((video) => (
                <YTVideo key={video} url={video} />
              ))}
              <Form.Label>Tags</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter tag"
                  value={values.newTag}
                  name="newTag"
                  onChange={handleChange}
                />
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    setFieldValue("tags", [...values.tags, values.newTag]);
                    setFieldValue("newTag", "");
                  }}
                >
                  Add tag
                </Button>
              </InputGroup>
              {values.tags.map((tag) => (
                <Badge key={tag} bg="secondary" className="me-1">
                  {tag}
                </Badge>
              ))}
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={submit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
