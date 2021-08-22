import * as React from "react";
import { useState } from "react";
import ToolItem from "./ToolItem";
import Board from "./Board";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: "1000px",
    marginLeft: "10px",
    flexDirection: "row",
    textAlign: "right",
  },
});

const Logic: React.FC = () => {
  const classes = useStyles();
  const [pageSelected, setPageSelected] = useState(0);
  const pageNames = ["Work Experience", "Languages", "Etc"];

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
      <div className={classes.toolbar}>
        <div> {tools} </div>
        <div style={{ fontSize: "50px", marginLeft: "20px", marginTop: "7px" }}>
          {pageNames[pageSelected]}
        </div>
      </div>
      <Board pageSelected={pageSelected} />
    </div>
  );
};

export default Logic;
