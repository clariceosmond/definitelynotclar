import * as React from "react";
import DefaultPage from "./pages/DefaultPage";
import LanguagePage from "./pages/LanguagePage";

const Board: React.FC<BoardProps> = (props) => {
  const { pageSelected } = props;
  const page = pageSelected === 0 ? LanguagePage() : DefaultPage();
  console.log(page);

  let board = (
    <div className="mainboxitem" id="iconboard">
      {page}
    </div>
  );
  return board;
};

interface BoardProps {
  pageSelected: number;
}

export default Board;
