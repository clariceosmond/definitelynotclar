import * as React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: "3rem",
    fontFamily: "Pixelar Regular W01 Regular",
    marginLeft: 20,
    marginTop: 20,
  },
});

const ResponseApp: React.FC = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.title}>
      {" "}
      This website is not responsive enough for this screen size. It's
      embarassing.
    </Typography>
  );
};
export default ResponseApp;
