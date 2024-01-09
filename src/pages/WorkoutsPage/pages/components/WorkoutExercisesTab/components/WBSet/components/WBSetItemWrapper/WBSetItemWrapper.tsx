import { useMemo, useState } from "react";
import { SetItem } from "../../../../../../../../../types/workout";
import WBSetItem from "../WBSetItem/WBSetItem";

type WBSetItemWrapperProps = {
  setItem: SetItem;
  index: number;
};

/**
 * @returns WBSetItem if isEditMode is true, otherwise returns ...
 */
export default function WBSetItemWrapper({
  setItem,
  index,
}: WBSetItemWrapperProps) {
  const setLetter = useMemo(() => String.fromCharCode(65 + index), [index]);
  const [isEditMode, setIsEditMode] = useState(false);

  if (isEditMode) {
    return (
      <WBSetItem
        setLetter={setLetter}
        setItem={setItem}
        index={index}
        className="mb-2"
        onEnterEditMode={() => {
          setIsEditMode(true);
        }}
      />
    );
  }
  return (
    <></>
    // <WBSetItem
    //   setItem={setItem}
    //   index={index}
    //   setLetter={setLetter}
    //   onEnterEditMode={() => setIsEditMode(true)}
    // />
  );
}
