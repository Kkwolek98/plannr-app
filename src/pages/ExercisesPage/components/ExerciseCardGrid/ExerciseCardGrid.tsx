import { Col, Row } from "react-bootstrap";
import { Exercise } from "../../../../types/exercise";
import defaultGridBreakpoints from "../../../../utils/defaultGridBreakpoints";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

interface ExerciseCardGridProps {
  exercises: Exercise[];
}

export default function ExerciseCardGrid({ exercises }: ExerciseCardGridProps) {
  return (
    <Row>
      {exercises.map((exercise) => (
        <Col {...defaultGridBreakpoints} className="mb-3" key={exercise.id}>
          <ExerciseCard exercise={exercise} />
        </Col>
      ))}
    </Row>
  );
}
