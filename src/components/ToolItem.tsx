import * as React from "react";
import { makeStyles } from "@material-ui/core";
import brownbor from "../items/brown-bor.png";
import iconbg from "../items/icon-bg.png";

const useStyles = makeStyles({
  toolItem: {
    borderStyle: "solid",
    borderWidth: "10px",
    borderImage: `url(${brownbor}) 16 stretch`,
    backgroundImage: `url(${iconbg})`,
    height: "50px",
    width: "50px",
    marginLeft: "5px",
  },
});

const ToolItem: React.FC<ToolItemProps> = (props) => {
  const classes = useStyles();
  const { name, style, onClick } = props;
  return (
    <button
      className={classes.toolItem}
      id={name}
      style={style}
      onClick={onClick}
    ></button>
  );
};

interface ToolItemProps {
  name: string;
  style: any;
  onClick: () => void;
}
export default ToolItem;
