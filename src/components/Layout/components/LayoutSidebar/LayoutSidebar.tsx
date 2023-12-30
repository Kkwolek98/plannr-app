import {
  faDumbbell,
  faMedal,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./LayoutSidebar.scss";

export default function LayoutSidebar() {
  return (
    <Stack gap={3}>
      <NavLink className="link" to="/exercises">
        <FontAwesomeIcon icon={faDumbbell} />
      </NavLink>
      <NavLink className="link" to="/workouts">
        <FontAwesomeIcon icon={faPersonRunning} />
      </NavLink>
      <NavLink className="link" to="/results">
        <FontAwesomeIcon icon={faMedal} />
      </NavLink>
    </Stack>
  );
}
