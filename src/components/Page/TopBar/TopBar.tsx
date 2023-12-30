import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import SearchBar from "../../SearchBar/SearchBar";
import "./TopBar.scss";

type NewResourceModalProps = {
  show: boolean;
  close: () => void;
};

type TopBarProps = {
  searchBarTitle?: string;
  NewResourceModal?: React.FC<NewResourceModalProps>;
};

export default function TopBar({
  searchBarTitle,
  NewResourceModal,
}: TopBarProps) {
  const [showNewExerciseModal, setShowNewExerciseModal] = useState(false);
  return (
    <div className="top-bar">
      <Stack direction="horizontal" gap={3}>
        <SearchBar title={searchBarTitle} />
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
        {NewResourceModal && (
          <NewResourceModal
            show={showNewExerciseModal}
            close={() => setShowNewExerciseModal(false)}
          />
        )}
      </Stack>
      <hr />
    </div>
  );
}
