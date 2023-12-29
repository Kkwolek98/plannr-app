import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import NewExerciseModal from "../NewExerciseModal/NewExerciseModal";

export default function ExercisesTopBar() {
  const [showNewExerciseModal, setShowNewExerciseModal] = useState(false);
  return (
    <Stack direction="horizontal" gap={3}>
      <SearchBar />
      <Button variant="primary" title="Filter exercises">
        <FontAwesomeIcon icon={faFilter} />
      </Button>
      <Button
        variant="primary"
        title="Add new exercise"
        onClick={() => setShowNewExerciseModal(true)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <NewExerciseModal
        show={showNewExerciseModal}
        close={() => setShowNewExerciseModal(false)}
      />
    </Stack>
  );
}
