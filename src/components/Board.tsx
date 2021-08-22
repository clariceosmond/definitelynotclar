import * as React from "react";
import DefaultPage from "./pages/DefaultPage";
import LanguagePage from "./pages/LanguagePage";
import { makeStyles } from "@material-ui/core";
import brownbor from "../items/brown-bor.png";
import bgbrown from "../items/bg-brown.png";

const useStyles = makeStyles({
  board: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    border: "16px solid transparent",
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
  const page = pageSelected === 0 ? LanguagePage() : DefaultPage();

  let board = <div className={classes.board}>{page}</div>;
  return board;
};

interface BoardProps {
  pageSelected: number;
}

export default Board;
