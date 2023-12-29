import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Stack } from "react-bootstrap";
import SearchBar from "../../../../components/SearchBar/SearchBar";

export default function ExercisesTopBar() {
  return (
    <Stack direction="horizontal" gap={3}>
      <SearchBar />
      <Button variant="primary" title="Filter exercises">
        <FontAwesomeIcon icon={faFilter} />
      </Button>
      <Button variant="primary" title="Add new exercise">
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </Stack>
  );
}
