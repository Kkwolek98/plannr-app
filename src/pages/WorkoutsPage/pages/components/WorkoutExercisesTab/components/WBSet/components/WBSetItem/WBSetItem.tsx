import { Col, Row } from "react-bootstrap";
import { SetItem } from "../../../../../../../../../types/workout";

type SetItemProps = {
  setItem: SetItem;
  className?: string;
  index: number;
  setLetter: string;
};

export default function WBSetItem({
  setItem,
  className = "",
  index,
  setLetter,
}: SetItemProps) {
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
      <Col xl={2}>{/* TODO: Actions */}</Col>
    </Row>
  );
}
