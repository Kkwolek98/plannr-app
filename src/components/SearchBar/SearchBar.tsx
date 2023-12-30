import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, InputGroup } from "react-bootstrap";

type SearchBarProps = {
  title?: string;
};

export default function SearchBar({ title }: SearchBarProps) {
  return (
    <InputGroup>
      <Form.Control placeholder={title} aria-label={title} />
      <Button variant="outline-primary">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </InputGroup>
  );
}
