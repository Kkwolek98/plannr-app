import { Col, Row } from "react-bootstrap";
import defaultGridBreakpoints from "../../utils/defaultGridBreakpoints";

type CardGridProps<T> = {
  data: T[];
  CardComponent: React.FC<{ item: T }>;
};

export default function CardGrid<T extends { id: string }>({
  data,
  CardComponent,
}: CardGridProps<T>) {
  return (
    <Row>
      {data.map((item) => (
        <Col {...defaultGridBreakpoints} className="mb-3" key={item.id}>
          <CardComponent item={item} />
        </Col>
      ))}
    </Row>
  );
}
