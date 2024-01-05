import {
  faArrowDown,
  faArrowUp,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject, forwardRef } from "react";
import { Form, Popover } from "react-bootstrap";
import { ExerciseSet } from "../../../../../../../../../../../types/workout";

import "./WBReorderMenu.scss";

type WBReorderMenuProps = {
  set: ExerciseSet;
};

const WBReorderMenu = forwardRef((props: WBReorderMenuProps, ref) => {
  // const { selectedSet } = useWorkoutContext();
  const { set } = props;
  const setLetter = String.fromCharCode(65 + set.sort);

  return (
    <Popover
      ref={ref as RefObject<HTMLDivElement>}
      {...props}
      className="reorder-menu-popover"
    >
      <Popover.Body>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <button type="button" className="btn-clean btn-circle text-muted">
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
          <div className="d-flex my-2">
            <Form.Control
              className="text-end m-0"
              value={setLetter}
              onChange={() => {}}
            />
            <button type="button" className="btn-clean btn-circle text-primary">
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn-clean btn-circle text-muted">
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
});

export default WBReorderMenu;
