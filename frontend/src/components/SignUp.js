import React from "react";
import "../styles/TestComponent.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const SignUp = () => {
  const navigate = useNavigate();
  const ToSignIn = () => {
    navigate("/signin");
  };

  const SignUp = () => {
    window.location.herf = "http://localhost:5001/auth/signup";
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      height="100vh"
      bgcolor={"#FF8652"}
    >
      <Card direction="column" sx={{ maxWidth: 500 }} style={{ padding: 30 }}>
        <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={ToSignIn} />
        <Stack direction="column" alignItems="center" gap={1}>
          <CardContent className="cardContentStyle" sx={{ width: 300 }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              gap={2}
            >
              <AccountCircleIcon />
              <Typography
                variant="h2"
                sx={{ fontSize: 30, textAlign: "center" }}
              >
                Let's Sign Up
              </Typography>

              <TextField
                id="email"
                label="Enter E-mail"
                variant="outlined"
                fullWidth
              />
              <Stack direction="row" gap={1}>
                <TextField
                  id="first-name"
                  label="Enter First Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="last-name"
                  label="Enter Last Name"
                  variant="outlined"
                  fullWidth
                />
              </Stack>
              <TextField
                id="password"
                label="Enter Password"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="password-confirm"
                label="Re-Enter Password"
                variant="outlined"
                fullWidth
              />

              <Root>
                <Divider />
              </Root>
              <Button
                variant="contained"
                style={{ backgroundColor: "#26E5B7", color: "#2D2C2F" }}
                fullWidth
              >
                Sign Up
              </Button>
            </Grid>
          </CardContent>
        </Stack>
      </Card>
    </Grid>
  );
};

export default SignUp;
