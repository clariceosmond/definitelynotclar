import * as React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import brownbor from "../../items/brown-bor.png";
import bgbrown from "../../items/bg-brown.png";

const useStyles = makeStyles({
  workExpGrid: {
    height: "80%",
    width: "100%",
    margin: "5px",
    justifyContent: "center",
    alignItems: "center",
  },
  workExpCard: {
    height: "100%",
    border: "5px solid transparent",
    borderImage: `url(${brownbor}) 5 stretch`,
    backgroundImage: `url(${bgbrown})`,
    width: "400px",
  },
  workTitle: {
    fontSize: "3rem",
    fontWeight: 500,
    fontFamily: "Pixelar Regular W01 Regular",
  },
  workDate: {
    fontSize: "2rem",
    fontWeight: 300,
    fontFamily: "Pixelar Regular W01 Regular",
  },
  workDesc: {
    fontSize: "2rem",
    fontWeight: 700,
    fontFamily: "Pixelar Regular W01 Regular",
  },
});

const WorkExpPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.workExpGrid}>
      {" "}
      <Card className={classes.workExpCard}>
        {" "}
        <CardContent>
          <Typography className={classes.workTitle}> Alida </Typography>
          <Typography className={classes.workDesc}>
            {" "}
            Software Developer Intern{" "}
          </Typography>
          <Typography className={classes.workDate}>
            {" "}
            January - September 2021{" "}
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.workExpCard} style={{ marginLeft: "20px" }}>
        <CardContent>
          <Typography className={classes.workTitle}>
            {" "}
            Clearbridge Mobile{" "}
          </Typography>
          <Typography className={classes.workDesc}>
            {" "}
            Android Developer Intern{" "}
          </Typography>
          <Typography className={classes.workDate}>
            {" "}
            September - December 2019{" "}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WorkExpPage;
