import {
  faDumbbell,
  faMedal,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Stack } from "react-bootstrap";

export default function LayoutSidebar() {
  return (
    <Stack gap={3}>
      <Button variant="outline-dark" className="btn-circle">
        <FontAwesomeIcon icon={faDumbbell} />
      </Button>
      <Button variant="outline-dark" className="btn-circle">
        <FontAwesomeIcon icon={faPersonRunning} />
      </Button>
      <Button variant="outline-dark" className="btn-circle">
        <FontAwesomeIcon icon={faMedal} />
      </Button>
    </Stack>
  );
}
