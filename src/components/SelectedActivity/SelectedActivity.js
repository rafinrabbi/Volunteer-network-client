import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import image from "../../resources/images/extraVolunteer.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const SelectedActivity = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteActivity = (_id) => {
    console.log("deleting activity");
    fetch(
      `https://secret-caverns-37131.herokuapp.com/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("deleting activity");
      });
    setIsDeleted(true);
  };
  const classes = useStyles();

  const { selectedActivity, date } = props.activity;
  return (
    <Col md={6} lg={6}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid
            style={{ backgroundColor: "#E5E5E5", borderRadius: 10 }}
            container
            spacing={2}
          >
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {selectedActivity}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {date}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Button onClick={handleDeleteActivity}>Remove</Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Col>
  );
};

export default SelectedActivity;
