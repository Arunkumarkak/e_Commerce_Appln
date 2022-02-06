import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import useLogin from "./useLogin";

const useStyles = makeStyles(() => ({
  splitLeft: {
    height: "100%",
    left: "0",
    background: "#0066ff",
    width: "50%",
    position: "fixed",
    zindex: "1",
    top: "0",
    overflow: "hidden",
    paddingTop: "20px",
    boxShadow: "0px 4px 24px rgba(242, 153, 74, 0.4)"
  },
  splitRight: {
    height: "100%",
    right: "0",
    width: "50%",
    background: "#f8f8f8",
    position: "fixed",
    zindex: "1",
    top: "0",
    overflow: "hidden",
    paddingTop: "20px"
  },
  title: {
    color: "#ffffff",
    opacity: "90%",
    marginLeft: "40px",
    marginTop: "40px",
    fontWeight: "600",
    fontSize: "22px",
    fontStyle: "normal"
  },
  loginCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "30px 42px",
    position: "absolute",
    width: "auto",
    height: "60%",
    left: "15%",
    top: "20%",
    background: "#ffffff",
    borderRadius: "20px"
  },
  headerText: {
    color: "#4b4b4b",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "30px"
  },
  loginEnter: {
    color: "#4b4b4b",
    fontSize: "18px",
    fontWeight: "500",
    fontStyle: "normal"
  },
  loginLabel: {
    color: "#4b4b4b",
    fontSize: "12px",
    paddingTop: "20px",
    paddingBottom: "5px",
    fontWeight: "500",
    fontStyle: "normal"
  },
  buttonText: {
    paddingTop: "40px",
    paddingBottom: "30px",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "15px"
  },
  input: {
    borderRadius: "5px"
  }
}));

const Login = () => {
  const {
    handleSubmit
  } = useLogin();
  const classes = useStyles();
  return (
    <Grid>
      <Grid className={classes.splitLeft}>
        <Typography variant="h5" className={classes.title}>
          StorePlus
        </Typography>
      </Grid>
      <Grid className={classes.splitRight}>
        <Card className={classes.loginCard}>
          <Typography variant="h5" className={classes.headerText} gutterBottom>
            Welcome back!
          </Typography>
          <Typography variant="h6" className={classes.loginEnter}>
            Enter your e-mail and password to login.
          </Typography>
          {/* Email */}
          <Typography htmlFor="email" className={classes.loginLabel}>
            E-MAIL
          </Typography>
          <Grid>
            <TextField
              id="Email"
              name="Email"
              type="text"
              disabled={true}
              variant="outlined"
              value="arunstore@gmail.com"
              InputProps={{
                className: classes.input
              }}
            />
          </Grid>
          {/* Password */}
          <Typography htmlFor="password" className={classes.loginLabel}>
            PASSWORD
          </Typography>
          <Grid>
            <TextField
              id="Password"
              name="Password"
              type="password"
              disabled={true}
              value="Arun1234"
              variant="outlined"
              InputProps={{
                className: classes.input
              }}
            />
          </Grid>
          {/* Button */}
          <Grid className={classes.buttonText}>
            <Button onClick={handleSubmit} variant="contained">
              SIGN IN
            </Button>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Login;
