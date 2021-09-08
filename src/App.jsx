import React, { useState } from "react";

import Grid from "./components/Grid";
import s from "./App.module.sass";
function App() {
  const [matrixData, setMatrixData] = useState({
    matrix: [
      [0, 0, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 0, 1, 1],
      [1, 0, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 0],
      [1, 1, 1, 1, 0, 1, 0],
      [1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 1, 1],
    ],
    start: { x: 1, y: 1 },
    end: { x: 5, y: 5 },
  });
  const [solutions, setSolutions] = useState([]);
  const showSolutions = () => {
    setSolutions(
      solveMaze(matrixData.matrix, matrixData.start, matrixData.end)
    );
  };
  return (
    <>
      <div className={s.flexContainer}>
        <h1>Rat in a maze</h1>
        <Grid
          matrix={matrixData.matrix}
          start={matrixData.start}
          end={matrixData.end}
        />
        <div className={s.btnSolution} onClick={showSolutions}>
          Solution
        </div>

        {solutions.length !== 0 &&
          solutions.map((solution) => (
            <Grid
              matrix={matrixData.matrix}
              start={matrixData.start}
              end={matrixData.end}
              solution={solution}
            />
          ))}
      </div>
    </>
  );
}

export default App;

function solveMaze(matrix, start, end) {
  let x = start.x;
  let y = start.y;
  let rowLength = matrix.length;
  let columnLength = matrix[0].length;
  let solutionBuffer = matrix.map((row) => row.map((value) => value));
  solutionBuffer.map((row) => row.fill(0));
  let pathCount = 0;
  let paths = [];
  solveMazeUtil(solutionBuffer, x, y, []);
  console.log(paths);
  return paths;

  function solveMazeUtil(solutionBuffer, x, y, currentPath) {
    if (x < 0 || x >= rowLength || y < 0 || y >= columnLength) return; //si estoy afuera de los límites chau
    if (matrix[x][y] === 1 || solutionBuffer[x][y] === 2) return; //si hay un obstáculo o si ya estaba ocupado chau
    if (x === end.x && y === end.y) {
      pathCount++;
      paths.push([...currentPath]);
      console.log("path found");

      return;
    }
    solutionBuffer[x][y] = 2;

    //up
    currentPath.push([x - 1, y]);
    solveMazeUtil(solutionBuffer, x - 1, y, currentPath);
    currentPath.pop();

    //down
    currentPath.push([x + 1, y]);
    solveMazeUtil(solutionBuffer, x + 1, y, currentPath);
    currentPath.pop();

    //right
    currentPath.push([x, y + 1]);
    solveMazeUtil(solutionBuffer, x, y + 1, currentPath);
    currentPath.pop();

    //left
    currentPath.push([x, y - 1]);
    solveMazeUtil(solutionBuffer, x, y - 1, currentPath);
    currentPath.pop();

    solutionBuffer[x][y] = 0; //BACKTRACK
    return;
  }
}
