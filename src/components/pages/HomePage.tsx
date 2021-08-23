import * as React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import classes from "*.module.css";

const useStyles = makeStyles({
  text: {
    fontSize: "3rem",
    fontFamily: "Pixelar Regular W01 Regular",
  },
});
const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid direction="column">
      <Typography className={classes.text}>Page 0. Home</Typography>
      <Typography className={classes.text}>Page 1. Work Experience</Typography>
      <Typography className={classes.text}>Page 2. Languages</Typography>
      <Typography className={classes.text}>Page 3. Etc</Typography>
    </Grid>
  );
};

export default HomePage;
