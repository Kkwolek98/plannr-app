import { Table } from "react-bootstrap";

export default function ExercisesTable() {
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
        <tr>
          <td>Push Up</td>
          <td>Bodyweight</td>
          <td>None</td>
          <td>3</td>
          <td>aaa</td>
        </tr>
      </tbody>
    </Table>
  );
}
