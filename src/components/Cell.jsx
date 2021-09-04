import React from "react";

export default function Cell(props) {
  const { isFree } = props;
  const blockedCellStyles = {
    outline: "2px solid black",
    backgroundColor: "red",
  };
  const freeCellStyles = {
    outline: "2px solid black",
    backgroundColor: "green",
  };
  return (
    <>
      {isFree && <div style={freeCellStyles}></div>}
      {!isFree && <div style={blockedCellStyles}></div>}
    </>
  );
}
