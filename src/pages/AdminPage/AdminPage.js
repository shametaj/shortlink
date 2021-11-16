import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import WarningIcon from "@material-ui/icons/Warning";
import Card from "@material-ui/core/Card";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    flexGrow: 1,
  },
});

const getSessionStorage = (name) => {
  return window.sessionStorage.getItem(name);
};


export const TableLocal = () => {
  const classes = useStyles();
  return (
    <div className="inputcontainer">
      {" "}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ShortLink
          </Typography>

          <Button color="inherit">
            <AccountCircleIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <section className="table-area">
        {" "}
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Link
                    to="/"
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      display: "flex",
                    }}
                  >
                    <ControlPointIcon />
                    New Link / Neuer Link
                  </Link>
                </TableCell>

                <TableCell align="right">Original Link</TableCell>
                <TableCell align="right">Full Share Link</TableCell>
                <TableCell align="right">Full Short Link</TableCell>
                <TableCell align="right">Share Link</TableCell>
                <TableCell align="right">Short Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  {getSessionStorage("original_link")}
                </TableCell>
                <TableCell align="right">
                  {getSessionStorage("full_share_link")}
                </TableCell>
                <TableCell align="right">
                  {getSessionStorage("full_short_link")}
                </TableCell>
                <TableCell align="right">
                  {getSessionStorage("share_link")}
                </TableCell>{" "}
                <TableCell align="right">
                  {getSessionStorage("short_link")}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Card className="card-warpper">
          <CardContent className="card-content">
            <WarningIcon />
            <Typography className="text" color="textSecondary" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              adipisci fuga excepturi libero repellat impedit dolores?
              Necessitatibus sequi ea nisi.
            </Typography>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
