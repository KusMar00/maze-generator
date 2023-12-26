import React from "react";

const Cell = (size) => {
  return (
    <div
      style={{
        borderTop: "3px solid black",
        borderBottom: "3px solid black",
        borderLeft: "3px solid black",
        borderRight: "3px solid black",
        width: size,
        height: size,
      }}
    ></div>
  );
};

export default Cell;
