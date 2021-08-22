import * as React from "react";
import { useState } from "react";
import Logic from "./Logic";
import ghosticon from "../items/ghosticon.png";
import ghosticonhover from "../items/ghosticonhover.png";
import yakuzaIdle from "../items/yakuza_idle.png";
import caflag from "../items/ca-flag.png";
import { makeStyles } from "@material-ui/core";
import brownbor from "../items/brown-bor.png";
import bgbrown from "../items/bg-brown.png";

const useStyles = makeStyles({
  mainbox: {
    display: "flex",
    maxWidth: "1000px",
    flexDirection: "column",
    textAlign: "center",
    margin: "0 auto",
  },
  mainboxitem: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    border: "16px solid transparent",
    borderImage: `url(${brownbor}) 16 stretch`,
    backgroundImage: `url(${bgbrown})`,
    overflow: "hidden",
    "& h1": {
      fontSize: "50px",
    },
    "& h2": {
      fontSize: "30px",
    },
  },
  mainIconImg: {
    height: "auto",
    width: "300px",
    padding: "10px",
  },
});

const MainContainer: React.FC = () => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={classes.mainbox}>
      <Logic />
      <div className={classes.mainboxitem}>
        <img
          src={isHover ? ghosticonhover : ghosticon}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          alt=""
          className={classes.mainIconImg}
        />
        <div style={{ width: "500px" }}>
          <h1> Clarice Osmond </h1>
          <h2> Education: University of Waterloo </h2>
          <h2> 3B Computer Science</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "500px",
              justifyContent: "center",
            }}
          >
            <img
              src={caflag}
              alt=""
              style={{
                width: "50px",
                height: "35px",
                marginRight: "15px",
                marginTop: "20px",
              }}
            />
            <h2> ON, Canada </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
