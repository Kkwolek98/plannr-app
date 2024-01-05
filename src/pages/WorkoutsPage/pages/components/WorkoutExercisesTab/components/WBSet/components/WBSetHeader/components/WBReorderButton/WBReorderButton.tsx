import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject, forwardRef } from "react";

const WBReorderButton = forwardRef((props, ref) => (
  <button
    {...props}
    ref={ref as RefObject<HTMLButtonElement> | null}
    type="button"
    className="btn-clean btn-circle text-muted"
  >
    <FontAwesomeIcon icon={faGripVertical} />
  </button>
));

export default WBReorderButton;
