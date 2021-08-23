import * as React from "react";
import { useState, useEffect } from "react";
import ghosticon from "../items/ghosticon.png";
import ghosticonhover from "../items/ghosticonhover.png";
import ghosticonpants from "../items/ghosticonpants.png";
import { makeStyles, Grid } from "@material-ui/core";
import MainIconUnit from "./MainIconUnit";
import pants from "../items/pants.png";
import band from "../items/headband.png";
import ghosticonband from "../items/ghosticonband.png";

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
  const [iconChangeNum, setIconChangeNum] = useState(0);

  const toggleIconNumber = (value: number) => {
    if (value === iconChangeNum) {
      setIconChangeNum(0);
    } else {
      setIconChangeNum(value);
    }
  };
  return (
    <Grid container direction="column" className={classes.mainGrid}>
      <img
        src={
          isHover
            ? ghosticonhover
            : iconChangeNum === 1
            ? ghosticonpants
            : iconChangeNum === 2
            ? ghosticonband
            : ghosticon
        }
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        alt=""
        className={classes.mainIconImg}
      />
      <Grid container direction="row" className={classes.iconGrid}>
        <MainIconUnit
          image={pants}
          onClick={() => toggleIconNumber(1)}
          isClicked={iconChangeNum === 1}
        />
        <MainIconUnit
          image={band}
          onClick={() => toggleIconNumber(2)}
          isClicked={iconChangeNum === 2}
        />
      </Grid>
    </Grid>
  );
};
export default MainIcon;
