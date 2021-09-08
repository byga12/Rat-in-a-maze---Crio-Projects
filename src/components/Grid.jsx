import React from "react";

// COMPONENTS
import Cell from "./Cell";

//STYLE
import s from "./Grid.module.sass";

export default function Grid(props) {
  const { matrix, start, end, solution } = props;
  const renderSolution = () => {
    if (solution) {
      const newMatrix = matrix.map((row) => row.map((value) => value));

      solution.forEach(
        (pathCoord) => (newMatrix[pathCoord[0]][pathCoord[1]] = 2)
      );
      newMatrix[start.x][start.y] = 3;
      newMatrix[end.x][end.y] = 4;
      return (
        <div style={gridStyles}>
          {newMatrix.map((row) => row.map((value) => <Cell value={value} />))}
        </div>
      );
    }
  };
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;
  const gridStyles = {
    display: "inline-grid",
    outline: "5px solid black",
    gridTemplateRows: `repeat(${rowLength},50px)`,
    gridTemplateColumns: `repeat(${columnLength},50px)`,
  };
  matrix[start.x][start.y] = 3;
  matrix[end.x][end.y] = 4;
  return (
    <>
      {!solution && (
        <div style={gridStyles}>
          {matrix.map((row) => row.map((value) => <Cell value={value} />))}
        </div>
      )}
      {solution && renderSolution()}
    </>
  );
}
