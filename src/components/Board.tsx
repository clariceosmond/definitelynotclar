import * as React from "react";
import DefaultPage from "./pages/DefaultPage";
import LanguagePage from "./pages/LanguagePage";
import { makeStyles } from "@material-ui/core";
import brownbor from "../items/brown-bor.png";
import bgbrown from "../items/bg-brown.png";
import WorkExpPage from "./pages/WorkExpPage";
import HomePage from "./pages/HomePage";

const useStyles = makeStyles({
  board: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderStyle: "solid",
    borderWidth: "16px",
    borderImage: `url(${brownbor}) 16 stretch`,
    backgroundImage: `url(${bgbrown})`,
    overflow: "hidden",
    height: "300px",
    alignItems: "center",
    justifyContent: "center",
    "& h1": {
      fontSize: "50px",
    },
    "& h2": {
      fontSize: "30px",
    },
  },
});

const Board: React.FC<BoardProps> = (props) => {
  const classes = useStyles();
  const { pageSelected } = props;
  let page;
  switch (pageSelected) {
    case 0:
      page = <HomePage />;
      break;
    case 1:
      page = <WorkExpPage />;
      break;
    case 2:
      page = LanguagePage();
      break;
    case 3:
      page = DefaultPage();
      break;
    default:
      page = DefaultPage();
      break;
  }

  let board = <div className={classes.board}>{page}</div>;
  return board;
};

interface BoardProps {
  pageSelected: number;
}

export default Board;
