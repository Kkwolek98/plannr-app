import { faChevronUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AccordionContext, Col, useAccordionButton } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { deleteSet } from "../../../../../../../../../api/sets";
import { useToast } from "../../../../../../../../../hooks/useToast";
import { ExerciseSet } from "../../../../../../../../../types/workout";
import { useWorkoutContext } from "../../../../../../hooks/useWorkoutContext";
import "./WBSetHeader.scss";
import WBReorderButton from "./components/WBReorderButton/WBReorderButton";
import WBReorderMenu from "./components/WBReorderMenu/WBReorderMenu";

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
    // biome-ignore lint/a11y/useValidAnchor: <TODO: anchors for sets>
    <a
      className={`btn-clean p-3 d-flex w-100 ${
        isSetSelected ? "bg-primary bg-opacity-10" : ""
      }`}
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
        <OverlayTrigger
          trigger="click"
          placement="left"
          overlay={<WBReorderMenu set={set} />}
        >
          <WBReorderButton />
        </OverlayTrigger>
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
