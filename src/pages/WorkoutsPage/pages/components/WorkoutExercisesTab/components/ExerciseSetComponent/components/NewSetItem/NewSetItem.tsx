import { Formik } from "formik";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { addItemToSet } from "../../../../../../../../../api/sets";
import useExercises from "../../../../../../../../../hooks/useExercises";
import { Exercise } from "../../../../../../../../../types/exercise";
import { ExerciseSet } from "../../../../../../../../../types/workout";

type NewSetItemProps = {
  set: ExerciseSet;
};

const initialData = {
  details: {} as Exercise,
  repRangeType: "exact" as "exact" | "range",
  repMin: 0,
  repMax: 0,
  repExact: 0,
  repWeight: 0,
  repType: "kg",
  sort: 0,
  rest: 0,
};

type FormValues = typeof initialData;

export default function NewSetItem({ set }: NewSetItemProps) {
  const exercises = useExercises();
  const onSubmit = (values: FormValues) => {
    console.log(set);
    console.log(values);

    const newItem = {
      details: values.details,
      repMin: values.repMin,
      repMax: values.repMax,
      repExact: values.repExact,
      repWeight: values.repWeight,
      repType: values.repType,
      sort: set.setItems.length,
      rest: values.rest,
    };

    addItemToSet(set.id, newItem).then((res) => {
      console.log({ res });
    });
  };
  return (
    <Formik initialValues={initialData} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xl={3}>
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
            <Col xl={1}>
              <Form.Select
                name="repRangeType"
                value={values.repRangeType}
                onChange={handleChange}
              >
                <option value="exact">Exact</option>
                <option value="range">Range</option>
              </Form.Select>
            </Col>
            <Col xl={2} className="d-flex gap-2">
              {values.repRangeType === "exact" && (
                <Form.Control
                  type="number"
                  name="repExact"
                  value={values.repExact}
                  onChange={handleChange}
                />
              )}
              {values.repRangeType === "range" && (
                <>
                  <Form.Control
                    type="number"
                    name="repMin"
                    value={values.repMin}
                    onChange={handleChange}
                  />
                  <Form.Control
                    type="number"
                    name="repMax"
                    value={values.repMax}
                    onChange={handleChange}
                  />
                </>
              )}
            </Col>
            <Col xl={1}>
              <Form.Select
                name="repType"
                value={values.repType}
                onChange={handleChange}
              >
                <option value="kg">kg</option>
                <option value="rpe">RPE</option>
              </Form.Select>
            </Col>
            <Col xl={2}>
              {values.repType === "kg" && (
                <InputGroup>
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control
                    type="number"
                    name="repWeight"
                    value={values.repWeight}
                    onChange={handleChange}
                  />
                  <InputGroup.Text>kg</InputGroup.Text>
                </InputGroup>
              )}
            </Col>
            <Col xl={1}>
              <Form.Control
                type="number"
                name="rest"
                value={values.rest}
                onChange={handleChange}
              />
            </Col>
            <Col xl={2}>
              <Button type="submit">Add</Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
