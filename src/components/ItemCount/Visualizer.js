import React from "react";

export default function Visualizer({ selectedNumber, stock }) {
  return selectedNumber <= stock ? (
    <h6 id="counterContainerMiddle">{selectedNumber}</h6>
  ) : (
    <h6 id="counterContainerMiddle">{stock}</h6>
  );
}
