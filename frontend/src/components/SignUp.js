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
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const ToSignIn = () => {
    navigate("/signin");
  };

  const SignUp = async () => {
    const nameFirst = firstName;
    const nameLast = lastName;

    try {
      const response = await fetch('http://localhost:5001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nameFirst, nameLast, password}),
      });

      if (response.ok) {
        console.log('SignUp successful');
        navigate('/home');
      } else {
        console.log('SignUp failed');
      }
    } catch (error) {
      console.error('Error during SignUp:', error);
    }
    
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
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
                value={email}
                onChange={handleEmailChange}
              />
              <Stack direction="row" gap={1}>
                <TextField
                  id="first-name"
                  label="Enter First Name"
                  variant="outlined"
                  fullWidth
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
                <TextField
                  id="last-name"
                  label="Enter Last Name"
                  variant="outlined"
                  fullWidth
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </Stack>
              <TextField
                id="password"
                label="Enter Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
              />
              <TextField
                id="password-confirm"
                label="Re-Enter Password"
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />

              <Root>
                <Divider />
              </Root>
              <Button
                variant="contained"
                style={{ backgroundColor: "#26E5B7", color: "#2D2C2F" }}
                fullWidth
                onClick={SignUp}
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
