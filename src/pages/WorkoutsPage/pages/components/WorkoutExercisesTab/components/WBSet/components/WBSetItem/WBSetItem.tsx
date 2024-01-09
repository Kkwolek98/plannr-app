import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { removeSetItem$ } from "../../../../../../../../../api/sets";
import { SetItem } from "../../../../../../../../../types/workout";
import { useWorkoutContext } from "../../../../../../hooks/useWorkoutContext";

type SetItemProps = {
  setItem: SetItem;
  className?: string;
  index: number;
  setLetter: string;
  onEnterEditMode: () => void;
};

export default function WBSetItem({
  setItem,
  className = "",
  index,
  setLetter,
  onEnterEditMode,
}: SetItemProps) {
  const { removeSetItem } = useWorkoutContext();
  const remove = () => {
    removeSetItem$(setItem.id).then((res) => {
      if (res.removed) {
        removeSetItem(setItem.id);
      }
    });
  };

  return (
    <Row className={className}>
      <Col xl={1} className="fw-bolder text-center">
        {setLetter}
        {index + 1}.
      </Col>
      <Col xl={2}>
        <span>{setItem.details.name}</span>
      </Col>
      <Col xl={2}>
        {setItem.repExact
          ? `${setItem.repExact} reps`
          : `${setItem.repMin}-${setItem.repMax} reps`}
      </Col>
      <Col xl={2}>
        {setItem.repType !== "rpe"
          ? `${setItem.repWeight} ${setItem.repType}`
          : `${setItem.repType}`}
      </Col>
      <Col xl={1} />
      <Col xl={2}>{setItem.rest ? `${setItem.rest} min rest` : "No rest"}</Col>
      <Col xl={2} className="d-flex justify-content-center">
        <button
          type="button"
          className="btn-clean btn-circle text-muted delete-button"
          title="Remove"
          onClick={remove}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          type="button"
          className="btn-clean btn-circle text-muted"
          title="Edit"
          onClick={onEnterEditMode}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
      </Col>
    </Row>
  );
}
