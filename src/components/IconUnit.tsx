import * as React from "react";
import { useState } from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
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
    "&:hover": {
      backgroundImage: `url(${iconshade})`,
    },
  },
  iconTip: {
    position: "absolute",
    display: "none",
    width: "150px",
    height: "auto",
    border: "5px solid transparent",
    borderImage: `url(${brownbor}) 16 stretch`,
    zIndex: 1,
    backgroundImage: `url(${bgbrown})`,
    alignItems: "center",
    fontWeight: 500,
    fontSize: "1.5rem",
    fontFamily: "Pixelar Regular W01 Regular",
    padding: "3px",
  },
  iconTipTitle: {
    fontWeight: 700,
    fontSize: "2rem",
    fontFamily: "Pixelar Regular W01 Regular",
  },
  imageIc: {
    margin: "7.5px",
    width: "35px",
    height: "35px",
  },
});

const IconUnit: React.FC<IconUnitProps> = (props) => {
  const classes = useStyles();
  const { image, text } = props;
  const [isHover, setHover] = useState(false);

  return (
    <div>
      <div
        className={classes.iconUnit}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {image && <img className={classes.imageIc} alt="" src={image} />}
      </div>{" "}
      {text && (
        <Grid
          container
          direction="column"
          className={classes.iconTip}
          style={{ display: isHover ? "block" : "none" }}
        >
          <Typography className={classes.iconTipTitle}>{text}</Typography>
        </Grid>
      )}
    </div>
  );
};

interface IconUnitProps {
  image?: string;
  text?: string;
}

export default IconUnit;
