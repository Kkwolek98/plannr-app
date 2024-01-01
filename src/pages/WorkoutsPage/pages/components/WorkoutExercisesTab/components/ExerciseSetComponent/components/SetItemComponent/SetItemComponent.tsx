import { Col, Row } from "react-bootstrap";
import { SetItem } from "../../../../../../../../../types/workout";

type SetItemProps = {
  setItem: SetItem;
  className?: string;
};

export default function SetItemComponent({
  setItem,
  className = "",
}: SetItemProps) {
  return (
    <Row className={className}>
      <Col xl={2}>
        <span className="fw-bold">{setItem.details.name}</span>
      </Col>
      <Col xl={1} />
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
