import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject, forwardRef } from "react";

type WBReorderButtonProps = {
  onClick: () => void;
};

const WBReorderButton = forwardRef((props: WBReorderButtonProps, ref) => (
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
