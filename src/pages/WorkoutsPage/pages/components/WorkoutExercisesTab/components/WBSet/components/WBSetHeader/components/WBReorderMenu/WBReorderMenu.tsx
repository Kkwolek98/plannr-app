import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject, forwardRef } from "react";
import { Popover } from "react-bootstrap";
import { ExerciseSet } from "../../../../../../../../../../../types/workout";

type WBReorderMenuProps = {
  set: ExerciseSet;
};

const WBReorderMenu = forwardRef((props: WBReorderMenuProps, ref) => {
  const { set } = props;

  return (
    <Popover ref={ref as RefObject<HTMLDivElement>} {...props}>
      <Popover.Body>
        <div className="d-flex flex-column">
          <button
            type="button"
            className="btn-clean btn-circle text-muted mb-2"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button type="button" className="btn-clean btn-circle text-muted">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      </Popover.Body>
    </Popover>
  );
});

export default WBReorderMenu;
