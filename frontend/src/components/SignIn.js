import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";


const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toSignUp = () => {
    navigate("/signup");
  };

  const SignIn = async () => {
   
    try {
      const response = await fetch('http://localhost:5001/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Login successful');
        navigate('/home');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    
  };

  const GoogleAuth = () => {
    window.location.href = 'http://localhost:5001/auth/google';
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      height="100vh"
      bgcolor={"#FF8652"}
    >
      <Card direction="column" sx={{ maxWidth: 500 }} style={{ padding: 30 }}>
        <ArrowBackIcon />
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
                Let's Sign In
              </Typography>
              

              <TextField
                id="email"
                label="Enter E-mail"
                variant="outlined"
                fullWidth
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                id="password"
                label="Enter Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
              />

              <Button
                variant="contained"
                style={{ backgroundColor: "#26E5B7", color: "#2D2C2F" }}
                fullWidth
                onClick={SignIn}
              >
                Sign In
              </Button>
              <Root>
                <Divider>OR</Divider>
              </Root>
              <Button
                variant="contained"
                style={{ backgroundColor: "#22201E" }}
                fullWidth
                onClick={GoogleAuth}
              >
                Sign In With Google
              </Button>

              <Typography
                variant="p"
                sx={{ fontSize: 10, textAlign: "center" }}
              >
                No Account?
              </Typography>
              <Typography
                variant="p"
                sx={{ fontSize: 10, textAlign: "center", cursor: "pointer" }}
                onClick={toSignUp}
              >
                Sign Up
              </Typography>
            </Grid>
          </CardContent>
        </Stack>
      </Card>
    </Grid>
  );
};

export default SignIn;
