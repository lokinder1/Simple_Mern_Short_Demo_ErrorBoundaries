import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import PersonalFooter from "@bit/lokinder1.footers.personal-footer";
import HomeComponent from "./components/HomeComponent";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    "overflow-x": "hidden",
  },
  main: {
    marginBottom: "-1px",
    minHeight: "85vh",
  },

  component1: {
    padding: " 50px !important",
  },

  button: {
    margin: " 8px !important",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <div className={classes.main}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
          </Link>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid className={classes.component1} item xs={12} sm={6}>
                  {/* <Paper elevation={3}>Home</Paper> */}
                  <HomeComponent />
                </Grid>
              </Grid>
            </Route>
          </Switch>
        </div>
        <PersonalFooter />
      </div>
    </Router>
  );
}