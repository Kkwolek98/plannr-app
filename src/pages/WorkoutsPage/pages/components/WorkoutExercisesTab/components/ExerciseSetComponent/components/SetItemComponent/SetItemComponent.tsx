import { Row } from "react-bootstrap";
import { SetItem } from "../../../../../../../../../types/workout";

type SetItemProps = {
  setItem: SetItem;
};

export default function SetItemComponent({ setItem }: SetItemProps) {
  return <Row></Row>;
}
