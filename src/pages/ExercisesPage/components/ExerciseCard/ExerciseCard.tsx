import {
  faEllipsisV,
  faFileLines,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Card,
  Col,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import { Exercise } from "../../../../types/exercise";
import "./ExerciseCard.scss";

interface ExerciseCardProps {
  item: Exercise;
}

export default function ExerciseCard({ item }: ExerciseCardProps) {
  return (
    <Card className="h-100">
      <Card.Header>
        <Card.Title>
          <Row className="align-items-center">
            <Col xl={10} md={9}>
              {item.name}
            </Col>
            <Col xl={2} md={3}>
              <DropdownButton
                className="actions-menu"
                variant="outline-dark"
                title={<FontAwesomeIcon icon={faEllipsisV} />}
              >
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <FontAwesomeIcon
              icon={faFileLines}
              color={item.description ? "gray" : "lightgray"}
              size="lg"
              title={item.description ? "Description" : "No description"}
            />
          </Col>
          <Col className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faVideoCamera}
              color={item.videos.length ? "gray" : "lightgray"}
              size="lg"
              title={item.videos.length ? "Videos" : "No videos available"}
            />
            {item.videos.length > 0 && (
              <Badge bg="secondary" className="ms-1">
                {item.videos.length}
              </Badge>
            )}
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="h-100">
        {item.tags?.map((tag) => (
          <Badge key={tag} bg="secondary" className="me-1">
            {tag}
          </Badge>
        ))}
      </Card.Footer>
    </Card>
  );
}
