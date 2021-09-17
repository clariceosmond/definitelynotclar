import * as React from "react";
import { useState, useEffect } from "react";
import ghosticon from "../items/ghosticon.png";
import ghosticonhover from "../items/ghosticonhover.png";
import { makeStyles, Grid } from "@material-ui/core";
import IconUnit from "./IconUnit";
import linkedlogo from "../items/linkedlogo.png";
import ghlogo from "../items/ghlogo.png";

const useStyles = makeStyles({
  mainIconImg: {
    height: "200px",
    width: "200px",
    padding: "10px",
  },
  mainGrid: {
    width: "300px",
    alignItems: "center",
    justifyContent: "center",
  },
  iconGrid: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const MainIcon: React.FC = () => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);

  return (
    <Grid container direction="column" className={classes.mainGrid}>
      <img
        src={isHover ? ghosticonhover : ghosticon}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        alt=""
        className={classes.mainIconImg}
      />
      <Grid container direction="row" className={classes.iconGrid}>
        <a href="https://www.linkedin.com/in/clarice-osmond/" target="_blank">
          <IconUnit image={linkedlogo} />
        </a>
        <a href="https://github.com/clariceosmond" target="_blank">
          <IconUnit image={ghlogo} />
        </a>
      </Grid>
    </Grid>
  );
};
export default MainIcon;
