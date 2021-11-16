import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  const [inputValue, setinputValue] = useState("");
  const [outputValue, setoutputValue] = useState("");

  const setSessionStorage = (name, value) => {
    return window.sessionStorage.setItem(name, value);
  };


  const HandleApiSubmit = (e) => {
    axios
      .post(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      .then((res) => {
        console.log(res);
        let result = res["data"]["result"];

        setoutputValue(result["short_link"]);

        setSessionStorage("full_share_link", result["full_share_link"]);
        setSessionStorage("full_short_link", result["full_short_link"]);
        setSessionStorage("original_link", result["original_link"]);
        setSessionStorage("share_link", result["share_link"]);
        setSessionStorage("short_link", result["short_link"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };



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
          <Typography variant="h6" className={classes.title}>
            <Link to="/list" style={{ textDecoration: "none", color: "#fff" }}>
              Admin
            </Link>
          </Typography>
          <Button color="inherit">
            <AccountCircleIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <section className="input-area">
        <div className="pure-input">
          <TextField
            id="outlined-basic"
            label="Input"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={HandleApiSubmit}>
            Get / Holen
          </Button>
        </div>
        <div
          className="pure-input output-input-wrapper"
          style={{ flexDirection: "column" }}
        >
          <TextField
            id="outlined-basic copyfield"
            label="Output"
            variant="outlined"
            value={outputValue}
            onChange={(e) => setoutputValue(e.target.value)}
            className="output-input"
          />

          <Button 
            variant="contained" 
            color="primary" 
            className="output-button" 
            onClick={() =>  navigator.clipboard.writeText(outputValue)}
          >
            Copy / Kopieren

          </Button> 
    
          <Button 
            variant="contained" 
            color="primary" 
            className="output-button" 
            onClick={() => window.open(outputValue)}
          >
            Test

          </Button>
        </div>
      </section>
    </div>
  );
};
