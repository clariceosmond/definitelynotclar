import * as React from "react";
import { useState } from "react";
import ToolItem from "./ToolItem";
import Board from "./Board";

const Logic: React.FC = () => {
  const [pageSelected, setPageSelected] = useState(0);

  let tools = Array(3).fill(null);
  let toolstyle = Array(3).fill({ backgroundColor: "transparent" });
  toolstyle[pageSelected] = {
    backgroundImage: 'url("icon-shade.png")',
    height: "55px",
  };
  for (let i = 0; i < 3; ++i) {
    let toolname = "tool" + i;
    tools[i] = (
      <ToolItem
        name={toolname}
        style={toolstyle[i]}
        onClick={() => setPageSelected(i)}
      />
    );
  }

  return (
    <div>
      <div className="toolbar">
        <div> {tools} </div>
        <div style={{ fontSize: "50px", marginLeft: "20px", marginTop: "7px" }}>
          Languages{" "}
        </div>
      </div>
      <Board pageSelected={pageSelected} />
    </div>
  );
};

export default Logic;
