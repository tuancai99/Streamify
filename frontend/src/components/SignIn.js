import React from "react";
import "../styles/TestComponent.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GoogleIcon from "@mui/icons-material/Google";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const SignIn = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      height="100vh"
      bgcolor={"#FF8652"}
      fontFamily={"Sora"}
    >
      <Card direction="column" sx={{ width: 300, maxWidth: 500, borderRadius: 3}} style={{ padding: 30 }}>
        <Link to={"/"}>
          <ArrowBackIcon />
        </Link>

        <Stack direction="column" alignItems="center" gap={1}>
          <CardContent className="cardContentStyle" sx={{ width: 270 }}>
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
                sx={{ fontSize: 30, textAlign: "center", fontWeight: 700, marginBottom: 2}}
              >
                Let's Sign In
              </Typography>

              <TextField
                id="email"
                label="Enter E-mail"
                variant="outlined"
                size="small"
                sx={{ label: {color: "#BAB7B4", fontSize: 15}}}
                fullWidth
              />
              <TextField
                id="password"
                label="Enter Password"
                variant="outlined"
                size="small"
                sx={{ label: {color: "#BAB7B4", fontSize: 15}}}
                fullWidth
              />

              <Link to={"/"} style={{ width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#26E5B7",
                    color: "#2D2C2F",
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: 2,
                  }}
                  fullWidth
                >
                  Sign In
                </Button>
              </Link>
              <Root>
                <Divider>
                  <Typography variant="p" sx={{ fontWeight: 700 }}>
                    or
                  </Typography>
                </Divider>
              </Root>
              <Link to={"/"} style={{ width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#777674",
                    alignContent: "center",
                    gap: 3,
                    padding: 1,
                    boxShadow: "none",
                    borderRadius: 2,
                  }}
                  fullWidth
                >
                  <GoogleIcon />
                  <Typography
                    variant="p"
                    sx={{ fontWeight: 700, textTransform: "none" }}
                  >
                    Sign In With Google
                  </Typography>
                </Button>
              </Link>

              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography
                  variant="p"
                  sx={{ fontSize: 10, textAlign: "center" }}
                >
                  No Account?
                </Typography>
                <Link to={"/signup"} style={{textDecoration: "none"}}>
                  <Typography
                    variant="p"
                    sx={{ fontSize: 10, textAlign: "center", fontWeight: 700, color: "#449778"}}
                  >
                    Sign Up
                  </Typography>
                </Link>
              </div>
            </Grid>
          </CardContent>
        </Stack>
      </Card>
    </Grid>
  );
};

export default SignIn;
