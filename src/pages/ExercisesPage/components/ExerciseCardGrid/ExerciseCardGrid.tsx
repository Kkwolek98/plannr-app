import { Col, Row } from "react-bootstrap";
import { Exercise } from "../../../../types/exercise";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

interface ExerciseCardGridProps {
  exercises: Exercise[];
}

export default function ExerciseCardGrid({ exercises }: ExerciseCardGridProps) {
  return (
    <Row>
      {exercises.map((exercise) => (
        <Col
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className="mb-3"
          key={exercise.id}
        >
          <ExerciseCard exercise={exercise} />
        </Col>
      ))}
    </Row>
  );
}
