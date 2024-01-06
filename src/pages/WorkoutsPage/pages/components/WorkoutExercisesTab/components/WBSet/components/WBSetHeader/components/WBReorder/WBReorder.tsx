import { ElementRef, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import { useSinglePopoverContext } from "../../../../../../../../../../../hooks/useSinglePopoverContext";
import { ExerciseSet } from "../../../../../../../../../../../types/workout";
import WBReorderButton from "../WBReorderButton/WBReorderButton";
import WBReorderMenu from "../WBReorderMenu/WBReorderMenu";

type WBReorderProps = {
  set: ExerciseSet;
};

export default function WBReorder({ set }: WBReorderProps) {
  const { popoverId, setPopoverId } = useSinglePopoverContext();
  const target = useRef<ElementRef<"button">>(null);

  const togglePopover = () => {
    if (popoverId === set.id) {
      setPopoverId(undefined);
    } else {
      setPopoverId(set.id);
    }
  };

  return (
    <>
      <WBReorderButton ref={target} onClick={togglePopover} />
      <Overlay target={target.current} show={popoverId === set.id}>
        {(props) => (
          <WBReorderMenu
            set={set}
            onReorder={() => setPopoverId(undefined)}
            {...props}
          />
        )}
      </Overlay>
    </>
  );
}
