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
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const SignUp = () => {
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
                Let's Sign Up
              </Typography>

              <TextField
                id="email"
                label="Enter E-mail"
                variant="outlined"
                size="small"
                sx={{ label: {color: "#BAB7B4", fontSize: 12}}}
                fullWidth
              />
              <Stack direction="row" gap={1}>
                <TextField
                  id="first-name"
                  label="Enter First Name"
                  variant="outlined"
                  size="small"
                  sx={{ label: {color: "#BAB7B4", fontSize: 12}}}
                  fullWidth
                />
                <TextField
                  id="last-name"
                  label="Enter Last Name"
                  variant="outlined"
                  size="small"
                  sx={{ label: {color: "#BAB7B4", fontSize: 12}}}
                  fullWidth
                />
              </Stack>
              <TextField
                id="password"
                label="Enter Password"
                variant="outlined"
                size="small"
                sx={{ label: {color: "#BAB7B4", fontSize: 12}}}
                fullWidth
              />
              <TextField
                id="password-confirm"
                label="Re-Enter Password"
                variant="outlined"
                size="small"
                sx={{ label: {color: "#BAB7B4", fontSize: 12}}}
                fullWidth
              />

              <Root>
                <Divider />
              </Root>
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
                  Sign Up
                </Button>
              </Link>
            </Grid>
          </CardContent>
        </Stack>
      </Card>
    </Grid>
  );
};

export default SignUp;
