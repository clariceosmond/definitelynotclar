import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import iconbg from "../items/icon-bg.png";
import iconshade from "../items/icon-shade.png";
import brownbor from "../items/brown-bor.png";
import bgbrown from "../items/bg-brown.png";

const useStyles = makeStyles({
  iconUnit: {
    height: "50px",
    width: "50px",
    backgroundImage: `url(${iconbg})`,
    margin: "10px",
    position: "relative",
    zIndex: 0,
  },
  iconTip: {
    position: "absolute",
    display: "none",
    width: "100px",
    height: "25px",
    border: "5px solid transparent",
    borderImage: `url(${brownbor}) 16 stretch`,
    zIndex: 1,
    backgroundImage: `url(${bgbrown})`,
  },
  imageIc: {
    margin: "7.5px",
    width: "35px",
    height: "35px",
  },
});

const MainIconUnit: React.FC<MainIconUnitProps> = (props) => {
  const classes = useStyles();
  const { image, text, onClick, isClicked } = props;
  const [isHover, setHover] = useState(false);

  return (
    <div>
      <div
        className={classes.iconUnit}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
        style={{
          backgroundImage: isClicked || isHover ? `url(${iconshade})` : "",
        }}
      >
        {image && <img className={classes.imageIc} alt="" src={image} />}
      </div>{" "}
      {text && (
        <div
          className={classes.iconTip}
          style={{ display: isHover ? "block" : "none" }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

interface MainIconUnitProps {
  image?: string;
  text?: string;
  onClick?: () => void;
  isClicked: boolean;
}

export default MainIconUnit;
