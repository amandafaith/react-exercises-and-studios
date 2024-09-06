import { useState } from "react";

export default function BoardAssignment() {
  const [boardName, setName] = useState("no boards yet!");
  const boards = [
    { label: "Strawberry Desserts", value: "Strawberry Desserts" },
    { label: "Desserts", value: "Desserts" },
    { label: "Tea Cakes", value: "Tea Cakes" },
  ];

  const handleChange = (event) => {};

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boards.map((board) => (
          <option value={board.value}>{board.label}</option>
        ))}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}
