import { useWorkoutContext } from "../../../../hooks/useWorkoutContext";

export default function WBSidebar() {
  const { selectedSet } = useWorkoutContext();

  if (!selectedSet) return null;

  return (
    <div className="p-2">
      <span className="h2">{selectedSet.name}</span>
    </div>
  );
}
