import {
  faArrowDown,
  faArrowUp,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject, forwardRef, useState } from "react";
import { Form, Popover } from "react-bootstrap";
import { ExerciseSet } from "../../../../../../../../../../../types/workout";

import { reorderSet$ } from "../../../../../../../../../../../api/workouts";
import { useWorkoutContext } from "../../../../../../../../hooks/useWorkoutContext";
import "./WBReorderMenu.scss";

type WBReorderMenuProps = {
  set: ExerciseSet;
  onReorder: () => void;
};

const WBReorderMenu = forwardRef(
  ({ set, onReorder, ...props }: WBReorderMenuProps, ref) => {
    const { workout, setWorkout } = useWorkoutContext();

    const [setLetter, setSetLetter] = useState<string>(
      String.fromCharCode(65 + set.sort)
    );

    const moveUp = () => {
      reorderSet$(workout!.id, { setId: set.id, moveTo: set.sort - 1 }).then(
        (res) => {
          if (res) {
            onReorder();
            setWorkout(res);
          }
        }
      );
    };

    const moveDown = () => {
      reorderSet$(workout!.id, { setId: set.id, moveTo: set.sort + 1 }).then(
        (res) => {
          if (res) {
            onReorder();
            setWorkout(res);
          }
        }
      );
    };

    const setSort = () => {
      reorderSet$(workout!.id, {
        setId: set.id,
        moveTo: setLetter.charCodeAt(0) - 65,
      }).then((res) => {
        if (res) {
          onReorder();
          setWorkout(res);
        }
      });
    };

    return (
      <Popover
        ref={ref as RefObject<HTMLDivElement>}
        {...props}
        className="reorder-menu-popover"
      >
        <Popover.Body>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn-clean btn-circle text-muted"
                onClick={moveUp}
                disabled={set.sort === 0}
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
            <div className="d-flex my-2">
              <Form.Control
                pattern="[A-Z]"
                maxLength={1}
                className="text-end m-0"
                value={setLetter}
                onChange={(e) => {
                  setSetLetter(e.target.value.toUpperCase());
                }}
              />
              <button
                type="button"
                className="btn-clean btn-circle text-primary"
                onClick={setSort}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn-clean btn-circle text-muted"
                onClick={moveDown}
                disabled={set.sort === workout!.sets.length - 1}
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
          </div>
        </Popover.Body>
      </Popover>
    );
  }
);

export default WBReorderMenu;
