import { Formik } from "formik";
import { Button, Col, Form, InputGroup, Row, Stack } from "react-bootstrap";
import { addItemToSet$ } from "../../../../../../../../../api/sets";
import useExercises from "../../../../../../../../../hooks/useExercises";
import { useToast } from "../../../../../../../../../hooks/useToast";
import { ExerciseSet, SetItem } from "../../../../../../../../../types/workout";
import { useWorkoutContext } from "../../../../../../hooks/useWorkoutContext";
import useSetItemInitiaFormlValue from "./hooks/useSetItemInitialFormValue";

type NewSetItemProps = {
  set?: ExerciseSet;
  setItem?: SetItem;
  close: () => void;
};

export default function WBSetItemForm({
  set,
  setItem,
  close,
}: NewSetItemProps) {
  const exercises = useExercises();
  const { setExerciseSet } = useWorkoutContext();
  const { displayToast } = useToast();

  const initialData = useSetItemInitiaFormlValue(setItem);

  type FormValues = typeof initialData;

  const onSubmit = (values: FormValues) => {
    const newItem = {
      details: values.details,
      repMin: values.repMin,
      repMax: values.repMax,
      repExact: values.repExact,
      repWeight: values.repWeight,
      repType: values.repType,
      sort: set!.setItems.length,
      rest: values.rest,
    };

    addItemToSet$(set!.id, newItem)
      .then((res) => {
        setExerciseSet(set!.id, res);
        close();
        displayToast({
          title: "Exercise added",
          message: `Exercise has been added to set ${set!.name}`,
          type: "success",
        });
      })
      .catch(() => {
        displayToast({
          title: "Error",
          message: `Error adding exercise to set ${set!.name}`,
          type: "danger",
        });
      });
  };

  return (
    <Formik initialValues={initialData} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit, resetForm }) => (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xl={2} className="mt-md-0 mt-2">
              <Form.Label>Exercise</Form.Label>
              <Form.Select
                name="details"
                value={values.details.id}
                onChange={handleChange}
              >
                {exercises.map((exercise) => (
                  <option key={exercise.id} value={exercise.id}>
                    {exercise.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col xl={1} className="mt-md-0 mt-2">
              <Form.Label>Reps</Form.Label>
              <Form.Select
                name="repRangeType"
                value={values.repRangeType}
                onChange={handleChange}
              >
                <option value="exact">Exact</option>
                <option value="range">Range</option>
              </Form.Select>
            </Col>
            <Col xl={2}>
              <Form.Label>&nbsp;</Form.Label>
              {values.repRangeType === "exact" && (
                <InputGroup>
                  <Form.Control
                    type="number"
                    name="repExact"
                    value={values.repExact}
                    onChange={handleChange}
                  />
                  <InputGroup.Text>reps</InputGroup.Text>
                </InputGroup>
              )}
              {values.repRangeType === "range" && (
                <>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      name="repMin"
                      value={values.repMin}
                      onChange={handleChange}
                    />
                    <InputGroup.Text>to</InputGroup.Text>
                    <Form.Control
                      type="number"
                      name="repMax"
                      value={values.repMax}
                      onChange={handleChange}
                    />
                    <InputGroup.Text>reps</InputGroup.Text>
                  </InputGroup>
                </>
              )}
            </Col>
            <Col xl={2} className="mt-md-0 mt-2">
              {values.repType !== "rpe" && (
                <>
                  <Form.Label>Weight</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control
                      type="number"
                      name="repWeight"
                      value={values.repWeight}
                      onChange={handleChange}
                    />
                    <InputGroup.Text>{values.repType}</InputGroup.Text>
                  </InputGroup>
                </>
              )}
            </Col>
            <Col xl={1} className="mt-md-0 mt-2">
              <Form.Label>Rep type</Form.Label>
              <Form.Select
                name="repType"
                value={values.repType}
                onChange={handleChange}
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
                <option value="rpe">RPE</option>
              </Form.Select>
            </Col>
            <Col xl={2} className="mt-md-0 mt-2">
              <Form.Label>Rest</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  name="rest"
                  value={values.rest}
                  onChange={handleChange}
                />
                <InputGroup.Text>min</InputGroup.Text>
              </InputGroup>
            </Col>
            <Col xl={2} className="mt-md-0 mt-2">
              <Stack>
                <Button type="submit" className="mb-2">
                  Add
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    resetForm();
                    close();
                  }}
                >
                  Cancel
                </Button>
              </Stack>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
