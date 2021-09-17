import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useState, useEffect, useCallback } from "react";
import ghosticon from "../items/ghosticon.png";
import platform from "../items/platform.png";
import door from "../items/door.png";
import { Redirect, Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
  },
  mainIconImg: {
    height: "200px",
    width: "200px",
    padding: "10px",
    position: "absolute",
    bottom: "180px",
    zIndex: 2,
  },
  platform: {
    position: "absolute",
    bottom: 0,
    height: "200px",
    width: "100%",
    backgroundImage: `url(${platform})`,
  },
  door: {
    position: "absolute",
    bottom: "150px",
    right: 0,
    zIndex: 0,
  },
  helpText: {
    fontSize: "3rem",
    color: "gray",
    fontFamily: "Pixelar Regular W01 Regular",
    marginLeft: 20,
    marginTop: 20,
  },
  subhelpText: {
    fontSize: "2rem",
    color: "gray",
    fontFamily: "Pixelar Regular W01 Regular",
    marginLeft: 20,
  },
  subhelpLink: {
    fontSize: "2rem",
    color: "gray",
    fontFamily: "Pixelar Regular W01 Regular",
  },
});

const InteractRoute = () => {
  const classes = useStyles();
  const [xPos, setXPos] = useState(0);
  const [absXPos, setAbsXPos] = useState(0);
  const target = document.getElementById("doorIcon");
  const targetXPos = target?.getBoundingClientRect().x;
  const [isLinkHover, setLinkHover] = useState(false);

  const onKeyDown = useCallback(
    (e) => {
      const movingIcon = document.getElementById("movingIcon");
      if (e.keyCode === 39) {
        if (targetXPos && absXPos >= targetXPos) return;
        setXPos(xPos + 10);
        if (movingIcon) setAbsXPos(movingIcon?.getBoundingClientRect().x);
      } else if (e.keyCode === 37) {
        setXPos(xPos - 10);
        if (movingIcon) setAbsXPos(movingIcon?.getBoundingClientRect().x);
      }
    },
    [xPos]
  );

  const preventScroll = (e) => {
    console.log("test");
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  useEffect(() => {
    window.addEventListener("wheel", preventScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", preventScroll);
    };
  }, [preventScroll]);

  return targetXPos && absXPos >= targetXPos ? (
    <Redirect to="/main" />
  ) : (
    <div className={classes.container}>
      <Typography className={classes.helpText}>
        {" "}
        Use left & right arrows to move.
      </Typography>
      <Typography className={classes.subhelpText}>
        {" "}
        .....Or{" "}
        <Link
          to="/main"
          className={classes.subhelpLink}
          onMouseOver={() => setLinkHover(true)}
          onMouseLeave={() => setLinkHover(false)}
          style={{ textDecoration: isLinkHover ? "underline" : "none" }}
        >
          click me
        </Link>{" "}
        if you don't want to.
      </Typography>
      <img
        id="movingIcon"
        src={ghosticon}
        className={classes.mainIconImg}
        style={{ transform: `translate(${xPos}%, 0px)` }}
      ></img>
      <img id="doorIcon" className={classes.door} src={door}></img>
      <div className={classes.platform}></div>
    </div>
  );
};

export default InteractRoute;
