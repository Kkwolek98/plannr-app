import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Workout } from "../../../../types/workout";

type WorkoutCardProps = {
  item: Workout;
};

export default function WorkoutCard({ item }: WorkoutCardProps) {
  return (
    <Card className="h-100">
      <Card.Header>
        <Card.Title>
          <Row className="align-items-center">
            <Col xl={10} md={9}>
              {item.name}
            </Col>
            <Col xl={2} md={3} className="ps-1">
              <NavLink to={`/workouts/${item.id}/edit`}>
                <Button variant="outline-primary">
                  <FontAwesomeIcon icon={faPencil} />
                </Button>
              </NavLink>
            </Col>
          </Row>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
