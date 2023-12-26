import React from "react";
import Row from "./Row";

const Maze = () => {
  return (
    <div
      style={{
        border: "3px solid black",
        width: "640px",
        height: "640px",
      }}
    >
      <Row style={{ width: "100%" }} />
    </div>
  );
};

export default Maze;
