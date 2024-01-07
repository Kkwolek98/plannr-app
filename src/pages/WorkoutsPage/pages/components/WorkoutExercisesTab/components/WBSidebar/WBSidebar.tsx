import { faCheck, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { updateSet$ } from "../../../../../../../api/sets";
import { ExerciseSet } from "../../../../../../../types/workout";
import { useWorkoutContext } from "../../../../hooks/useWorkoutContext";

export default function WBSidebar() {
  const [isEditMode, setIsEditMode] = useState(false);
  const { selectedSet, setExerciseSet } = useWorkoutContext();

  const handleEdit = (values: Partial<ExerciseSet>) => {
    updateSet$(values).then((res) => {
      setExerciseSet(selectedSet!.id, res);
      setIsEditMode(false);
    });
  };

  if (!selectedSet) return null;

  return (
    <Formik
      initialValues={selectedSet}
      onSubmit={handleEdit}
      enableReinitialize={true}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Row className="my-2">
            <Col xs={8}>
              {!isEditMode && <span className="h2">{selectedSet.name}</span>}
              {isEditMode && (
                <>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </>
              )}
            </Col>
            <Col className="d-flex justify-content-end">
              {!isEditMode && (
                <button
                  type="button"
                  className="btn-clean btn-circle text-muted"
                  onClick={() => setIsEditMode(true)}
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              )}
              {isEditMode && (
                <button
                  type="submit"
                  className="btn-clean btn-circle text-muted"
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              )}
            </Col>
          </Row>

          <Row className="mb-2">
            <Col>
              {!isEditMode && (
                <p className={!selectedSet.description ? "text-muted" : ""}>
                  {selectedSet.description || "No description"}
                </p>
              )}
              {isEditMode && (
                <>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={values.description ?? ""}
                    onChange={handleChange}
                  />
                </>
              )}
            </Col>
          </Row>

          <Row className="mb-2">
            <Col>
              {!isEditMode && (
                <div>
                  <label>Rest:&nbsp;</label>
                  <span>{selectedSet.rest ?? 0} minute(s)</span>
                </div>
              )}
              {isEditMode && (
                <>
                  <Form.Label>Rest</Form.Label>
                  <Form.Control
                    name="rest"
                    value={values.rest ?? 0}
                    onChange={handleChange}
                  />
                </>
              )}
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
