import { faChevronUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AccordionContext, Col, useAccordionButton } from "react-bootstrap";
import { deleteSet } from "../../../../../../../../../api/sets";
import { useToast } from "../../../../../../../../../hooks/useToast";
import { ExerciseSet } from "../../../../../../../../../types/workout";
import { useWorkoutContext } from "../../../../../../hooks/useWorkoutContext";
import "./WBSetHeader.scss";
import WBReorder from "./components/WBReorder/WBReorder";

type WBSetHeaderProps = {
  set: ExerciseSet;
  setLetter: string;
  eventKey: string;
  onClick: () => void;
};

export default function WBSetHeader({
  set,
  setLetter,
  eventKey,
  onClick,
}: WBSetHeaderProps) {
  const accordionSwitch = useAccordionButton(eventKey, (e) => {
    e.stopPropagation();
  });
  const { activeEventKey } = useContext(AccordionContext);
  const { selectedSet, removeExerciseSet } = useWorkoutContext();
  const { displayToast } = useToast();
  const isElementActive = activeEventKey === eventKey;
  const isSetSelected = selectedSet?.id === set.id;

  const removeSet = () => {
    deleteSet(set.id).then((res) => {
      if (res.removed) {
        removeExerciseSet(set.id);
        displayToast({
          title: "Set removed",
          message: `Set ${set.name} has been removed`,
          type: "success",
        });
      }
    });
  };

  return (
    <a
      className={`btn-clean p-3 d-flex w-100 ${
        isSetSelected ? "bg-primary bg-opacity-10" : ""
      }`}
      // biome-ignore lint/a11y/useValidAnchor: <explanation>
      onClick={onClick}
    >
      <Col xs={8}>
        <span>
          {setLetter}. {set.name} ({set.setItems?.length} exercises)
        </span>
      </Col>
      <Col
        xs={3}
        className="d-flex justify-content-end pe-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="btn-clean btn-circle text-muted delete-button me-4"
          onClick={removeSet}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <WBReorder set={set} />
      </Col>
      <Col xs={1} className="d-flex justify-content-center">
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
    </a>
  );
}
