import { Badge, Card, Col, Row } from "react-bootstrap";
import { Exercise } from "../../../../types/exercise";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Card className="h-100">
      <Card.Header>
        <Card.Title>
          <Row>
            <Col xl={11}>{exercise.name}</Col>
            <Col>{/* TODO: ACTIONS */}</Col>
          </Row>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{exercise.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="h-100">
        {exercise.tags?.map((tag) => (
          <Badge key={tag} bg="secondary" className="me-1">
            {tag}
          </Badge>
        ))}
      </Card.Footer>
    </Card>
  );
}
