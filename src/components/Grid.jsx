import React from "react";

// COMPONENTS
import Cell from "./Cell";

export default function Grid(props) {
  const { rows, columns } = props;
  const gridStyles = {
    display: "grid",
    gridTemplateRows: `repeat(${rows},100px)`,
    gridTemplateColumns: `repeat(${columns},100px)`,
    gridGap: "4px",
  };

  // MATRIX
  let matrix = [];
  matrix.length = rows;
  for (let j = 0; j < matrix.length; j++) {
    let values = [];
    values.length = columns;
    for (let k = 0; k < values.length; k++) {
      values[k] = true;
    }
    matrix[j] = values;
  }
  matrix[1][0] = false;
  matrix[1][1] = false;
  console.log(matrix);

  return (
    <div style={gridStyles}>
      {matrix.map((row) =>
        row.map((value) => <Cell isFree={value ? true : false} />)
      )}
    </div>
  );
}
