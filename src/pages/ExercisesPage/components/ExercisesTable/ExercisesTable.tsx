import { Table } from "react-bootstrap";
import { Exercise } from "../../../../types/exercise";

interface ExercisesTableProps {
  exercises: Exercise[];
}

export default function ExercisesTable({ exercises }: ExercisesTableProps) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Tags</th>
          <th>Videos</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise) => (
          <tr key={exercise.id}>
            <td>{exercise.name}</td>
            <td>{exercise.description}</td>
            <td>{exercise.tags}</td>
            <td>{exercise.videos.length}</td>
            <td>aaa</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
