import {
  faChevronUp,
  faGripVertical,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AccordionContext, Col, useAccordionButton } from "react-bootstrap";
import { ExerciseSet } from "../../../../../../../../../types/workout";
import { useWorkoutContext } from "../../../../../../hooks/useWorkoutContext";

type WBSetHeaderProps = {
  set: ExerciseSet;
  setLetter: string;
  eventKey: string;
};

export default function WBSetHeader({
  set,
  setLetter,
  eventKey,
}: WBSetHeaderProps) {
  const accordionSwitch = useAccordionButton(eventKey, (e) => {
    e.stopPropagation();
  });
  const { activeEventKey } = useContext(AccordionContext);
  const { selectedSet } = useWorkoutContext();
  const isElementActive = activeEventKey === eventKey;
  const isSetSelected = selectedSet?.id === set.id;

  return (
    <button
      type="button"
      className={`btn-clean p-3 d-flex w-100 ${
        isSetSelected ? "bg-primary bg-opacity-10" : ""
      }`}
    >
      <Col xl={8}>
        <span>
          {setLetter}. {set.name} ({set.setItems?.length} exercises)
        </span>
      </Col>
      <Col xl={3} className="d-flex justify-content-end pe-3">
        <button type="button" className="btn-clean btn-circle text-muted me-4">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button type="button" className="btn-clean btn-circle text-muted">
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
      </Col>
      <Col xl={1} className="d-flex justify-content-center">
        <button
          type="button"
          className="btn-clean btn-circle text-muted"
          onClick={accordionSwitch}
        >
          <FontAwesomeIcon
            icon={faChevronUp}
            rotation={!isElementActive ? 180 : undefined}
            className="transition-all--0-3s"
          />
        </button>
      </Col>
    </button>
  );
}
